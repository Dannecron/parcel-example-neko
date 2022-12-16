import { useEffect, useState } from 'react';

/**
 * @param {function} setNeko
 */
const getNeko = ({ setNeko }) => {
  fetch('https://nekos.best/api/v2/neko')
    .then((response) => response.json())
    .then((json) => setNeko(json.results[0]));
};

const nekoBlockStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

/**
 * @link https://docs.nekos.best/index.html
 * @returns {JSX.Element}
 * @constructor
 */
const Nekos = () => {
  /**
   * neko object example:
   * {
   *    "artist_href":"https://www.pixiv.net/en/users/47065875",
   *    "artist_name":"かえで",
   *    "source_url":"https://www.pixiv.net/en/artworks/88682108",
   *    "url":"https://nekos.best/api/v2/neko/0427.png"
   * }
   */
  const [neko, setNeko] = useState(null);

  useEffect(() => {
    getNeko({ setNeko });
  }, [setNeko]);

  return (
    <div>
      {(neko === null) && (<p>загрузка ...</p>)}
      {neko && (
        <div style={nekoBlockStyles}>
          <img src={String(neko.url)} width="500px" alt="neko" />
          <a href={neko.artist_href}>artist: {neko.artist_name}</a>
        </div>
      )}
    </div>
  );
};

export default Nekos;
