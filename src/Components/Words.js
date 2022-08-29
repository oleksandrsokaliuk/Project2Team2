import React from 'react';
import axios from 'axios';

function Words() {
    const [word, setWord] = React.useState('');
    const [help, setHelp] = React.useState('');
    const [isVisible, setIsVisible] = React.useState(false);

    const newWord = () => {
        axios
            .get('https://random-words-api.vercel.app/word')
            .then((res) => {
                setWord(res.data[0].word);
                setHelp(res.data[0].definition);
                //console.log(res.data[0].word);
                //console.log(res.data[0].definition);
            })
            .catch((error) => console.log(error));

    };
    const visible = function () {
        isVisible ? setIsVisible(!isVisible) : setIsVisible(!isVisible)
    };

    return (
        <div>

            {word}   <br />
            <button type="button" onClick={newWord}>
                {' '}
                New Word{' '}
            </button> <br />
            {isVisible ? help : null} <br />
            <button type="button" onClick={visible}>
            {' '}
            {isVisible ? 'Close Help' : 'Open Help'}{' '}
            </button>

      </div >
    );
}
export default Words;