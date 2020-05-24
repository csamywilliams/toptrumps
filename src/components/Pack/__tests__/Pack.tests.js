import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Pack from '../Pack';
import goblinCover from '../../../assets/img/cards/goblins/goblin1.png';

const PACK_TITLE = 'GOBLINS';

test('renders a pack cover', () => {
  const { getByText } = render(
    <Pack
      title={PACK_TITLE}
      cover={goblinCover}
      imgAlt="Select goblin pack"
      onClick={jest.fn()}
    />,
  );
  expect(getByText(PACK_TITLE)).toBeTruthy();
});

test('calls "onClick" when pack cover is selected', () => {
  const onClick = jest.fn();

  const { getByText } = render(
    <Pack
      title={PACK_TITLE}
      cover={goblinCover}
      imgAlt="Select goblin pack"
      onClick={onClick}
    />,
  );

  fireEvent.click(getByText(PACK_TITLE));
  expect(onClick).toHaveBeenCalledTimes(1);
});
