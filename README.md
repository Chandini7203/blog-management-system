# Blog Management System

A RESTful API for managing a blogging platform with user authentication, role-based access control, and blog management features.

---

## Features

### **User Management**
- Users can sign up and log in.
- Email verification required before accessing private APIs.
- Roles: Admin, Editor, User.

### **Role-Based Access Control**
- **Admin**:
  - Create, edit, and delete blogs.
  - Assign blogs to editors.
- **Editor**:
  - Edit blogs assigned to them by an admin.
- **User**:
  - View blogs and add/delete their own comments.

### **Blog Management**
- Each blog includes:
  - Title (required)
  - Content (required)

### **Comment Management**
- Users can add comments to blogs.
- Users can delete their own comments.

---

## Technologies Used
- **Backend Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Email Service**: Nodemailer
- **Environment Variables**: dotenv

---

## Installation and Setup

### **1. Clone the Repository**
```bash
git clone https://github.com/Chandini/blog-management-system.git
cd blog-management-system
