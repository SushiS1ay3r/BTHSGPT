// const userform = document.getElementByClassName("userInput");

// userform.addEventListener("submit", insertUserMessage(e));
// // {
// //     "hi, where is Mr. Irimina's room located?" : "5E7", 
// //     "what is Mr. Irimina's favorite activity?" : "Mr. Irimina loves to go apple-picking in upstate New York",
// //     "what is Mr. Irimina's email?" : "iirimina@schools.nyc.gov",
// //     "what is Mr. Irimina's favorite sport?" : "Basketball. He likes the Los Angeles Clippers."
// // }



function insertUserMessage()
{
    // event.preventDefault();
    // console.log(event);
    const sampleInputs = ["hi, where is Mr. Irimina's room located?", "what is Mr. Irimina's favorite activity?", "what is Mr. Irimina's email?", "what is Mr. Irimina's favorite sport?"];
    const sampleOutputs = ["5E7", "Mr. Irimina loves to go apple-picking in upstate New York", "iirimina@schools.nyc.gov", "Basketball. He loves the Los Angeles Clippers."];
    const userInput = document.getElementById("userInput").value; 
    console.log(userInput)
    console.log("my output -->" + userInput);

    for (let i = 0; i < sampleInputs.length; i++)
    {
        if (userInput === sampleInputs[i])
        {
                
//bthsbox (parent)
        //  <br clear="both">
        //    <div class="item right">
        //      <div class="msg">
        //         <p>Hi! I need some help right now.</p>
        //      </div>
        //     </div>
        //  <br clear="both">
            //document.getElementsByClassName("BTHSbox").


            const messageOne = document.createElement("p")
            messageOne.textContent = userInput;
            // messageOne.textContent = userInput;
            const divOne = document.createElement("div")
            divOne.className = "msg";
            divOne.appendChild(messageOne);
            const divTwo = document.createElement("div")
            divTwo.className = "item right";
            divTwo.appendChild(divOne);
            const breakOne = document.createElement("br")
            breakOne.className = "msgClear";
            const bthsBoxEle = document.getElementById("BTHSbox2");
            bthsBoxEle.appendChild(breakOne);
            bthsBoxEle.appendChild(divTwo);
            bthsBoxEle.appendChild(breakOne);
          //-----------------------------------------------
            const messageTwo = document.createElement("p");
            messageTwo.textContent = sampleOutputs[i];
            // messageOne.textContent = userInput;
            const divFive = document.createElement("div");
            divFive.className = "icon";

            const imgForDiv = document.createElement("img");
            imgForDiv.src="images/bthsLogo.png";
            divFive.appendChild(imgForDiv);


            const divThree = document.createElement("div");
            divThree.className = "msg";
            divThree.appendChild(messageTwo);
            const divFour = document.createElement("div");
            divFour.className = "item";
            divFour.appendChild(divFive);
            divFour.appendChild(divThree);
            
            const breakTwo = document.createElement("br");
            breakTwo.className = "msgClear";
            const bthsBoxEle2 = document.getElementById("BTHSbox2");
            bthsBoxEle2.appendChild(breakTwo);
            bthsBoxEle2.appendChild(divFour);
            bthsBoxEle2.appendChild(breakTwo);
            
            //


        }

        // else
        // {
        //   const messageOne = document.createElement("p")
        //   messageOne.textContent = userInput;
        //   // messageOne.textContent = userInput;
        //   const divOne = document.createElement("div")
        //   divOne.className = "msg";
        //   divOne.appendChild(messageOne);
        //   const divTwo = document.createElement("div")
        //   divTwo.className = "item right";
        //   divTwo.appendChild(divOne);
        //   const breakOne = document.createElement("br")
        //   breakOne.className = "msgClear";
        //   const bthsBoxEle = document.getElementById("BTHSbox2");
        //   bthsBoxEle.appendChild(breakOne);
        //   bthsBoxEle.appendChild(divTwo);
        //   bthsBoxEle.appendChild(breakOne);
        // //-----------------------------------------------
        //   const messageTwo = document.createElement("p");
        //   messageTwo.textContent = "Ahem! Stop trying to break my website! Look at the question bank."
        //   // messageOne.textContent = userInput;
        //   const divFive = document.createElement("div");
        //   divFive.className = "icon";

        //   const imgForDiv = document.createElement("img");
        //   imgForDiv.src="images/bthsLogo.png";
        //   divFive.appendChild(imgForDiv);


        //   const divThree = document.createElement("div");
        //   divThree.className = "msg";
        //   divThree.appendChild(messageTwo);
        //   const divFour = document.createElement("div");
        //   divFour.className = "item";
        //   divFour.appendChild(divFive);
        //   divFour.appendChild(divThree);
          
        //   const breakTwo = document.createElement("br");
        //   breakTwo.className = "msgClear";
        //   const bthsBoxEle2 = document.getElementById("BTHSbox2");
        //   bthsBoxEle2.appendChild(breakTwo);
        //   bthsBoxEle2.appendChild(divFour);
        //   bthsBoxEle2.appendChild(breakTwo);
          
        // }
    }
  }
