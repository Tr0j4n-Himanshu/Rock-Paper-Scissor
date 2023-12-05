let userMove = '';
let computerMove = '';
let result = '';
const game ={
    win:0,lose:0,tie:0
}

function generateComputerMove()
{
    const randNum=Math.random();
    if(randNum<1/3)
    {
        computerMove='Rock';
    }
    else if(randNum<2/3)
    {
        computerMove='Paper';
    }
    else
    {
        computerMove='Scissor';
    }
    return computerMove;
}

function evaluateMoves()
{
    if(userMove===computerMove)
    {
        result='Tie';
        game.tie++;
    }
    //userMove -> Rock
    else if(userMove==='Rock' && computerMove==='Paper')
    {
        result='Lose';
        game.lose++;
    }
    else if(userMove==='Rock' && computerMove==='Scissor')
    {
        result='Win';
        game.win++;
    }

    //userMove -> Paper
    else if(userMove==='Paper' && computerMove==='Scissor')
    {
        result='Lose';
        game.lose++;
    }
    else if(userMove==='Paper' && computerMove==='Rock')
    {
        result='Win';
        game.win++;
    }

    //userMove -> Scissor
    else if(userMove==='Scissor' && computerMove==='Rock')
    {
        result='Lose';
        game.lose++;
    }
    else if(userMove==='Scissor' && computerMove==='Paper')
    {
        result='Win';
        game.win++;
    }

    return result;

}