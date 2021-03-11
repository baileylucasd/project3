import axios, {AxiosResponse} from "axios";

const catURL = "https://api.thecatapi.com/v1/images/search";
axios
    .get(catURL, {
        params: {
            breed_ids: "siam",
        },
    })
    .then((r: AxiosResponse) => r.data)
    .then((breeds: any[]) => {
        console.log(breeds);
    });

    let theInput: HTMLInputElement | null;
    let thebutton: HTMLButtonElement | null;
    theInput = document.querySelector("#userInput > input[type=text]");
    thebutton = document.querySelector("#userInput > button");
    console.log("something", thebutton);
    thebutton?.addEventListener("click", () => {
      const inputLen = theInput?.value.length ?? 0;
      if (inputLen > 0)  
        console.log("You entered", theInput?.value);
      else
        console.log("Please enter some text");
    });