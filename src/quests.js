const years = {
    1: "Discover Hogwarts & defeat Quirrell",
    2: "Uncover the mystery of the Chamber of Secrets",
    3: "Protect Hogwarts from Dementors",
    4: "Compete in the Triwizard Tournament",
    5: "Join Dumbledore’s Army against Umbridge",
    6: "Investigate Voldemort's Horcruxes",
    7: "Defend Hogwarts in the final battle"
};

function getYearQuest(year) {
    return years[year] ? `📖 Year ${year}: ${years[year]}` : "❌ Invalid year!";
}

module.exports = { getYearQuest };
