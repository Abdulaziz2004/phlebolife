import { Box } from "../../global-styled/Global.Styled";
import { CategoryWrapper } from "./Category.styled";
import icon1 from "../../assets/icon/cateory1.svg";
import icon2 from "../../assets/icon/category2.svg";
import icon3 from "../../assets/icon/category3.svg";
import icon4 from "../../assets/icon/category4.svg";
import icon5 from "../../assets/icon/category5.svg";
import icon6 from "../../assets/icon/category6.svg";
import icon7 from "../../assets/icon/category7.svg";
import icon8 from "../../assets/icon/category8.svg";
import icon9 from "../../assets/icon/category9.svg";

function Category() { 
  const categoryData = [
    {
      id: 1,
      img: icon1,
      title: "Амбулаторное лечение",
      poragript:
        "Пациенту не придется лежать в больнице, более того, первая рекомендация сразу после операции - пешая прогулка.",
    },
    {
      id: 2,
      img: icon2,
      title: "Местная анестезия",
      poragript:
        "Нет необходимости вводить общий наркоз, достаточно использования местной анестезии",
    },
    {
      id: 3,
      img: icon3,
      title: "Отсутствие реабилитации",
      poragript:
        "не нарушает общее самочувствие человека, после процедуры можно заниматься повседневными делами.",
    },

    {
      id: 4,
      img: icon4,
      title: "Отсутствие разрезов, швов и шрамов",
      poragript:
        "не нарушает общее самочувствие человека, после процедуры можно заниматься повседневными делами.",
    },
    {
      id: 5,
      img: icon5,
      title: "Операция под контролем УЗИ",
      poragript:
        "Врач-флеболог полностью контролирует ход операции с помощью УЗИ.",
    },

    {
      id: 6,
      img: icon6,
      title: "Безболезненность",
      poragript:
        "Операция проводится под местной анестезией и пациент не чувствует боли.",
    },

    {
      id: 7,
      img: icon7,
      title: "Сохраняется трудоспособность",
      poragript:
        "не нарушает общее самочувствие человека, по отзывам пациентов после процедуры можно спокойно заниматься повседневными делами.",
    },

    {
      id: 8,
      img: icon8,
      title: "Минимальный рискрецидива",
      poragript:
        "Вероятность повторного возникновения варикоза нижних конечностей у пациента минимальный",
    },

    {
      id: 9,
      img: icon9,
      title: "Возможность лечения пожилых пациентов",
      poragript:
        "Вероятность повторного возникновения варикоза нижних конечностей у пациента минимальный",
    },
  ];

  return (
    <CategoryWrapper>
      <Box>
        <div className="content">
          <div className="title">
            <h2>
              Преимущества лазерной или <br /> радиочастотной абляции
            </h2>
            <p>Операция лазером или радиочастотой (ЭВЛО, РЧО) -</p>
          </div>

          <div className="category">
            <div className="category-grid">
              {categoryData.map((item) => (
                <div key={item.id} className="category-main">
                  <img src={item.img} alt="" />
                  <h4>{item.title}</h4>
                  <div className="line"></div>
                  <p>{item.poragript}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Box>
    </CategoryWrapper>
  );
}

export default Category;
