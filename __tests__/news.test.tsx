import {render, screen} from '@testing-library/react';
import News from '@/components/news';

it('should render the News component', ()=>{
    render(<News/>);  //arange

    const title = screen.getAllByRole('News');  //act
    
    expect(title).toBeInTheDocument();  //assert
})