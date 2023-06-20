// netlify/functions/vote.js

const votes = {
    option1: 0,
    option2: 0,
    option3: 0,
    option4: 0,
  };
  
  exports.handler = async (event) => {
    const { name, selectedOption } = JSON.parse(event.body);
  
    // 選択肢の投票数を更新
    votes[selectedOption]++;
  
    return {
      statusCode: 200,
      body: JSON.stringify({ totalVotes: Object.values(votes).reduce((a, b) => a + b), winner: getWinner() }),
    };
  };
  
  function getWinner() {
    const maxVotes = Math.max(...Object.values(votes));
    const winner = Object.keys(votes).find((option) => votes[option] === maxVotes);
    return winner;
  }
  