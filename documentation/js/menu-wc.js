'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">marvel-project documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CharactersModule.html" data-type="entity-link" >CharactersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CharactersModule-879844313884a41ecdde830855fc09e172b03eef73e982bea4af4e0334f545d5fffac70eec98a3efcd26f804c7dd28535f2678bd09dc29b5925f6bed397677b7"' : 'data-bs-target="#xs-controllers-links-module-CharactersModule-879844313884a41ecdde830855fc09e172b03eef73e982bea4af4e0334f545d5fffac70eec98a3efcd26f804c7dd28535f2678bd09dc29b5925f6bed397677b7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CharactersModule-879844313884a41ecdde830855fc09e172b03eef73e982bea4af4e0334f545d5fffac70eec98a3efcd26f804c7dd28535f2678bd09dc29b5925f6bed397677b7"' :
                                            'id="xs-controllers-links-module-CharactersModule-879844313884a41ecdde830855fc09e172b03eef73e982bea4af4e0334f545d5fffac70eec98a3efcd26f804c7dd28535f2678bd09dc29b5925f6bed397677b7"' }>
                                            <li class="link">
                                                <a href="controllers/CharactersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CharactersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CharactersModule-879844313884a41ecdde830855fc09e172b03eef73e982bea4af4e0334f545d5fffac70eec98a3efcd26f804c7dd28535f2678bd09dc29b5925f6bed397677b7"' : 'data-bs-target="#xs-injectables-links-module-CharactersModule-879844313884a41ecdde830855fc09e172b03eef73e982bea4af4e0334f545d5fffac70eec98a3efcd26f804c7dd28535f2678bd09dc29b5925f6bed397677b7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CharactersModule-879844313884a41ecdde830855fc09e172b03eef73e982bea4af4e0334f545d5fffac70eec98a3efcd26f804c7dd28535f2678bd09dc29b5925f6bed397677b7"' :
                                        'id="xs-injectables-links-module-CharactersModule-879844313884a41ecdde830855fc09e172b03eef73e982bea4af4e0334f545d5fffac70eec98a3efcd26f804c7dd28535f2678bd09dc29b5925f6bed397677b7"' }>
                                        <li class="link">
                                            <a href="injectables/CharactersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CharactersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ComicsModule.html" data-type="entity-link" >ComicsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ComicsModule-a129067997c2576b5792068674f2be90aca1a329c4b717e0f499620c0a230a1353ebbb22fb2df38bb12915a0945ba94f48439e074af30c562634fc4dad2e684f"' : 'data-bs-target="#xs-controllers-links-module-ComicsModule-a129067997c2576b5792068674f2be90aca1a329c4b717e0f499620c0a230a1353ebbb22fb2df38bb12915a0945ba94f48439e074af30c562634fc4dad2e684f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ComicsModule-a129067997c2576b5792068674f2be90aca1a329c4b717e0f499620c0a230a1353ebbb22fb2df38bb12915a0945ba94f48439e074af30c562634fc4dad2e684f"' :
                                            'id="xs-controllers-links-module-ComicsModule-a129067997c2576b5792068674f2be90aca1a329c4b717e0f499620c0a230a1353ebbb22fb2df38bb12915a0945ba94f48439e074af30c562634fc4dad2e684f"' }>
                                            <li class="link">
                                                <a href="controllers/ComicsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComicsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ComicsModule-a129067997c2576b5792068674f2be90aca1a329c4b717e0f499620c0a230a1353ebbb22fb2df38bb12915a0945ba94f48439e074af30c562634fc4dad2e684f"' : 'data-bs-target="#xs-injectables-links-module-ComicsModule-a129067997c2576b5792068674f2be90aca1a329c4b717e0f499620c0a230a1353ebbb22fb2df38bb12915a0945ba94f48439e074af30c562634fc4dad2e684f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ComicsModule-a129067997c2576b5792068674f2be90aca1a329c4b717e0f499620c0a230a1353ebbb22fb2df38bb12915a0945ba94f48439e074af30c562634fc4dad2e684f"' :
                                        'id="xs-injectables-links-module-ComicsModule-a129067997c2576b5792068674f2be90aca1a329c4b717e0f499620c0a230a1353ebbb22fb2df38bb12915a0945ba94f48439e074af30c562634fc4dad2e684f"' }>
                                        <li class="link">
                                            <a href="injectables/ComicsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComicsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CreatorsModule.html" data-type="entity-link" >CreatorsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CreatorsModule-9fa328a32c842304fd886d6f5f152291df2e1af851e4b2f233dc27462317dea9f8b45a942814561fc535258048ba735e2d0c9ff83c6fc77be63dad5031b54cbd"' : 'data-bs-target="#xs-controllers-links-module-CreatorsModule-9fa328a32c842304fd886d6f5f152291df2e1af851e4b2f233dc27462317dea9f8b45a942814561fc535258048ba735e2d0c9ff83c6fc77be63dad5031b54cbd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CreatorsModule-9fa328a32c842304fd886d6f5f152291df2e1af851e4b2f233dc27462317dea9f8b45a942814561fc535258048ba735e2d0c9ff83c6fc77be63dad5031b54cbd"' :
                                            'id="xs-controllers-links-module-CreatorsModule-9fa328a32c842304fd886d6f5f152291df2e1af851e4b2f233dc27462317dea9f8b45a942814561fc535258048ba735e2d0c9ff83c6fc77be63dad5031b54cbd"' }>
                                            <li class="link">
                                                <a href="controllers/CreatorsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreatorsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CreatorsModule-9fa328a32c842304fd886d6f5f152291df2e1af851e4b2f233dc27462317dea9f8b45a942814561fc535258048ba735e2d0c9ff83c6fc77be63dad5031b54cbd"' : 'data-bs-target="#xs-injectables-links-module-CreatorsModule-9fa328a32c842304fd886d6f5f152291df2e1af851e4b2f233dc27462317dea9f8b45a942814561fc535258048ba735e2d0c9ff83c6fc77be63dad5031b54cbd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CreatorsModule-9fa328a32c842304fd886d6f5f152291df2e1af851e4b2f233dc27462317dea9f8b45a942814561fc535258048ba735e2d0c9ff83c6fc77be63dad5031b54cbd"' :
                                        'id="xs-injectables-links-module-CreatorsModule-9fa328a32c842304fd886d6f5f152291df2e1af851e4b2f233dc27462317dea9f8b45a942814561fc535258048ba735e2d0c9ff83c6fc77be63dad5031b54cbd"' }>
                                        <li class="link">
                                            <a href="injectables/CreatorsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreatorsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SeriesModule.html" data-type="entity-link" >SeriesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SeriesModule-7755187aa92079849563924e6d0f07bf5d357a6a11d90dc60ea7a2c17e9ac904757866776797e23731500e1ae425975fdeee8b0d7c1cf3d776f105137fa96e15"' : 'data-bs-target="#xs-controllers-links-module-SeriesModule-7755187aa92079849563924e6d0f07bf5d357a6a11d90dc60ea7a2c17e9ac904757866776797e23731500e1ae425975fdeee8b0d7c1cf3d776f105137fa96e15"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SeriesModule-7755187aa92079849563924e6d0f07bf5d357a6a11d90dc60ea7a2c17e9ac904757866776797e23731500e1ae425975fdeee8b0d7c1cf3d776f105137fa96e15"' :
                                            'id="xs-controllers-links-module-SeriesModule-7755187aa92079849563924e6d0f07bf5d357a6a11d90dc60ea7a2c17e9ac904757866776797e23731500e1ae425975fdeee8b0d7c1cf3d776f105137fa96e15"' }>
                                            <li class="link">
                                                <a href="controllers/SeriesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeriesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SeriesModule-7755187aa92079849563924e6d0f07bf5d357a6a11d90dc60ea7a2c17e9ac904757866776797e23731500e1ae425975fdeee8b0d7c1cf3d776f105137fa96e15"' : 'data-bs-target="#xs-injectables-links-module-SeriesModule-7755187aa92079849563924e6d0f07bf5d357a6a11d90dc60ea7a2c17e9ac904757866776797e23731500e1ae425975fdeee8b0d7c1cf3d776f105137fa96e15"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SeriesModule-7755187aa92079849563924e6d0f07bf5d357a6a11d90dc60ea7a2c17e9ac904757866776797e23731500e1ae425975fdeee8b0d7c1cf3d776f105137fa96e15"' :
                                        'id="xs-injectables-links-module-SeriesModule-7755187aa92079849563924e6d0f07bf5d357a6a11d90dc60ea7a2c17e9ac904757866776797e23731500e1ae425975fdeee8b0d7c1cf3d776f105137fa96e15"' }>
                                        <li class="link">
                                            <a href="injectables/SeriesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeriesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/CharactersController.html" data-type="entity-link" >CharactersController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ComicsController.html" data-type="entity-link" >ComicsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CreatorsController.html" data-type="entity-link" >CreatorsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SeriesController.html" data-type="entity-link" >SeriesController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Characters.html" data-type="entity-link" >Characters</a>
                            </li>
                            <li class="link">
                                <a href="classes/Comics.html" data-type="entity-link" >Comics</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCharactersDto.html" data-type="entity-link" >CreateCharactersDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateComicsDto.html" data-type="entity-link" >CreateComicsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCreatorDto.html" data-type="entity-link" >CreateCreatorDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Creator.html" data-type="entity-link" >Creator</a>
                            </li>
                            <li class="link">
                                <a href="classes/Series.html" data-type="entity-link" >Series</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCharactersDto.html" data-type="entity-link" >UpdateCharactersDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateComicsDto.html" data-type="entity-link" >UpdateComicsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCreatorDto.html" data-type="entity-link" >UpdateCreatorDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CharactersService.html" data-type="entity-link" >CharactersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ComicsService.html" data-type="entity-link" >ComicsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreatorsService.html" data-type="entity-link" >CreatorsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SeriesService.html" data-type="entity-link" >SeriesService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});