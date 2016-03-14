# ng-inline-confirm
Angular inline confirm button

![inline confirm](https://zippy.gfycat.com/AcclaimedDearFlyingsquirrel.gif "In action!")

# About
This is an angular directive that displays a confirmation message inline with the button, instead of a confirmation popup (the default js confirm)

# Install
You can use **bower** to install it, by using:
`bower install --save ng-inline-confirm`

and you should be good to go.

Also, you can download a zip with the source from this repo.

# Usage
To use it, include in your module as a dependency:

```javascript
angular.module('example', ['ng-inline-confirm'])
```

then use the directive:

```html
<inline-confirm message="Do you really want to quit?" onValidate="validateCallback" onConfirm="confirmCallback" onReject="rejectCallback" button-label="Quit"></inline-confirm>
```

and of course, in the controller you need to declare those callbacks functions (validateCallback, confirmCallback and rejectCallback)

# Options
This directive has 5 options available, none of them are required:

**buttonLabel**: the default label of the button in the default state (i.e. "Cancel")
**message**: the message to display when confirmating (i.e. "Are you sure you want to cancel?")
**onValidate**: a callback function that will be called when the user clicks on the button (i.e. clicking "Cancel")
**onConfirm**: a callback function called when the user confirm the action (i.e. clicking "yes i'm sure")
**onReject**: a callback function called when the user rejects the action (i.e. clicking "no")

