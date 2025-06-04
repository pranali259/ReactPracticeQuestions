React Password Toggle Component
This project features a reusable React component that provides a secure and user-friendly way for users to input passwords, with the added functionality of toggling password visibility.

Features
Secure Input: Accepts user-entered text securely.
Placeholder: Displays "Enter password" as a placeholder when the input is empty.
Focusable & Editable: The input field is always focusable and editable.
Always Shows Placeholder: The placeholder text is always visible when the input is empty, even when focused.
Password Masking (Default): By default, the password input is masked (hidden).

Visibility Toggle Icon:
Utilizes lucide-react icons for a clean and modern look.
Shows the EyeOff icon when the password is hidden.
Shows the Eye icon when the password is visible.
Clicking the icon instantly toggles the password's visibility between masked and unmasked.
Live Label Update: A descriptive label appears below the input field, dynamically updating to:
"Password Hidden" when the password is masked.
"Password Visible" when the password is unmasked.

Solution ------------------------------------------------------------------------------------------

To complete the TogglePassword.jsx component according to the requirements, you need to implement the following:

1. State Management: 
Use useState to manage the password's visibility (masked/unmasked) and the input field's value.

2. Conditional Rendering: 
Dynamically render Eye or EyeOff based on the visibility state.

3. Event Handling: 
Add an onClick handler to the toggle icon to switch the visibility state.

4. Input Type: 
Change the input type between password and text based on visibility.

5. Label Update: 
Dynamically update the visibility label ("Password Hidden" / "Password Visible").