import React ,{useState} from 'react';
export default function Board() {
  const[xIsNext,setxIsNext] = useState(true);
  const[square,setSquare] = useState(Array(9).fill(null));
  function handleClick(i){
    if(square[i] || calculateWinner(square))
    return;
    const nextSquare = square.slice();
    if(xIsNext){
      nextSquare[i]="X";
    }
    else{
      nextSquare[i]="O";
    }
    setSquare(nextSquare);
    setxIsNext(!xIsNext)  
  }
  const winner =calculateWinner(square);
  let status;
  if(winner){
    status='winner is '+winner;

  } else{
    status='next player ' + (xIsNext?'X':'O');
  }
  return(
    <div>
      <div className='status'>{status}</div>
    <div className='board-row'>
    <Square  value={square[0] } onSquareClick={()=>handleClick(0)}/>
    <Square value={square[1]} onSquareClick={()=>handleClick(1)}/>
    <Square value={square[2]} onSquareClick={()=>handleClick(2)}/>
    </div>
    <div className='board-row'>
    <Square value={square[3]} onSquareClick={()=>handleClick(3)}/>
    <Square value={square[4]} onSquareClick={()=>handleClick(4)}/>
    <Square value={square[5]} onSquareClick={()=>handleClick(5)}/>
    </div>
    <div className='board-row'>
    <Square value={square[6]} onSquareClick={()=>handleClick(6)}/>
    <Square value={square[7]} onSquareClick={()=>handleClick(7)}/>
    <Square value={square[8]} onSquareClick={()=>handleClick(8)}/>
    </div>
    </div>
    
  );
}

function Square({value,onSquareClick}){
  // const [value,setValue] = useState(null);
  // function handleClick(){
  //   setValue('X')// alert("clicked");
  // }
  return  (<button className="square" onClick={onSquareClick}>{value}</button>) ;

}


function calculateWinner(square){
  const lines=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],
    [1,4,7],[2,5,8],[0,4,8],[2,4,8]
  
  ];

  for(let i=0;i<lines.length;i++){
    const[a,b,c]=lines[i];
    if(square[a]===square[b] && square[a]===square[c]){
      return square[a];
    }
  }
return null;
}