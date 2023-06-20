// netlify/functions/vote.js

const votes = {
    option1: 0,
    option2: 0,
    option3: 0,
    option4: 0,
  };
  
  exports.handler = async (event) => {
    try {
      const formData = JSON.parse(event.body);
      const { name, selectedOption } = formData;
  
      // 選択肢の投票数を更新
      votes[selectedOption]++;
  
      return {
        statusCode: 200,
        body: JSON.stringify({ totalVotes: Object.values(votes).reduce((a, b) => a + b), winner: getWinner() }),
      };
    } catch (error) {
      return { statusCode: 500, body: error.toString() };
    }
  };
  
  function getWinner() {
    const maxVotes = Math.max(...Object.values(votes));
    const winnerOptions = Object.keys(votes).filter((option) => votes[option] === maxVotes);
    return winnerOptions;
  }
  
  