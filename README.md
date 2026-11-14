# Team Forge

Team Forge is a student skills and project team management web application. It includes a Spring Boot backend, a student REST API, and a static web interface.

## Requirements

- Java 21 or later
- Maven 3.9 or later (or the included Maven Wrapper)

## Run locally

From this directory, run:

```powershell
./mvnw.cmd spring-boot:run
```

On macOS or Linux, use `./mvnw spring-boot:run`. The app starts at <http://localhost:8080> and stores its local SQLite database in `ipms.db` (ignored by Git).

To build a jar:

```powershell
./mvnw.cmd clean package
```

The jar is created under `target/`.

## API

Student records are available at `/api/students`:

- `GET /api/students` — list students
- `GET /api/students/{id}` — get one student
- `POST /api/students` — create a student
- `PUT /api/students/{id}` — update a student
- `DELETE /api/students/{id}` — delete a student

## GitHub submission

Create an empty GitHub repository named `team-forge`, then from this project directory run:

```powershell
git init
git add .
git commit -m "Prepare Team Forge project"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/team-forge.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. GitHub will prompt you to authenticate if needed.
