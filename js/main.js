$ (document).ready (() => {
    $ (() => {
        $ ("#submit").on ("click", (e) => {
            return !validate ();            
        });
    });
});

function validate () {
    var containsAtLeastOneUrl = false;
    var userInput = document.getElementById ("userInput").value;
    const splitWords = userInput.split (" ");
    
    
    splitWords.forEach (word => {
            let cleanedWord = word.replace (/(\r\n|\n|\r)/gm, "");
            if (isValidHttpUrli (cleanedWord)) {
                containsAtLeastOneUrl = true;
            }
        }
    );
    var checkFor = ["www.", ".com", ".net"];
    checkFor.forEach (checkItem => {
        if (userInput.includes (checkItem)) {
            containsAtLeastOneUrl = true;
        }
    });
    if (containsAtLeastOneUrl) {
        alert ("No solicitors. No URLs or links in your post.");
    }
    return containsAtLeastOneUrl;
}

function isValidHttpUrli (string) {
    let url;
    try {
        url = new URL (string);
    } catch (_) {
        return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
}
