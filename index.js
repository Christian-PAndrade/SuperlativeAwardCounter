$(document).ready(() => {
    
})

// [{chris: 5, cissa: 10}, {}, {}]

const allQuestions = [];
const saveAnswers = () => {
    $(".input_container input").each((idx, input) => {
        addAnswer(idx, $(input).val().toLowerCase());
    });

    clearForm();
}

const addAnswer = (idx, name) => {
    // add new
    if (allQuestions.length <= idx) {
        allQuestions.push({[name]: 1});
    } else {
        // already exists, add 1
        if (allQuestions[idx].hasOwnProperty([name])) {
            allQuestions[idx][name]++;
        } else { // first entry
            allQuestions[idx][name] = 1;
        }
    }
}

const clearForm = () => {
    $(".input_container input").each((_, input) => $(input).val(""));
}

const calculateFinalResults = () => {
    $(".main_container").hide();

    let idx = 0;
    allQuestions.forEach(question => {
        const result = sortIntoString(question);
        $(`.answers_container .question${++idx}_result`).text(result);
    })

    $(".answers_container").show();
}

// {chris: 5, cissa: 7}
const sortIntoString = obj => {
    const asArray = [];
    for (const key in obj) {
        asArray.push([key, obj[key]])
    }

    asArray.sort((a,b) => b[1] - a[1]);

    return asArray.join(" | ");
}

const randomlyGenerate = () => {
    const names = ["Chris", "Cissa", "Nate", "Chase", "Essey", "Hosanna", "Nathan", "Destiny", "Ben", "Morgan", "James", "Julia", "Angelina", "Anthony", "Simon", "Michael", "Cedric", "Sisi", "Witness", "Olivia", "Ari", "Angelica", "Jacob", "Nicole"];

    $(".input_container input").each((_, input) => $(input).val(names[Math.floor(Math.random() * (names.length))]));
}