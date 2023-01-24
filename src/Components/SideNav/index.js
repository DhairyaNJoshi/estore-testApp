import './_side-nav.scss';

const SideNav = ()=>{

    return(
        <div className='side-nav'>
            <div className='section-title'>
                <h3> Category </h3>
            </div>

            <div class="accordion">
                <div class="accordion-item individual-category">
                    <div class="accordion-header" >
                        <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                            <div className='category-title'>
                                <a href='#'>Men</a>
                            </div>
                        </button>
                    </div>
                    <div class="accordion-collapse collapse show" id="collapseOne">
                        <div class="accordion-body">
                            <ul>
                                <li className='sub-items'><a href='#'>Coats</a></li>
                                <li className='sub-items'><a href='#'>Jackets</a></li>
                                <li className='sub-items'><a href='#'>Partywear</a></li>
                                <li className='sub-items'><a href='#'>Shirts</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            {/* </div>
            <div class="accordion"> */}
                <div class="accordion-item individual-category">
                    <div class="accordion-header">
                        <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                            <div className='category-title'>
                                <a href='#'>Women</a>
                            </div>
                        </button>
                    </div>
                    <div id="collapseTwo" class="accordion-collapse collapse show" >
                        <div class="accordion-body">
                            <ul>
                                <li className='sub-items'><a href='#'>Coats</a></li>
                                <li className='sub-items'><a href='#'>Jackets</a></li>
                                <li className='sub-items'><a href='#'>Partywear</a></li>
                                <li className='sub-items'><a href='#'>Shirts</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            {/* </div>
            <div class="accordion"> */}
                <div class="accordion-item individual-category">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                            <div className='category-title'>
                                <a href='#'>Kids</a>
                            </div>
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <ul>
                                <li className='sub-items'><a href='#'>Coats</a></li>
                                <li className='sub-items'><a href='#'>Jackets</a></li>
                                <li className='sub-items'><a href='#'>Partywear</a></li>
                                <li className='sub-items'><a href='#'>Shirts</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SideNav;
