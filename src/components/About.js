import React from 'react';

export default function About(props){
  return (
    <div className={`container text-${props.mode==="light"?"dark":"light"}`}>
      <h4>About TextUtils</h4>
      <p>
        TextUtils is a simple website that allows you to perform various text transformations on your input text. You can convert the text to uppercase, lowercase, or clear the text completely. Additionally, you can make the text bold by selecting the "Bold" option, change into italic, enable dark mode option is also avilable for you and we will be add more features in the upcoming days. 
      </p>
      <p>
        TextUtils is built using React and designed to provide a user-friendly interface for manipulating text. It offers a clean and intuitive user experience, making it easy to transform your text as per your needs.
      </p>
      <p>
        We hope you find TextUtils useful for your text-related tasks. If you have any feedback or suggestions, feel free to reach out to us. Happy text transforming!
      </p>
    </div>
  );
};
