document.addEventListener('DOMContentLoaded', () => {
    initModals();
    loadStudents();
});
async function loadStudents() {
    try {
        const response = await fetch('/api/students');

        if (!response.ok) {
            throw new Error('Failed to load students');
        }

        const students = await response.json();
        const tbody = document.getElementById('studentTableBody');

        if (!tbody) return;

        tbody.innerHTML = '';

        students.forEach(student => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.department}</td>
                <td>${student.year}</td>
                <td>${student.skills || ''}</td>
                <td><span class="tag tag-active">Active</span></td>
                <td class="row-actions">
                    <button onclick="viewRecord('student', ${student.id})">
                        <i class="bi bi-eye"></i>
                    </button>
                    <button onclick="editRecord('student', ${student.id})">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="danger" onclick="deleteRecord('student', ${student.id})">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            `;

            tbody.appendChild(row);
        });

    } catch (error) {
        console.error('Error loading students:', error);
    }
}
document.getElementById('addStudentForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();

    const student = {
        name: document.getElementById('studentName').value,
        email: document.getElementById('studentEmail').value,
        department: document.getElementById('studentDepartment').value,
        year: 1,
        skills: ""
    };

    const response = await fetch('/api/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
    });

    if (response.ok) {
        alert('Student added successfully!');
        this.reset();
        loadStudents();
    } else {
        alert('Failed to add student');
    }
});
function initModals() {
    document.querySelectorAll('[data-modal-open]').forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = document.getElementById(btn.dataset.modalOpen);
            modal?.classList.add('show');
        });
    });

    document.querySelectorAll('[data-modal-close]').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal-overlay')?.classList.remove('show');
        });
    });

    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('show');
            }
        });
    });
}