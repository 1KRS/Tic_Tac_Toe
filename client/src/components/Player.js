import { useState } from 'react';
import EditButton from './EditButton';

const Player = ({ initialName, symbol, handleChangePlayerName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(
    initialName ? initialName : symbol === 'O' ? 'PLAYER 1' : 'PLAYER 2'
  );

  return symbol === 'O' ? (
    <>
      <EditButton
        onClick={() => {
          isEditing === true && handleChangePlayerName(symbol, playerName);
          setIsEditing((isEditing) => !isEditing);
        }}
        isEditing={isEditing}
      />
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            required
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
    </>
  ) : (
    <>
      <span className="player">
        <span className="player-symbol">{symbol}</span>
        {isEditing ? (
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            required
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
      </span>
      <EditButton
        onClick={() => {
          isEditing === true && handleChangePlayerName(symbol, playerName);
          setIsEditing((isEditing) => !isEditing);
        }}
        isEditing={isEditing}
      />
    </>
  );
};
export default Player;
