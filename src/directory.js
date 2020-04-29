(function () {
    "use strict";
    class Directory extends React.Component {
        constructor() {
            super(props);
            this.state = {
                stockList: window.Inventory.stockList
            };
        }
        render() {
            return (
                <div className="filter-results">
                    <span type="text" id="Editbox15"
                        style="position:absolute;left:34px;width:85px;height:18px;line-height:18px;z-index:82;" name="value"
                        value=""></span>
                    <span type="text" id="Editbox16"
                        style="position:absolute;left:136px;width:75px;height:18px;line-height:18px;z-index:83;" name="value"
                        value=""></span>
                    <span type="text" id="Editbox17"
                        style="position:absolute;left:228px;width:75px;height:18px;line-height:18px;z-index:84;" name="value"
                        value=""></span>
                    <span type="text" id="Editbox18"
                        style="position:absolute;left:320px;width:75px;height:18px;line-height:18px;z-index:85;" name="value"
                        value=""></span>
                    <span type="text" id="Editbox19"
                        style="position:absolute;left:412px;width:75px;height:18px;line-height:18px;z-index:86;" name="value"
                        value=""></span>
                    <span type="text" id="Editbox20"
                        style="position:absolute;left:504px;width:75px;height:18px;line-height:18px;z-index:87;" name="value"
                        value=""></span>
                    <span type="text" id="Editbox21"
                        style="position:absolute;left:596px;width:71px;height:18px;line-height:18px;z-index:88;" name="value"
                        value=""></span>
                    <span type="text" id="Editbox22"
                        style="position:absolute;left:684px;width:71px;height:18px;line-height:18px;z-index:89;" name="value"
                        value=""></span>
                    <span type="text" id="Editbox23"
                        style="position:absolute;left:772px;width:43px;height:18px;line-height:18px;z-index:90;" name="value"
                        value=""></span>
                </div>

            );
        }
    }

    ReactDom.render(<Director />, document.getElementById('Results'));
})();