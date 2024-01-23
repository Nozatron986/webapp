from flask import Blueprint, render_template, request, flash, jsonify
from flask_login import login_required, current_user
from .models import Note, User
from . import db
import json

views = Blueprint('views', __name__)

@views.route('/customers', methods=['GET', 'POST'])
@login_required
def customer_home():
    if request.method == 'POST':
        note = request.form.get('note')

        if len(note) < 1:
            flash('Note is too short!', category='error') 
        else:
            new_note = Note(data=note, user_id=current_user.id)  #providing the schema for the note 
            db.session.add(new_note) #adding the note to the database 
            db.session.commit()
            flash('Note added!', category='success')

    # Fetch notes for each user
    all_users = User.query.all()
    for u in all_users:
        if u.is_customer:
            all_users.remove(u)

    return render_template("customer_home.html", user=current_user, all_users=all_users)

@views.route('/home', methods=['GET', 'POST'])
@login_required
def home():
    if current_user.is_customer:
        flash('not available to you', category='error')
        return render_template("login.html", user=current_user)
    else:
        if request.method == 'POST':
            note = request.form.get('note')#Gets the note from the HTML 

            if len(note) < 1:
                flash('Note is too short!', category='error') 
            else:
                new_note = Note(data=note, user_id=current_user.id)  #providing the schema for the note 
                db.session.add(new_note) #adding the note to the database 
                db.session.commit()
                flash('Note added!', category='success')

        return render_template("home.html", user=current_user)

@views.route('/delete-note', methods=['POST'])
def delete_note():  
    note = json.loads(request.data) # this function expects a JSON from the INDEX.js file 
    noteId = note['noteId']
    note = Note.query.get(noteId)
    if note:
        if note.user_id == current_user.id:
            db.session.delete(note)
            db.session.commit()

    return jsonify({})

@views.route('/search', methods=['POST'])
@login_required
def search():
    keyword = request.form.get('keyword')

    all_users = User.query.all()

    if current_user.is_customer:
        filtered_notes = [note for note in all_users if keyword.lower() in note.data.lower()]
    else:
        filtered_notes = [note for note in current_user.notes if keyword.lower() in note.data.lower()]

    return render_template('filtered_notes.html', user=current_user, filtered_notes=filtered_notes)