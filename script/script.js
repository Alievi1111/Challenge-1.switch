// The switch statement in JavaScript is a control flow statement that evaluates an expression and executes a block of code based on matching cases. It offers an alternative to long if-else if chains, particularly when dealing with multiple conditional branches based on a single expression's value.

// switch არის მეთოდი, რომელიც ამოწმებს ერთ ცვლადს, აქვს თუ არა კონკრეტული მნიშვნელობა.
// იგივე შეგვიძლია გავაკეთოთ if-else if-else-ით, მაგრამ switch ბევრად მოწესრიგებული და მარტივია.

// ვიღებთ ყველა ღილაკს btn-container-ში
const buttons = document.querySelectorAll("#btnContainer button");

// ვიღებთ პარაგრაფს, სადაც შედეგს გამოვიტანთ
const result = document.querySelector("#result");

// თითოეულ ღილაკს ვამატებთ click event-ს
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.textContent.toLowerCase(); // ვიღებთ ღილაკის ტექსტს და ვადაბლებ

    switch (product) {
      case "t-shirt":
        result.textContent = "📍 First Floor";
        break;
      case "dress":
        result.textContent = "📍 Second Floor";
        break;
      case "jacket":
        result.textContent = "📍 Third Floor";
        break;
      case "shoes":
        result.textContent = "📍 Shoe Department - Last Floor";
        break;
      default:
        result.textContent = "❓ Location not found";
    }
  });
});
// break ნიშნავს: "გაჩერდი აქ"

// switch–ის მუშაობის დროს, როცა ერთ case–ს ემთხვევა მნიშვნელობა — ის კოდი სრულდება, მაგრამ თუ break არ წერია, წავა შემდეგ case-ებზეც.

// switch იდეალურია, როცა:
// გვაქვს ერთი ცვლადი (product)
// და გვინდა დავამუშაოთ ბევრი კონკრეტული მნიშვნელობა (მაგ. t-shirt, dress, jacket, shoes)

// switch ზოგჯერ უკეთესად მუშაობს როცა ბევრი ვარიანტია
// ყველა ლოგიკა ერთ ბლოკში ჩანს, არ გვიწევს if else-ის გამეორება
