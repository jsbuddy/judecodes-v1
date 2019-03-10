import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import AppContext from "../../context";

function Portfolio() {
    const context = useContext(AppContext);
    const [visible, setVisible] = useState('all');
    const [loading, setLoading] = useState(false);

    const fetchProject = async () => {
        setLoading(true);
        try {
            const res = await axios.get('/.netlify/functions/portfolio');
            context.portfolio.external = res.data.projects;
            context.portfolio.loaded = true;
            setLoading(false);
        } catch (e) {
            console.dir({e});
            setLoading(false);
        }
    };

    useEffect(() => {
        !context.portfolio.loaded && fetchProject();
    }, []);

    return (
        <div>
            <section className='section'>
                <div className='flex flex-row'>
                    <h3 className='section-title'><span className="colored">P</span>ortfolio</h3>
                    <div className="portfolio-links flex-1">
                        <a onClick={() => setVisible('all')}
                           className={`${visible === 'all' && 'active'}`}>All</a>
                        <a onClick={() => setVisible('graphic')}
                           className={`${visible === 'graphic' && 'active'}`}>Graphic</a>
                        <a onClick={() => setVisible('web')}
                           className={`${visible === 'web' && 'active'}`}>Web</a>
                        {/*<a onClick={() => setVisible('mobile')}*/}
                        {/*className={`${visible === 'mobile' && 'active'}`}>Mobile</a>*/}
                    </div>
                </div>
                <div className='section-body'>
                    <div className="portfolio-items">
                        {
                            context.portfolio.local
                                .filter(item => {
                                    return visible === 'all' ? true : item.category.toLocaleLowerCase() === visible;
                                })
                                .map(item => PortfolioItem(item))
                        }
                        {
                            context.portfolio.external.filter(() => visible.match(/all|graphic/gi)).map(project => BehanceProjectItem(project))
                        }
                        {
                            loading && <div className='loader'>
							  <div className='indicator'/>
							</div>
                        }
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div className="text-center">
                        <p className="text-raised text-sm message">Visit here more often to see more awesome stuff I build.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Portfolio;

interface IPortfolioItem {
    category: string,
    title: string,
    image: string,
    link: string
}

interface IBehanceProjectItem {
    id: any,
    covers: any,
    name: string,
    url: string
}

const PortfolioItem = (item: IPortfolioItem) => (
    <a className="portfolio-item" key={item.title} href={item.link} target='_blank'>
        <div className="img-wrap">
            <img src={item.image} alt=""/>
        </div>
        <div className="title">{item.title}</div>
        <div className="subtitle">{item.category}</div>
    </a>
);

const BehanceProjectItem = (item: IBehanceProjectItem) => {
    return (
        <a className='portfolio-item' key={item.id} href={item.url} target='_blank'>
            <div className="img-wrap">
                <img src={item.covers[230]} alt="Item"/>
            </div>
            <div className="title">{item.name}</div>
            <div className="subtitle">Graphic</div>
        </a>
    );
};