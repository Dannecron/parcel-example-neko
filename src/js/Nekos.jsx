import { useEffect, useState } from 'react';
import { ThemeProvider, Container, Card, Link, Label, Flex, Spin } from '@gravity-ui/uikit';

/**
 * @param {function} setNeko
 */
const getNeko = ({ setNeko }) => {
  fetch('https://nekos.best/api/v2/neko')
    .then((response) => response.json())
    .then((json) => setNeko(json.results[0]));
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
      <ThemeProvider theme="light">
          <Container>
              <Card>
                  <Flex space={1} direction="column" justifyContent="center" alignItems="center">
                      {(neko === null) && (<Spin size="l" />)}
                      {neko && (
                          <Flex space={1} direction="column" justifyContent="center" alignItems="center">
                              <img src={String(neko.url)} width="500px" alt="neko" />
                              <Link href={neko.artist_href} target="_blank">
                                  <Label value={neko.artist_name}>
                                      artist
                                  </Label>
                              </Link>
                          </Flex>
                      )}
                  </Flex>
              </Card>
          </Container>
      </ThemeProvider>
  );
};

export default Nekos;
