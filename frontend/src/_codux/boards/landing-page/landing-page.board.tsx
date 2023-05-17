import React from 'react';
import { createBoard } from '@wixc3/react-board';
import LandingPage from '../../../components/screens/LandingPage';

export default createBoard({
    name: 'LandingPage',
    Board: () => <LandingPage />,
    environmentProps: {
        windowHeight: 991
    }
});
