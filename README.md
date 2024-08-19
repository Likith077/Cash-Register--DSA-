

# Cash Register

This project is a simple cash register application that calculates the change due when a purchase is made. It provides feedback on whether the cash register has enough funds to complete the transaction.

## Features

- **Calculate Change**: Determine the amount of change due based on the price of the item and the cash provided.
- **Check Cash Register Status**: Returns the status of the cash register (`OPEN`, `CLOSED`, or `INSUFFICIENT_FUNDS`) based on the availability of cash in the register.
- **User-Friendly Interface**: The application has a straightforward interface for inputting cash and viewing results.

## Files

- **index.html**: The HTML structure of the application.
- **style.css**: The CSS file that styles the application.
- **script.js**: The JavaScript file containing the logic to calculate change and update the user interface.

## How to Use

1. Open the `index.html` file in a web browser.
2. Enter the amount of cash provided by the customer in the input field.
3. Click the "Purchase" button to calculate the change due.
4. The application will display the status of the transaction and the breakdown of the change provided.

## Example

- If the item price is $19.50 and the customer provides $20.00, the application will calculate the change and display the amount returned.

## Project Structure

- `index.html`: Contains the HTML code for the basic structure and layout.
- `style.css`: Provides styling for the HTML elements to create a clean and user-friendly interface.
- `script.js`: Contains the logic to handle cash register calculations and updates the DOM based on user input.

## Customization

- **Change the Price**: You can modify the price of the item by changing the `price` variable in the `script.js` file.
- **Update Cash in Drawer**: Modify the `cid` array in `script.js` to update the amounts of each currency type available in the cash register.

## License

This project is licensed under the MIT License.

