import {render, screen} from '@testing-library/react';
import WhatLearn from '../components/learn';


it('should render the WhatLearn component', ()=>{
    render(<WhatLearn/>);  //arange

    const title = screen.getByText('WHAT WILL YOU LEARN');  //act
    
    expect(title).toBeInTheDocument();  //assert
})