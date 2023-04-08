const text = [
    `integer mattis pretium vestibulum. Cras ac nulla magna. Maecenas tristique libero leo, bibendum imperdiet nunc varius eu. Curabitur et elementum felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce pulvinar ut nisi ut dignissim. Sed suscipit tellus vitae nulla tincidunt, at bibendum risus efficitur. Pellentesque in accumsan nunc. Maecenas malesuada suscipit augue vel egestas. Mauris a velit diam. In sit amet urna est.`,

    `Duis eleifend a ante viverra lobortis. Suspendisse nec felis sed enim fringilla varius. Aenean viverra scelerisque neque. Mauris non interdum metus. Quisque tempus elementum mauris vel vulputate. Maecenas id risus non lacus volutpat interdum. Donec feugiat finibus sapien, et ultrices neque tempus at. Fusce laoreet varius interdum. Nulla sapien quam, lobortis at gravida non, mollis vel lorem. Sed convallis felis dolor, vitae suscipit nunc condimentum vitae. Curabitur egestas varius eros, vel auctor ante tempor ut. Suspendisse vehicula sem eu orci vulputate, id accumsan erat lobortis. Morbi sed elementum tellus, id placerat ipsum. Suspendisse vel mauris bibendum, eleifend nulla ac, luctus orci.`,

    `Quisque efficitur ex sit amet tellus imperdiet, ac pretium tellus viverra. Mauris dignissim massa laoreet, ullamcorper neque sed, iaculis ex. Aenean ut mi augue. Aenean a fringilla libero. Ut dictum lorem sodales, fringilla ipsum non, pulvinar mi. Ut non dui quis libero lobortis maximus. Suspendisse potenti. Morbi venenatis ipsum mauris, non faucibus tortor ultricies ac. Etiam vel tempor ligula.`,

    `Mauris enim ipsum, facilisis vitae tempus nec, vulputate vitae ligula. Cras quis efficitur lorem. Aenean auctor neque nec neque fringilla, sed sollicitudin orci pellentesque. Duis viverra eu purus id dapibus. Morbi at odio feugiat, vestibulum odio id, sagittis enim. Aliquam ullamcorper, eros dapibus bibendum vestibulum, diam metus viverra orci, id congue lorem lectus in orci. Praesent rutrum, dolor in vehicula placerat, nisi nibh laoreet erat, vitae malesuada leo ligula vitae massa. Integer tincidunt velit sed sapien aliquet, eu sodales purus lobortis. Donec aliquam auctor lorem, a facilisis odio congue eget. Donec sollicitudin elementum urna mollis volutpat.`,

    `Mauris non sem sit amet nulla scelerisque semper at ac elit. Sed blandit nisi nec sollicitudin lacinia. Nulla non ex fringilla, dignissim tortor eu, auctor risus. Quisque suscipit tellus egestas cursus euismod. Ut a enim vel diam condimentum maximus. Proin fermentum, eros placerat placerat feugiat, magna arcu fermentum purus, quis imperdiet ante est ut ex. Proin ut ipsum id dui malesuada eleifend. Quisque viverra quam vitae urna ornare pulvinar nec id sem. Vivamus id diam libero. In dignissim turpis purus, ut gravida leo aliquet ac. Duis placerat ullamcorper neque eget sagittis. Sed laoreet tellus viverra convallis semper.`,

    `Aliquam tristique gravida nulla nec iaculis. Ut non lacinia justo, at bibendum nibh. Aliquam erat volutpat. Donec fermentum id nisi sit amet consequat. Integer eget tortor arcu. Duis posuere molestie condimentum. Cras in ex molestie, lobortis nibh eu, maximus velit. Fusce diam leo, finibus a ex vel, feugiat efficitur metus. Donec in risus vitae sem vestibulum pellentesque quis sit amet turpis. Nunc nisl turpis, fermentum nec risus sit amet, dapibus tristique mauris. Sed et elit sit amet nunc blandit malesuada in ut arcu. Nullam sollicitudin nisi sit amet lacus semper viverra. Vestibulum ac tellus arcu. Ut egestas ultricies felis ultricies cursus. Nam id metus elementum, vulputate lorem eget, efficitur elit.`,

    `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla dictum sapien non ligula dignissim lobortis. Aliquam euismod magna vitae nisi scelerisque, quis eleifend massa aliquet. Morbi tellus purus, condimentum a enim eget, fringilla congue ex. Suspendisse ut purus non velit fermentum ornare. Sed ut mauris eros. Ut viverra, ligula non tristique placerat, tellus sapien sagittis sem, et ullamcorper felis erat in purus.`,

    `Maecenas felis velit, blandit vel rutrum eu, tempus ut metus. Ut feugiat ligula quis tellus aliquet, eget viverra nunc vestibulum. Suspendisse auctor diam eget venenatis blandit. In lorem risus, scelerisque ac mattis in, commodo in ligula. Nulla facilisi. Sed sagittis erat vel arcu tincidunt tincidunt. Proin et efficitur sapien, a tincidunt lectus. Phasellus condimentum, metus vel consectetur pulvinar, nunc arcu sagittis ipsum, a feugiat dui magna et nisi. Duis et velit dapibus, suscipit orci eu, sodales lacus. Nullam accumsan viverra ex, eget laoreet ex interdum vitae. Mauris congue eu magna a mattis. Cras maximus feugiat turpis, ut scelerisque ligula sollicitudin a. Sed aliquet odio eu placerat suscipit.`,

    `Morbi lectus ligula, rhoncus ac fringilla eget, fermentum non orci. Mauris auctor risus dui. Sed dolor neque, fermentum quis diam ut, blandit fermentum nibh. Ut vestibulum a augue at tincidunt. Donec feugiat magna odio, non pharetra elit luctus vitae. Integer molestie, dolor nec dictum dapibus, nibh purus semper diam, vitae viverra orci lacus et turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc sodales mi ac nisl vehicula, quis porttitor libero interdum. Pellentesque vitae sagittis dolor. Curabitur in lobortis velit. Phasellus eget cursus turpis, lacinia vulputate neque. Donec consequat commodo semper. Suspendisse ac congue lorem. Vestibulum in magna sem.`,

    `Fusce purus libero, faucibus ac pellentesque eu, dapibus pulvinar justo. Nam sodales mi eu elit congue, non egestas lacus ullamcorper. Vestibulum dictum turpis facilisis velit luctus sollicitudin. Donec vitae ante magna. Sed dignissim consequat enim. Vivamus venenatis tristique blandit. Vivamus sit amet eros ligula. Etiam nec ornare elit, sed rhoncus ipsum. Praesent venenatis fermentum lorem in maximus.`

];

const item = document.querySelector("#item");
const dataBox = document.querySelector("#data");

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

const generate = () => {
    if (item.value < 0 || item.value > 10 || isNaN(item.value)) {
        const randomIndex = Math.floor(Math.random() * text.length);
        dataBox.innerHTML = `<p>${text[randomIndex]}</p>`;
    }
    else {
        const sText = shuffle(text)
        const data = sText.slice(0, item.value);
        const para = data.map(
            (d) => {
                return `<p>${d}</p>`;
            }
        )
        dataBox.innerHTML = para.join("");
    }
}