import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./catSwiper.scss";
import '../../../node_modules/swiper/swiper.scss';
import { EffectCards, Pagination } from "swiper";
import "swiper/css/pagination";
import { cats } from '../../assets/arrays/cats';


function CatSwiper(props) {


    const answers = props.secondArray;


    const handleAnswerChange = (index, changed) => {
        props.setAnswers(() => {
            const newAnswers = [...props.secondArray];
            newAnswers[index] = changed;
            return newAnswers;
        })

    }


    useEffect(() => {
        function filterCats(newAnswers) {
            const newCats = cats.filter(obj => {
                let match = true;
                for (let i = 0; i < newAnswers.length; i++) {
                    const catProp = Object.keys(obj)[i];
                    if (obj[catProp] !== newAnswers[i]) {
                        match = false;
                        break;
                    }
                }
                return match;
            });

            props.setNewCats(newCats);
        }
        filterCats(props.secondArray);
    }, [props.firstArray]);



    if (props.firstArray.length == 0) {

        return (


            <div className="no-cats-alert">
                <div>Oops! Currently, we don't have cats matching your criteria! :( 
                    You can return later or try to change some of your answers. Sometimes, a cat, who likes other cats,
                    could make a wonderful ,,only child" as well - and age often does not matter ;).
                </div>
                <div>
                    <form>
                        <fieldset>
                            <div>
                                <input type="radio" id="doeslikecats1" name="likes other cats" value="yes" checked={answers[0] === "yes"}
                                    onChange={() => handleAnswerChange(0, "yes")} />
                                <label for="doeslikecats1">Likes cats</label>

                                <input type="radio" id="doeslikecats1" name="likes other cats" value="no" checked={answers[0] === "no"}
                                    onChange={() => handleAnswerChange(0, "no")} />
                                <label for="doeslikecats1">Does not like cats</label>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div>
                                <input type="radio" id="attitude1" name="likes cuddles" value="yes" checked={answers[1] === "yes"}
                                    onChange={() => handleAnswerChange(1, "yes")} />
                                <label for="attitude1">Cuddler</label>

                                <input type="radio" id="attitude2" name="likes cuddles" value="no" checked={answers[1] === "no"}
                                    onChange={() => handleAnswerChange(1, "no")} />
                                <label for="attitude2">Loner</label>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div>
                                <input type="radio" id="character1" name="is energetic" value="yes" checked={answers[2] === "yes"}
                                    onChange={() => handleAnswerChange(2, "yes")} />
                                <label for="character1">Energetic</label>

                                <input type="radio" id="character2" name="is energetic" value="no" checked={answers[2] === "no"}
                                    onChange={() => handleAnswerChange(2, "no")} />
                                <label for="character2">Calm</label>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div>
                                <input type="radio" id="isyoung1" name="is young" value="yes" checked={answers[3] === "yes"}
                                    onChange={() => handleAnswerChange(3, "yes")} />
                                <label for="isyoung1">Younger</label>

                                <input type="radio" id="isyoung2" name="is young" value="no" checked={answers[3] === "no"}
                                    onChange={() => handleAnswerChange(3, "no")} />
                                <label for="isyoung2">Older</label>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div>
                                <input type="radio" id="doeslikedogs1" name="likes dogs" value="yes" checked={answers[4] === "yes"}
                                    onChange={() => handleAnswerChange(4, "yes")} />
                                <label for="doeslikedogs1">Likes dogs</label>

                                <input type="radio" id="doeslikedogs2" name="likes dogs" value="no" checked={answers[4] === "no"}
                                    onChange={() => handleAnswerChange(4, "no")} />
                                <label for="doeslikedogs2">Does not like dogs</label>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div>
                                <input type="radio" id="ishealthy1" name="is healthy" value="yes" checked={answers[5] === "yes"}
                                    onChange={() => handleAnswerChange(5, "yes")} />
                                <label for="ishealthy1">Healthy</label>

                                <input type="radio" id="ishealthy2" name="is healthy" value="no" checked={answers[5] === "no"}
                                    onChange={() => handleAnswerChange(5, "no")} />
                                <label for="ishealthy2">Ill</label>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }

    else {
        return (
            <div>
                <Swiper
                    pagination={{
                        type: "progressbar"
                    }}
                    navigation={true}
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards, Pagination]}
                    className="mySwiper"
                >

                    {props.firstArray.map((obj, index) => (
                        <SwiperSlide key={index}>
                            <div className="swiper-content">
                                <div className="cat-swiper-name">{obj.name}</div>
                                <div className="cat-swiper-img"><img src={obj.img}></img></div>
                                <div className="cat-swiper-url"><a href={obj.url}>Check!</a></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        );
    }
}

export default CatSwiper;