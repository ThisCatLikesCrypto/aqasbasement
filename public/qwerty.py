# A simple authentication program

# Create an empty dictionary to store user credentials
users = {}

def register():
    print("\n--- Register ---")
    username = input("Enter a new username: ")
    
    # Check if the username is already taken
    if username in users:
        print("Username already taken! Try a different one.")
    else:
        password = input("Enter a new password: ")
        users[username] = password
        print("Registration successful!")

def login():
    print("\n--- Login ---")
    username = input("Enter your username: ")
    password = input("Enter your password: ")
    
    # Check if the username and password are correct
    if username in users and users[username] == password:
        print(f"Login successful! Welcome, {username}.")
    else:
        print("Invalid username or password. Try again.")

while True:
    print("\n--- Main Menu ---")
    print("1. Register")
    print("2. Login")
    print("3. Quit")
        
    choice = input("Choose an option (1/2/3): ")
        
    if choice == "1":
        register()
    elif choice == "2":
        login()
    elif choice == "3":
        print("Goodbye!")
        break
    else:
        print("Invalid choice! Please select 1, 2, or 3.")