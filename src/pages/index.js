import { Wrapper } from '../styles/home/styled';
import { Fragment } from 'react';
import Input from '../components/Input';

const Home = (props) => {
    return (
        <Fragment>
            <Wrapper>
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ipsum, rerum! Aliquid, aut beatae delectus deserunt dolor dolore esse est, facilis in ipsa itaque laborum laudantium minus molestiae natus nemo nihil nostrum nulla officia pariatur perspiciatis praesentium
                    provident qui quisquam recusandae reiciendis rem saepe sapiente sequi suscipit tenetur velit veritatis voluptatum! Blanditiis dolor enim est facilis illo inventore ipsum magnam mollitia pariatur perspiciatis qui, quidem ratione reiciendis. Amet animi autem culpa deserunt dolorem,
                    enim id, laboriosam laudantium maiores, minus nesciunt nisi non odio perspiciatis reprehenderit rerum sed? Atque ducimus maiores nesciunt nisi odio odit, saepe ut? Quas quis sunt vitae.
                </h1>
            </Wrapper>
            <Wrapper>Components</Wrapper>
            <div>
                <Input placeholder="Validation true basic" isInvalid={true} />
                <Input placeholder="Validation false with icon" isInvalid={false} icon="home" />
                <Input placeholder="With icon" icon="home" />
                <Input placeholder="Search input w-100" icon="search" searchInput />
            </div>
        </Fragment>
    );
};

Home.propTypes = {};

Home.getInitialProps = async ({ store }) => {
    return {};
};

export default Home;
