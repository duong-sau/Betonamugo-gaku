import {View} from 'react-native';
import React, {Component} from 'react';

var DomParser = require('react-native-html-parser').DOMParser;
export default class Test extends Component {
  componentDidMount() {
    let html = `<html>
                        <body>
                            <div id="b a">
                                <a href="example.org">
                                <div class="inA">
                                    <br>bbbb</br>
                                </div>
                            </div>
                            <div class="bb a">
                                Test
                            </div>
                        </body>
                    </html>`;
    let doc = new DomParser().parseFromString(html, 'text/html');
    console.log('---------------');
    //console.log(doc.querySelect('#b'));
    console.log(doc.getElementsByTagName('br'));
    //console.log(doc.querySelect('#b a[href="example.org"]'));
    //console.log(doc.getElementsByClassName('a', false));
  }
  render() {
    return <View />;
  }
}