// {
//     "hi, where is Mr. Irimina's room located?" : "5E7", 
//     "what is Mr. Irimina's favorite activity?" : "Mr. Irimina loves to go apple-picking in upstate New York",
//     "what is Mr. Irimina's email?" : "iirimina@schools.nyc.gov",
//     "what is Mr. Irimina's favorite sport?" : "Basketball. He likes the Los Angeles Clippers."
// }
// const userform = document.getElementsByClassName("userForm");

// userform.addEventListener("submit", insertUserMessage());



// function insertUserMessage(event)
// {
//     event.preventDefault();
//     console.log(e);
//     const sampleInputs = ["hi, where is Mr. Irimina's room located?", "what is Mr. Irimina's favorite activity?", "what is Mr. Irimina's email?", "what is Mr. Irimina's favorite sport?"];
//     const sampleOutputs = ["5E7", "Mr. Irimina loves to go apple-picking in upstate New York", "iirimina@schools.nyc.gov", "Basketball. He loves the Los Angeles Clippers."];
//     const userInput = document.getElementByClassName("userInput").value; 

//     for (let i = 0; i < sampleInputs.length; i++)
//     {
//         if (userInput === sampleInputs[i])
//         {
                
// //bthsbox (parent)
//         //  <br clear="both">
//         //    <div class="item right">
//         //      <div class="msg">
//         //         <p>Hi! I need some help right now.</p>
//         //      </div>
//         //     </div>
//         //  <br clear="both">
//             //document.getElementsByClassName("BTHSbox").
//             const messageOne = document.createElement("p").textContent = userInput;
//             const divOne = document.createElement("div").className = "msg";
//             divOne.appendChild(messageOne);
//             const divTwo = document.createElement("div").className = "item right";
//             divTwo.appendChild(divOne);
//             const breakOne = document.createElement("br").className = "msgClear";
//             const bthsBoxEle = document.getElementsByClassName("BTHSbox");
//             bthsBoxEle.appendChild(breakOne);
//             bthsBoxEle.appendChild(divTwo);
//             bthsBoxEle.appendChild(breakOne);



//         }
//     }
    
// }

// // Source: https://platform.openai.com/docs/guides/text-generation/json-mode?lang=node.js
// import OpenAI from "openai";

// const openai = new OpenAI({ apiKey: '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' })

// async function main() {
//   const completion = await openai.chat.completions.create({
//     messages: [
//       {
//         role: "system",
//         content: "You are a helpful chatbot designed to help students with school related problems.",
//       },
//       { role: "user", content: "Where is Mr. Irimina's room located?" },
//     ],
//     model: "gpt-3.5-turbo-1106",
//     response_format: { type: "json_object" },
//   });
//   console.log(completion.choices[0].message.content); // Cannot work due to lack of funds in my account :( 
// }

// main();


// // FAILED CODE (Work that I attempted to fix but did not work in the end)

// /*Help: https://stackoverflow.com/questions/75617865/openai-chatgpt-api-error-invalidrequesterror-unrecognized-request-argument-su*/
// // const OpenAI = fetch("openai");
// // const client = new OpenAI({
//   apiKey: process.env.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,
// });
    
// async function main() {
//   const completion = await client.chat.completions.create({
//     model: 'gpt-3.5-turbo',
//     messages: [
//       { role: 'user', content: 'Hello! How can I help you?' }
//     ],
//     temperature: 0,
//     max_tokens: 50,
//   });

//   console.log(completion.choices[0].message.content);
// }

// main();

// Source: https://rollbar.com/blog/chatgpt-api-with-javascript/
// import OpenAI from "openai";

// const openai = new OpenAI({ apiKey: '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' })


// async function runCompletion() {
//     const completion = openai.chat.completions.create({
//         engine: 'text-davinci-003',
//         prompt: 'How are you today?',
//         max_tokens: 4000
//     });

//   console.log(completion.choices[0].message.content);
// }

// runCompletion();
