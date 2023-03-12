function caesarCipher(str, shift) {
    // Wrap shift amount
    shift = shift % 26;
    // Convert string to uppercase
    str = str.toUpperCase();
    // Initialize result string
    let result = "";
    // Loop through string
    for (let i = 0; i < str.length; i++) {
      // Get character code
      let charCode = str.charCodeAt(i);
      // If character is a letter
      if (charCode >= 65 && charCode <= 90) {
        // Apply shift amount
        charCode += shift;
        // If character code goes beyond Z, wrap around to A or Z and continue counting backwards
        if (charCode > 90) {
          charCode -= 26;
        } else if (charCode < 65) {
          charCode += 26;
        }
      }
      // Convert character code to letter and add to result string
      result += String.fromCharCode(charCode);
    }
    // Return result string
    return result;
  }
  

//   Example usage
// let encrypted = caesarCipher("You WON LOL", 99);
// console.log(encrypted); // "GCM EGV DXD"
// let decrypted = caesarCipher(encrypted, -99);
// console.log(decrypted); // "YOU WON LOL"

// const input_text = document.getElementById('search-box-text');
let decode = '';


function onButtonClick() {
    const input_text = document.getElementById('search-box-text');
    const input_number = document.getElementById('search-box-number');
    const button_value = document.getElementById('search-btn');
    const new_text_container = document.getElementById('output_box_container');
    const img = document.getElementById('reload_img');
    const hint = document.getElementById('hint');
    const final = document.getElementById('final_text');
    
    if (input_text.value == 'decode') {
      decode = true;
    };
    
    
    if (input_number.classList.contains("hidden")) {
      if (input_text.value != 'encode' && input_text.value != 'decode') {
        alert('CHOOSE ENCODE OR DECODE!!!');
        location.reload();
      }
      else {
        input_number.classList.remove('hidden');
        img.classList.remove('hidden');
        hint.classList.remove('hidden');
        button_value.innerHTML = 'Submit';
        input_text.value = '';
        input_text.placeholder = "What is your message?";
        // button_value.classList.
      };
    }
    else {
      new_text_container.classList.remove('hidden');
      console.log(input_number.value);
      console.log(input_text.value);
      if (decode) {
        input_number.value = input_number.value * -1;
      };
      final.innerHTML = caesarCipher(input_text.value, input_number.value);
      console.log(caesarCipher(input_text.value, input_number.value))
    };
  }
  
function hint_is_here() {
  const pop_up = document.getElementById('pop_up');
  pop_up.classList.remove('hidden');


}