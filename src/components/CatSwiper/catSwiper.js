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
                <div>Ups! Obecnie nie mamy kotów, które spełniałyby Twoje
                    potrzeby! :( Jeśli chcesz, możesz wrócić później - nowi podopieczni stale do nas przybywają! -
                    lub spróbować zmienić niektóre odpowiedzi. Czasem kot, który lubi inne koty,
                    może być również wspaniałym jedynakiem - a wiek często nie ma znaczenia ;).
                </div>
                <div>

                    <form>

                        <div>
                            <input type="radio" id="doeslikecats1" name="likes other cats" value="yes" checked={answers[0] === "yes"}
                                onChange={() => handleAnswerChange(0, "yes")} />
                            <label for="doeslikecats1">Lubi koty</label>
                        </div>

                        <div>
                            <input type="radio" id="doeslikecats1" name="likes other cats" value="no" checked={answers[0] === "no"}
                                onChange={() => handleAnswerChange(0, "no")} />
                            <label for="doeslikecats1">Nie lubi kotów</label>
                        </div>

                        <div>
                            <input type="radio" id="attitude1" name="likes cuddles" value="yes" checked={answers[1] === "yes"}
                                onChange={() => handleAnswerChange(1, "yes")} />
                            <label for="attitude1">Miziak</label>
                        </div>

                        <div>
                            <input type="radio" id="attitude2" name="likes cuddles" value="no" checked={answers[1] === "no"}
                                onChange={() => handleAnswerChange(1, "no")} />
                            <label for="attitude2">Samotnik</label>
                        </div>

                        <div>
                            <input type="radio" id="character1" name="is energetic" value="yes" checked={answers[2] === "yes"}
                                onChange={() => handleAnswerChange(2, "yes")} />
                            <label for="character1">Energiczny</label>
                        </div>

                        <div>
                            <input type="radio" id="character2" name="is energetic" value="no" checked={answers[2] === "no"}
                                onChange={() => handleAnswerChange(2, "no")} />
                            <label for="character2">Spokojny</label>
                        </div>

                        <div>
                            <input type="radio" id="isyoung1" name="is young" value="yes" checked={answers[3] === "yes"}
                                onChange={() => handleAnswerChange(3, "yes")} />
                            <label for="isyoung1">Młodszy</label>
                        </div>

                        <div>
                            <input type="radio" id="isyoung2" name="is young" value="no" checked={answers[3] === "no"}
                                onChange={() => handleAnswerChange(3, "no")} />
                            <label for="isyoung2">Starszy</label>
                        </div>

                        <div>
                            <input type="radio" id="doeslikedogs1" name="likes dogs" value="yes" checked={answers[4] === "yes"}
                                onChange={() => handleAnswerChange(4, "yes")} />
                            <label for="doeslikedogs1">Lubi psy</label>
                        </div>

                        <div>
                            <input type="radio" id="doeslikedogs2" name="likes dogs" value="no" checked={answers[4] === "no"}
                                onChange={() => handleAnswerChange(4, "no")} />
                            <label for="doeslikedogs2">Nie lubi psów</label>
                        </div>


                        <div>
                            <input type="radio" id="ishealthy1" name="is healthy" value="yes" checked={answers[5] === "yes"}
                                onChange={() => handleAnswerChange(5, "yes")} />
                            <label for="ishealthy1">Zdrowy</label>
                        </div>

                        <div>
                            <input type="radio" id="ishealthy2" name="is healthy" value="no" checked={answers[5] === "no"}
                                onChange={() => handleAnswerChange(5, "no")} />
                            <label for="ishealthy2">Chory</label>
                        </div>

                    </form>
                </div >
            </div >
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
                                <div className="cat-swiper-url"><a href={obj.url}>Zobacz!</a></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        );
    }
}

export default CatSwiper;