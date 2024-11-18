### Live Project

You can visit the live project here: [Fitness Manager Live](https://membership-management-system-task-front-end.vercel.app)

## Fitness Manager

### Features:

## Authentication

- Integrate JWT-based authentication for secure access.

- **Role-based Access**: The platform supports three user roles with different levels of access:
  - **Admin**
  - **Trainer**
  - **Trainee**

## User Roles and Access

Fitness Manager have three distinct user roles with different levels of access and permissions:

1. **Admin**:

   - Admin can create Trainer
     -Admin can add,update and delete trainers
     -Admin can create class and schedule it as 5 max schedule class and 2 hour class.

   - To create a Admin account, visit this link: [Create Admin Account](https://membership-management-system-task-front-end.vercel.app/admin). and also when create account must have provide the Secret Key.and the secret key is **super-secret-key**

2. **Trainer**:

   - trainer can see his class shedule

3. **Trainee**:

   - Trainee can see which classes he booked
   - Trainee can book class schdule

## relavent Features

- maximum of 5 class schedules
- The system enforces a maximum of 10 trainees per class schedule

## Routes Details

# Admin Api EndPoint

#### Create Admin Account:https://membership-management-system-backend.vercel.app/api/v1/admin/signUp (Post)

#### Create Trainer Account:https://membership-management-system-backend.vercel.app/api/v1/admin/trainers (Post)

#### Get Trainers :https://membership-management-system-backend.vercel.app/api/v1/admin/trainers (Get)

#### Update Trainers:https://membership-management-system-backend.vercel.app/api/v1/admin/trainers/:id (Patch)

#### Delete Trainers:ttps://membership-management-system-backend.vercel.app/api/v1/admin/trainers/:id (delete)

#### Create Class :https://membership-management-system-backend.vercel.app/api/v1/admin/createClass (Post)

#### Get Class :https://membership-management-system-backend.vercel.app/api/v1/admin/getClass (Get)

#### Get Single Trainer :https://membership-management-system-backend.vercel.app/api/v1/admin/trainer/:id (Get)

# Trainee Api EndPoint

#### Book Class :https://membership-management-system-backend.vercel.app/api/v1/trainee/book/:id (Patch)

#### View Class:https://membership-management-system-backend.vercel.app/api/v1/trainee/view/:id (Get)

# Trainer Api EndPoint

#### Get Trainer Schedule Class :https://membership-management-system-backend.vercel.app/api/v1/trainer/:id (Get)

# Auth Api EndPoint

#### Trainee Account :https://membership-management-system-backend.vercel.app/account/signUp (Post)

### User Login :https://membership-management-system-backend.vercel.app/account/signIn (Post)

### Update User :https://membership-management-system-backend.vercel.app/account/:id (Patch)

### Get Single User By Email :https://membership-management-system-backend.vercel.app/account/:email (get)

relationship diagram link: https://lucid.app/lucidchart/653b68dd-4537-4e8e-becb-926cd303cdfc/edit?invitationId=inv_c75de30b-4b3a-4ae2-9b8c-81f273ed1d3d
