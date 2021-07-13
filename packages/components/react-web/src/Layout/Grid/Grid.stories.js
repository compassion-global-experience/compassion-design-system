import React from 'react';
import './Grid.stories.css';

import { Grid } from './Grid';
import { Box } from '../Box/Box';
import { Stack } from '../Stack/Stack';
import { Frame } from '../Frame/Frame';

export default {
  title: 'Global Design System/Layout/Grid',
  component: Grid,
};

const BasicTemplate = (args) => (
  <Grid {...args}>
    <div>
      The only home we've ever known Drake Equation radio telescope billions
      upon billions paroxysm of global death bits of moving fluff. Two ghostly
      white figures in coveralls and helmets are softly dancing astonishment
      something incredible is waiting to be known Apollonius of Perga realm of
      the galaxies network of wormholes.
    </div>
    <div>
      Inconspicuous motes of rock and gas brain is the seed of intelligence
      citizens of distant epochs bits of moving fluff rich in mystery permanence
      of the stars. Rich in mystery extraordinary claims require extraordinary
      evidence tendrils of gossamer clouds with pretty stories for which there's
      little good evidence not a sunrise but a galaxyrise.
    </div>
    <div>
      Great turbulent clouds rogue Flatland Sea of Tranquility radio telescope
      worldlets? Science made in the interiors of collapsing stars
      extraplanetary from which we spring made in the interiors of collapsing
      stars two ghostly white figures in coveralls and helmets are softly
      dancing. The ash of stellar alchemy a still more glorious dawn awaits.
    </div>
  </Grid>
);

export const Basic = BasicTemplate.bind({});
Basic.args = {};

const CardsTemplate = (args) => (
  <Grid {...args}>
    <Box>
      <Stack space="1rem">
        <Frame ratio="3:2">
          <img src="https://source.unsplash.com/300x200/?bow+mar+colorado" />
        </Frame>
        <h3>Bow Mar</h3>
        <p>
          If this town name seems like two random syllables put together, it’s
          because that’s pretty much the case. Bow Mar, found in the Denver
          metro area, is named for two nearby lakes – Bowles Lake and Marston
          Lake – but only the first syllable of each spot was used.
        </p>
      </Stack>
    </Box>
    <Box>
      <Stack space="1rem">
        <Frame ratio="3:2">
          <img src="https://source.unsplash.com/300x200/?arriba+colorado" />
        </Frame>
        <h3>Arriba</h3>
        <p>
          A word that means “above others” in Spanish, this town name would make
          more sense if the town wasn’t found in one of the lower regions of the
          Centennial State. It’s located at an elevation just shy of Denver at
          5,239 feet. The average elevation of the state is 6,800 feet.
        </p>
      </Stack>
    </Box>
    <Box>
      <Stack space="1rem">
        <Frame ratio="3:2">
          <img src="https://source.unsplash.com/300x200/?castle+rock" />
        </Frame>
        <h3>Castle Rock</h3>
        <p>
          If you’ve driven past this town, the reason for this unique name is no
          secret – there’s a massive fortress-shaped butte right where I-25 cuts
          through this spot.
        </p>
      </Stack>
    </Box>
    <Box>
      <Stack space="1rem">
        <Frame ratio="3:2">
          <img src="https://source.unsplash.com/300x200/?del+norte+colorado" />
        </Frame>
        <h3>Del Norte</h3>
        <p>
          This tiny town in the San Luis Valley is named after the Rio Grande
          del Norte. Contrary to how some say the name of this spot, it’s
          pronounced “Del Nort,” not “Del Norté.”
        </p>
      </Stack>
    </Box>
    <Box>
      <Stack space="1rem">
        <Frame ratio="3:2">
          <img src="https://source.unsplash.com/300x200/?dinosaur+colorado" />
        </Frame>
        <h3>Dinosaur</h3>
        <p>
          This town was named after the discovery of several large dinosaur
          species still roaming the surrounding mountains, including the
          Brontosaurus and the Tyrannosaurus Rex.
        </p>
        <p>
          Just kidding… the name of this town was adopted in 1966 to capitalize
          on the town’s proximity to Dinosaur National Monument, a nearby
          national monument that is split between Colorado and Utah. The park is
          known for containing more than 800 paleontological sites.
        </p>
      </Stack>
    </Box>
    <Box>
      <Stack space="1rem">
        <Frame ratio="3:2">
          <img src="https://source.unsplash.com/300x200/?fairplay+colorado" />
        </Frame>
        <h3>Fairplay</h3>
        <p>
          A name implying justice, Fairplay was named by settlers that were
          angry that early prospectors got the best claims. When this town was
          founded, the settlers envisioned doing things differently, in a more
          “fair” way.
        </p>
      </Stack>
    </Box>

    <Box>
      <Stack space="1rem">
        <Frame ratio="3:2">
          <img src="https://source.unsplash.com/300x200/?manzanola+colorado" />
        </Frame>
        <h3>Manzanola</h3>
        <p>
          A unique name you might encounter on the drive through Otero County,
          Manzanola is derived from the words “manzana roja,” which translates
          to “red apple” in Spanish. Word on the street is that this name comes
          from an orchard that was once close to the town.
        </p>
      </Stack>
    </Box>
  </Grid>
);

export const Cards = CardsTemplate.bind({});
Cards.args = { minWidth: `300px` };
