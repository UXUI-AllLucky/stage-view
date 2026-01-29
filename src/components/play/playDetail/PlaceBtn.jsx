import './place.scss';

const PlaceBtn = () => {
    return (
        <div>
            <div class="dropdown4">
                <input id="dropdown4" type="checkbox" />
                <label for="dropdown4">
                    <h2>
                        사연(2026) <span class="arrow-down"></span>
                    </h2>
                </label>
                <ul>
                    <li>
                        <a href="/#">사연(2026)</a>
                    </li>
                    <li>
                        <a href="/#">삼연(2025)</a>
                    </li>
                    <li>
                        <a href="/#">재연(2024)</a>
                    </li>
                    <li>
                        <a href="/#">초연(2023)</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PlaceBtn;
