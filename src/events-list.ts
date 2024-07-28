import { addHours, isSameDay } from "date-fns";
import { z } from "zod";
import { type Day, isDay } from "./validators/filtered-events-input";
import { type woodstockEventValidator } from "./validators/woodstock-event";

const _polishTimezoneOffset = 2;
export const events: z.input<typeof woodstockEventValidator>[] = [
  {
    event: "Koło Tortury\nOkręgowa Izba Radców Prawnych w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Oczywiście, można nie mieć szczęścia i zamiast nagrody wygrać karę - niespodziankę ;) . Zapraszamy wszystkich śmiałków!",
    id: "0feee060-63ad-4c7c-aacd-cf1190e187a0",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T11:00:00.000+02:00",
        id: "b481ef22-6b17-42e4-9fe9-a3a58efb5c6d",
      },
      {
        dateStart: "2024-07-31T15:00:00.000+02:00",
        dateEnd: "2024-07-31T16:00:00.000+02:00",
        id: "e9bc65b2-3ff8-4457-b578-400122eb21f3",
      },
      {
        dateStart: "2024-07-31T17:00:00.000+02:00",
        dateEnd: "2024-07-31T19:00:00.000+02:00",
        id: "c02eb550-8f5f-4767-b9ed-ed79cb8466af",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T11:00:00.000+02:00",
        id: "2eaa2d8c-cae2-4f29-93c3-977903d88500",
      },
      {
        dateStart: "2024-08-01T19:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "85acb8aa-e4aa-4223-a51b-37853bf70c97",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T11:00:00.000+02:00",
        id: "53535f1e-df93-403e-bcad-95ef090d5aa4",
      },
      {
        dateStart: "2024-08-02T17:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "59c44eb8-3d4a-48ff-841a-fec77e5f2944",
      },
      {
        dateStart: "2024-08-02T19:30:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "b8c5a5fa-67e6-4c9f-b5a4-9cc9bfff82ad",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T11:00:00.000+02:00",
        id: "2c3d9b26-b61d-4f3c-b96b-6014621f804c",
      },
      {
        dateStart: "2024-08-03T17:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "61d72a77-aafb-4a84-96dd-cfdeb4ddc9bf",
      },
      {
        dateStart: "2024-08-03T19:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "0029bdcf-cf11-4d59-93b8-2c30af434a0c",
      },
    ],
  },
  {
    event:
      "Wyraź swoje wartości - zaprasza Ministerstwo Sprawiedliwości\nKrajowa Rada Komornicza",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Przyjdź i powiedz/pokaż/wymaluj, co jest dla Ciebie ważne i sprawdź, w jaki sposób gwarantuje Ci to Konstytucja. Aktywności organizuje Ministerstwo Sprawiedliwości.",
    id: "9ea28482-e757-4731-81ca-dc9958034e27",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T19:00:00.000+02:00",
        id: "547a4102-9b49-4561-9da9-f23b6f230686",
      },
    ],
  },
  {
    event: "PRAWA OSÓB W DRODZE\nStowarzyszenie Amnesty International",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "W środę 31.07, w namiocie Amnesty skupimy się na prawach człowieka osób uchodźczych. Przez cały dzień zapraszamy do podpisywania petycji, uzupełnienia Alfabetu Praw Człowieka i samodzielnego wykonania przypinki/badża poświęconych osobom w drodze. O godz.11-13 zapraszamy na malowanie plakatów dla uchodźczyń i uchodźców. O godz.12 – warsztat „Jak mówić niedyskryminującym, inkluzywnym językiem, jak weryfikować fakty i mity o uchodźcach”. O godz. 14 – warsztat „Kim są uchodźcy i migranci”. O godz. 16 – rozmowa z EKSPERTKĄ na temat prawnej i społecznej sytuacji osób uchodźczych w Polsce. Do zobaczenia",
    id: "e8da0465-fe4a-46f3-bbf5-6ddef376a2f4",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "f99acd09-6a97-486a-a2e5-ae01bc3f919c",
      },
    ],
  },
  {
    event: "Odmień Swoją Głowę\nStowarzyszenie Na Drodze Ekspresji",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Na stoisku "Odmień Swoją Głowę" znaleźć będzie można informacje o wachlarzu możliwości wsparcia dla osób doświadczających kryzysów psychicznych i ich rodzin. Mamy dla Was informatory oraz gazetki.\n \n• Quiz „Odmień swoją głowę” – typu koło fortuny, który polega na udzielaniu odpowiedzi na wylosowane pytania. Zabawa skłania do dialogu i rozmowy o tematyce zdrowia psychicznego.\n \n• Ankieta - badania ankietowe, mające na celu określenie społecznego postrzegania osób doświadczających kryzysów psychicznych. Chcemy poznać Wasze opinie i reakcje związane z codzienną obecnością osób chorujących psychicznie w naszym życiu.\n \n• Warsztaty z przypinek – wystaw swoją receptę na zdrowie psychiczne i wykonaj przypinkę, którą będziesz nosił także po festiwalu.\n\n• Warsztaty „Inny, czyli jaki ?”, podczas którego dostarczymy rzetelnej wiedzy i postaramy się dokonać zmiany istniejących stereotypów dotyczących oceny przydatności społecznej osób chorujących psychicznie i z zaburzeniami psychicznym. \n \n• Happening artystyczny - Słowa leczą- słowa ranią.\n\nPodczas pobytu będziemy rozmawiać o Waszych odczuciach na temat osób chorujących psychicznie czy też będących w kryzysie psychicznym. Będziemy też prowadzić transmisje na naszej stronie internetowej: Odmień SWOJĄ GŁOWĘ.',
    id: "efe2b30d-38ea-4b40-b11f-8d990b5d8a7b",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T17:00:00.000+02:00",
        id: "ba95a5b7-c9c5-4015-bfce-5c8001a79ba3",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T17:00:00.000+02:00",
        id: "eb471f22-eb6c-4b44-8b17-8f7a995599f6",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T17:00:00.000+02:00",
        id: "d7d303a6-246f-47d3-8e28-e39a9df9f79b",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T17:00:00.000+02:00",
        id: "2f3ba33b-d51c-45bc-ba0d-186a7c78ac9b",
      },
    ],
  },
  {
    event: "Bookcrossing\nMiejska Biblioteka Publiczna im. Galla Anonima",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Bookcrossing to niekonwencjonalna forma popularyzowania książek i czytelnictwa poprzez nieodpłatne ich przekazywanie metodą „podaj dalej”. Pozwala dzielić się książkami, stwarza możliwość wymiany na inne, daje szansę czytania tym, których nie stać na zakup książek, powoduje, że książki są w ciągłym obiegu. Bookcrossing to bezinteresowna przyjemność dzielenia się literaturą, budowanie więzi między czytelnikami, skuteczny sposób integracji. Uwolnij książkę i ciesz się radością czytania. Zapewniamy pozycje książkowe na regał bookcrossingowy.",
    id: "8b236d92-7209-49b9-a8df-e92ca3840ba6",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T19:00:00.000+02:00",
        id: "af6784f8-73ca-4b46-8289-ed37a2d14f7e",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T19:00:00.000+02:00",
        id: "84f03e79-b27a-462b-87cd-54af77c73daf",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T19:00:00.000+02:00",
        id: "5fccc317-9a3a-46a9-ae08-3166468a230f",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T19:00:00.000+02:00",
        id: "788fafae-57c0-488b-850c-215c37b1e1ab",
      },
    ],
  },
  {
    event:
      "Zbiórka podpisów pod  zakazem hodowli zwierząt na futra #CzasNaZakaz\nStowarzyszenie Otwarte Klatki",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zbiórka podpisów pod ogólnopolską akcją mobilizacyjną dotyczącą zakazu hodowli zwierząt na futra #CzasNaZakaz.\nDzieli nas krok od złożenia projektu zakazu! Po dekadzie walki o norki i lisy, teraz to Ty musisz pokazać rządzącym, że społeczeństwo chce końca ferm futrzarskich.\nKoniec tej historii zależy od Ciebie - włącz się w kampanię na rzecz zakazu!",
    id: "0949126f-0f67-45ff-b280-8b542acb1d43",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "593dd9aa-2071-4c5e-9373-67cb34ccdfda",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "c63dd34f-efbf-4f54-aef0-d1baf0bc9179",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "fa61b4fa-fee0-4d00-95df-e428bcf31736",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "bc074acb-b5f9-427f-98eb-7bd81e5cf1b6",
      },
    ],
  },
  {
    event:
      "Kolorowanka XXL – Fundacja Avalon na Festiwalu\nFundacja Avalon Bezpośrednia Pomoc Niepełnosprawnym",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Na stoisku Fundacji Avalon będzie funkcjonowało miejsce dla najmłodszych Festiwalowiczów oraz tych, którzy ciągle czują się młodzi duchem i uwielbiają kolorować! Oprócz dużej kolorowanki, będzie można pokolorować i zabrać na pamiątkę jej mniejsze wersje. Zapraszamy serdecznie!",
    id: "8c757d1b-6037-4eb1-9f67-2dd533b12111",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "c011ef0e-828d-4687-bc3d-0405a88cc90e",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "fdb19772-3cc7-4f83-b2a3-f20205037f3f",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "bb160934-8e3b-4c8f-8068-270a695b021d",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "82c87631-98ac-4190-a371-9e31c25fd42a",
      },
    ],
  },
  {
    event:
      "Punkt techniczny\nFundacja Avalon Bezpośrednia Pomoc Niepełnosprawnym",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Punkt dostępny dla wszystkich osób z niepełnosprawnościami przebywających na terenie Festiwalu, mieścić się będzie na stoisku Fundacji Avalon. Nasz punkt techniczny jest zaopatrzony w niezbędne narzędzia do naprawy wózka. Tutaj otrzymają pomoc wszyscy Ci, którzy znaleźli się w patowej sytuacji. Nie ma sensu samotnie mierzyć się z problemami technicznymi – można odwiedzić nasz punkt!",
    id: "9cc45ecb-0b0d-450a-9180-f7786c53a661",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "02c4c32f-682d-457b-a84a-18ee6f9016aa",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "e7b8a7fd-044c-4eca-abc0-6bf27847e43e",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "413ae900-f060-4bc2-b0c3-8cc822c6b6b1",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "c73ee019-34c6-4df0-a693-9dc7cceb1f31",
      },
    ],
  },
  {
    event: "Spotkanie z Biologią\nFundacja BioEdukacji",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy na wydarzenie „Spotkanie z Biologią”, w trakcie którego będzie można porozmawiać z ekspertami z dziedziny mikrobiologii, biologii molekularnej oraz biofizyki. Nasi specjaliści chętnie odpowiedzą na wszystkie pytania, podzielą się swoją wiedzą i doświadczeniem, a także opowiedzą o najnowszych badaniach i odkryciach.\n\nDodatkowo, każdy uczestnik będzie miał możliwość sprawdzenia swojej wiedzy biologicznej poprzez udział w interaktywnych quizach i zabawach edukacyjnych. Przygotowaliśmy również szereg ciekawostek, które z pewnością wzbudzą zainteresowanie zarówno młodszych, jak i starszych miłośników biologii.\n\nDołącz do nas na „Spotkanie z Biologią” i odkryj fascynujący świat nauki! Czekamy na Ciebie na naszym stoisku przez cały czas trwania festiwalu.",
    id: "df08f11a-a9dc-4d1e-b522-642b1cc91d2d",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "11a59125-a073-4b5b-83de-399ec44255d4",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "de263e09-b351-4e5d-95ca-51236efff8d6",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "561e7dc5-ea09-436e-8c54-5ecd82269675",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "c844d70c-d81f-42ef-a207-910a3638675e",
      },
    ],
  },
  {
    event:
      'Warsztaty dla dzieci "Ważenie sprawiedliwości – zostań młodym sędzią!"\nStowarzyszenie Sędziów Polskich  "Iustitia"',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Witamy w Świecie Sprawiedliwości: Na początek poznamy podstawowe zasady prawa i sprawiedliwości , poznamy zawody prawnicze. Będzie można przymierzyć togę i dowiedzieć się czym różnią się zawody prawnicze. Dowiemy się, czym jest Temida i dlaczego trzyma wagę i miecz. Będziemy rysować sprawiedliwość!!!",
    id: "af8bf782-781d-458d-bcac-4525acc931a8",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T11:00:00.000+02:00",
        id: "62cbefee-483e-4ec8-bd20-af9ef95c51bf",
      },
    ],
  },
  {
    event:
      "Ciało i Umysł\t - zawsze razem\nBody&Mind Edukacja Rozwój Aktywność Marzena Gajlewicz",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Odwiedź nas, znajdziesz tu fascynujące gry, inspirujące warsztaty, ciekawe wykłady i możliwość rozmowy z ekspertami. Odkryj, jak harmonijnie łączyć rozwój ciała i umysłu. Dołącz do nas i zainspiruj się do nowego, zrównoważonego podejścia do życia!",
    id: "0445de41-45cf-46f9-9123-ec0f0b147741",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T11:00:00.000+02:00",
        id: "37939c2c-b9b3-4bbe-b6a9-c69dde5d8cfc",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T11:00:00.000+02:00",
        id: "5f023f2a-8fdc-4d53-81fa-7820b7fa98ec",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T11:00:00.000+02:00",
        id: "ee681515-278d-414e-b9d8-c95731191669",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T11:00:00.000+02:00",
        id: "b6e470b2-a2bb-4b3e-87a9-9c90e37268cd",
      },
    ],
  },
  {
    event: "Quizy z nagrodami\nStowarzyszenie Otwarte Klatki",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Jaki sposób pomagania jest dla Ciebie najlepszy? / Którym (super)bohaterem zwierząt jesteś? / Którym zwierzęciem futerkowym jesteś?",
    id: "2a2f912a-586a-4bb5-aceb-75031eda4450",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "ee44741b-a0ca-45a8-9dbd-27417cac2bbf",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "11b37183-4274-447c-9c86-8a24e0d12035",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "fcc0d181-823c-46c6-b981-1518f433a6ab",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "501d2505-4ada-4efa-b31b-1ef5ef98754b",
      },
    ],
  },
  {
    event: "Z komornikiem można się dogadać.\nKrajowa Rada Komornicza",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Przyjdź do nas codziennie w godzinach 10:00 - 19:00 i porozmawiajmy. Postaramy się odpowiedzieć na wszystkie nurtujące Was pytania.",
    id: "870bc897-6360-40bb-966b-d0f9570f37a2",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T19:00:00.000+02:00",
        id: "541266ea-f450-42ce-b8f7-78a59a9e0c9f",
      },
    ],
  },
  {
    event:
      "Warsztaty STONE ART - malowanie mandali na kamyczkach\nStowarzyszenie MAYE",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "W Wiosce Beztroskiej możesz stworzyć swój unikatowy, osobisty design mandali na kamyczkach, która będzie wyjątkową pamiątką z Pol and Rock Festival. Warsztaty są organizowane przez Stowarzyszenie MAYE.",
    id: "25bb35bd-7399-4c21-a663-4007852a07c1",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T11:30:00.000+02:00",
        id: "46045fd2-7c5d-43d7-ac04-cc7aa45fa1e9",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T11:30:00.000+02:00",
        id: "6019732d-6e7d-4a86-b211-b3cc744c4a20",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T11:30:00.000+02:00",
        id: "54a0bfdd-6c2a-4ab9-bc7a-31517cdf5c86",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T11:30:00.000+02:00",
        id: "5331ef68-43bb-47fa-aaef-7819c2e3bab9",
      },
    ],
  },
  {
    event:
      "Warsztaty  medytacji z oddechem i dźwiękiem mantr co 30 min\nStowarzyszenie MAYE",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Może od dawna myślisz, że dobrze byłoby spróbować medytacji, ale nigdy nie masz na to czasu... Jeśli chcesz nauczyć się medytacji - to te warsztaty z pewnością są dla Ciebie! Będzie dużo praktycznych informacji, po co, jak i dlaczego - zwięźle i na temat - szczypta teorii i dużo praktyki! Tylko w Wiosce Beztoskiej!",
    id: "0281ca0c-6821-4daa-8483-462fd68b17b1",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T18:30:00.000+02:00",
        id: "03ae4d97-b893-43a5-bb20-4ed46023a870",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T18:30:00.000+02:00",
        id: "5b2a9132-39e0-4e73-96b1-e26570ed437a",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T18:30:00.000+02:00",
        id: "486f984d-9df4-4b91-9bfe-aa485dcb11fb",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T18:30:00.000+02:00",
        id: "be0fac2c-6ef1-4def-94c9-b64e11785744",
      },
    ],
  },
  {
    event: "Wstęgi życzeń\nFundacja Inicjatywa Dom Otwarty",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Macie tak czasem, że jedno dobre słowo w odpowiedniej chwili potrafi przegnać czarne chmury? Wasze dobre słowa, zapisane przez Was na wstążkach, trafią do osób uchodźczych, które odwiedzają biuro Domu Otwartego i pomogą odpędzić troski i zmartwienia.",
    id: "fd123a05-99d8-42fb-8759-624fbaa4fc93",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "95fccc60-29c5-4f06-b451-bb3574f14a1c",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "4af50e48-7add-47c2-a152-2f6f4cffeafa",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "7e70dee5-56b3-4a83-a28c-8468c6efe1b7",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "b2de3eaa-5672-474a-b469-3330a8d9dfc9",
      },
    ],
  },
  {
    event: '"Runaway" - monodram\nFundacja Banina',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      '"Runaway” to monodram, którego historię opowiada nastolatka przeżywająca pierwszą miłość. Amelia – główna bohaterka, jak wiele osób w jej wieku, jest zagubiona, a jednocześnie przeżywa młodzieńczy bunt, przez co decyduje się podjąć stanowcze kroki w relacji z rodzicami. Próbując wyrazić siebie, sięga głęboko do wspomnień, a o wszystkich codziennych, ale i tych mniej codziennych sprawach opowiada w listach ukochanemu. Nastolatka ma marzenia, snuje wielkie plany, które często sprowadzane są przez niezrozumienie rodziców do fikcyjnych i niemożliwych do spełnienia kaprysów. Ponadto rodzice wciąż widzą w niej swoją małą córeczkę, a nie dojrzewającą młodą kobietę, pragnącą poznawać świat według własnych reguł. By wreszcie uzyskać niezależność, Amelia musi podjąć stanowcze decyzje. Niełatwa relacja, skrajne niezrozumienie i krytyka ze strony rodziców to kolejne ważne tematy tego monodramu. W spektaklu oddajemy głos młodzieży, stąd współautorką scenariusza i aktorką jest szesnastoletnia Alicja Stankiewicz. „Runaway” to krzyk nastolatki Amelii, jej punkt widzenia, opowieść o tym, jak dorośli nieświadomie/świadomie krzywdzą i zamykają w ciasnych ramach dziecko. Ten oskarżycielski ton dziewczyny jest czymś, z czym każdy rodzic powinien się zmierzyć. Oby dla naszej bohaterki nie było za późno na odcięcie się od rodziców i oby ta relacja nie była krępującym łańcuchem. Spektakl od 13 roku życia',
    id: "c4a5dae4-1854-4a62-988c-276f15e27895",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T12:00:00.000+02:00",
        id: "150359e4-955e-4524-b874-42ce06ffe6d8",
      },
      {
        dateStart: "2024-08-01T13:00:00.000+02:00",
        dateEnd: "2024-08-01T15:00:00.000+02:00",
        id: "e1a501df-dc3d-4b63-af08-c542d18209fc",
      },
    ],
  },
  {
    event: "Czy konopie są nam potrzebne?\nFundacja Konopie dla Ziemi",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Cześć !\nPrzyjdź, zobacz, dotknij, posłuchaj, porozmawiaj z nami:) \n\no konopiach włóknistych i ochronie środowiska naturalnego - o tym jak konopie mogą być przyjazne dla naszej Ziemi !\n\nUczestnikom festiwalu proponujemy warsztaty z czerpania papieru konopnego. Przedstawimy konopie w ich praktycznym wymiarze, omówimy jakie mają zastosowanie w gospodarce i codziennym użytkowaniu. Pokażemy różne produkty wykonane z konopi, m.in.: tkaniny, plastik konopny, drewno konopne, beton konopny.\n\nOpowiemy o wpływie konopi włóknistych na poprawę stanu gleby, powietrza i wody. Jak konopie pochłaniają CO2, jak mogą wpłynąć na mitygację związaną ze zmianami klimatu. Przedstawimy wpływ polityki konopnej na realizację celów Zrównoważonego Rozwoju Agendy 2030. Zapraszamy:) Będzie się działo:) \n\nJesteśmy Fundacją z wieloletnim doświadczeniem: \n•\tprowadzimy projekty z jednostkami naukowymi, \n•\tpropagujemy rozwiązania wykorzystujące konopie w gospodarce, \n•\tedukujemy w zakresie wykorzystania konopi do poprawy stanu środowiska naturalnego, \n•\tzostaliśmy wyróżnieni tytułem: "New Environmental Protection Organisation of the Year 2021/2022” Europe"\n•\tjesteśmy organizacją pozarządową non-profit',
    id: "7bfd7a50-6969-49f2-8a77-38d9362245d9",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "6ab0d098-2345-49c6-9b17-1d9b3ca5c6a5",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "3f04212e-f098-44bf-a9cb-53701db9151c",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "3407f333-1ccc-42e3-9ae2-6afd36fd06a5",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "a260bfbf-f666-4915-83b2-60e9a3a062f7",
      },
    ],
  },
  {
    event: "Zapytaj Astrobiologa\nPolskie Towarzystwo Astrobiologiczne",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Codziennie na naszym stanowisku zapraszamy do rozmowy i dyskusji z naszymi ekspertami. Poruszymy tematy na pograniczu nauki, filozofii i science-fiction. Porozmawiamy o tym jakie są szanse znalezienia życia poza Ziemią, jak wygląda praca astrobiologia i kim tak naprawdę jest astrobiolog. Postaramy się pokazać piękno tej międzydziedzinowej dyscypliny naukowej i w razie potrzeby zrobimy wszystko aby rozwiać wszelkie wątpliwości naukowe które mogą zaprzątać głowy festiwalowiczom",
    id: "b16de8e4-281e-4cb7-8da0-50a27c7f23c7",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "277b584c-fc63-4be5-8740-4475518ec322",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "df4157e9-f9c8-4203-94dc-b186f2d10e71",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "55e03656-39f2-452d-a117-888f105cb902",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "853e41a2-3f5b-414e-a5c8-cd9a1bae6811",
      },
    ],
  },
  {
    event: "#zapytajradcę\nOkręgowa Izba Radców Prawnych w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "W tym roku gościnnie porad będą udzielać również notariusze i pracownicy Biura Urzędu Ochrony Danych Osobowych",
    id: "533b38ed-201a-4f4c-9fd4-afa65565be86",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T11:00:00.000+02:00",
        id: "be0024fa-fa47-4131-b00f-5e0a7dbb3c24",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T11:00:00.000+02:00",
        id: "18d01b19-0b87-44cc-b5b6-b2dcdd847f65",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T11:00:00.000+02:00",
        id: "8ccd84ad-8f88-447b-9d07-21e357b296f5",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T11:00:00.000+02:00",
        id: "df079d27-0059-452f-b8b1-d41c6f5b5fb1",
      },
    ],
  },
  {
    event:
      "SYNDICUS AMATEUR LEAGUE E-SPORT CHALLENGER SERIES\nSyndicus Amateur League ( Stanaszek&Drozd Spółki z o.o.",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Pierwszy dzień\nStrefa chillout, gdzie będzie można swobodnie pograć i zrelaksować się. W ciągu dnia będą organizowane mini turnieje (cztery do sześciu osób) w różne gry (np. EA FC 24, TEKKEN",
    id: "393b81ff-4b34-465d-98e1-e7a4ed907897",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "13b7ff52-631f-4124-b194-0519ad2210f8",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "f6c38b86-c427-4bf3-922e-ad1c895c3585",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "eef9b2f2-4c0f-4cae-8836-c0639e49a003",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "b30cc62d-8bca-4c2e-8dac-1c2c8b58de13",
      },
    ],
  },
  {
    event: "Potworne eMOCJe!\nProjekt The Presja- Fundacja Z Wyboru",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Czy ważne jest dla Ciebie, aby Twoje dziecko potrafiło otwarcie mówić o swoich emocjach i przeżywać je tak, aby nie krzywdzić siebie i innych? To jest właśnie miejsce dla niego... Podczas warsztatu dzieci będą mogły dowiedzieć się, czym są emocje i po co w ogóle je mają? W trakcie spotkania skupimy się na doskonaleniu inteligencji emocjonalnej Twojej pociechy oraz wesprzemy w procesie przeżywania uczuć. Pokażemy jednocześnie "nowe" metody radzenia sobie ze złością, strachem czy smutkiem... Zabawy i zadania, jakie stoją przed najmłodszymi oprócz tego, że dadzą im frajdę, to pozwolą zrozumieć dlaczego czasem tupią nogami lub skaczą z radości.\n\nadresaci: dzieci 7 i 10 lat\nprowadzące: Anna Maus i Dorota Burzyńska psychopedagożka i psycholożka',
    id: "2daae9a7-3834-4e18-9023-ebbdf51709ae",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T12:00:00.000+02:00",
        id: "a75b227b-adf4-486e-92ab-f4e5cb965f3e",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T12:00:00.000+02:00",
        id: "60a00c67-f225-4e81-8057-c21f6e2cad34",
      },
    ],
  },
  {
    event: "Spacer terapeutyczny\nProjekt The Presja- Fundacja Z Wyboru",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "W trakcie naszego pobytu na Polu ASPowym nasi terapeuci/ psychologowie/ psychodietetycy udzielają 20 minutowych konsultacji. Proponujemy Ci spacer i rozmowę, podczas której otrzymasz indywidualne wskazówki jak, gdzie szukać pomocy. \nDlaczego spacer? Ruch daje swobodę i łatwość w mówieniu o tym, co nie jest łatwe.",
    id: "2ebd5f87-2803-4b95-a605-c9ae5b9f78d1",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "c38fecfb-4fa8-443a-9a55-fed489d64c0f",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "39ea1427-d949-4d41-bcaf-a12889e3af2f",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "ecf979e7-19bc-453c-8764-c4bc93d4f0f5",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "bf22fc34-1456-437b-8b97-c09aec394e8e",
      },
    ],
  },
  {
    event: "Strefa Chilout\nVIESSMANN SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Podczas Festiwalu każdy zasługuje również na chwilę relaksu.\nStrefa chillout - odpocznijcie na naszych wygodnych leżakach.",
    id: "7a1ef0d4-554e-48f7-9454-4923236f4697",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "6f81bec7-0e36-48a7-8bc9-975c96da6f69",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "df74b478-c77f-4ae5-9b15-1465a391531b",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "995ea05c-10a6-4d25-aad2-ecd79eae1606",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "7d0aa0a4-749a-4ff1-b042-6a945d7cceff",
      },
    ],
  },
  {
    event: "Jak może ci pomóc Rzecznik?\nBiuro Rzecznika Praw Obywatelskich",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Jak może ci pomóc Rzecznik? – Spotkania i rozmowy indywidualne z pracownikami BRPO",
    id: "530d6653-7750-4ee4-b37d-3043b8a51335",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T11:00:00.000+02:00",
        id: "84dc5608-690d-455b-8ba5-becdaa78c045",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T10:30:00.000+02:00",
        id: "90fcf7b4-f80f-4da4-9ba4-12a7c4a4c227",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T10:30:00.000+02:00",
        id: "356e3690-d31a-42e3-a07b-acbbb9021505",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T11:00:00.000+02:00",
        id: "33bcc7be-d274-46d2-a1e9-925995630896",
      },
    ],
  },
  {
    event:
      "Powiatowe Koło Fortuny + rozmowy o Walterze Gropiusie\nPowiat Drawski",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Każdy chętny będzie mógł zakręcić kołem fortuny, odpowiedzieć na mniej bądź bardziej trudne pytanie czy też wykonać zadanie (jakie - dowiecie się na miejscu:) ) i dzięki temu otrzymać nagrodę. Zachęcamy także do spotkania z  z naszym lokalnym historykiem, Romualdem Kurzątkowskim, który przybliży nam działalność światowej sławy architekta, Waltera Gropiusa.",
    id: "5a41ab83-9e2d-4db0-90c4-53a47a0d1413",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T15:00:00.000+02:00",
        id: "0d34b727-f8e1-4b4a-b509-5a6aa0359175",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T15:00:00.000+02:00",
        id: "0f0e3af7-e12e-48ef-83f6-a6fef1dfb5fb",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T15:00:00.000+02:00",
        id: "f66118b2-983b-4160-b510-85b024582ced",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T15:00:00.000+02:00",
        id: "16636d20-6872-4bad-bd6f-89132ea1bfa0",
      },
    ],
  },
  {
    event:
      "Zacznij dzień z Avalonem! - Zajęcia sportowe prowadzone przez fizjoterapeutów, bazujące na pracy z własnym ciężarem ciała oraz z wykorzystaniem drobnego sprzętu - skierowane do OzN i osób pełnosprawnych\nFundacja Avalon Bezpośrednia Pomoc Niepełnosprawnym",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy na poranny rozruch z Fundacją Avalon! Zajęcia będą opierały się na wykorzystaniu ciężaru własnego ciała wspomaganego przez gumy, kettle oraz inny sprzęt. Celem zajęć będzie zwiększanie świadomości ciała, praca nad zakresami ruchu oraz stabilizacji tułowia. Tego typu zajęcia wpływają na poprawę ogólnego stanu zdrowia, pozytywnie wpływają na układ sercowo naczyniowy, oddechowy oraz przemianę materii. Oddziałują na poprawę kondycji fizycznej, psychicznej oraz rozwój stosunków społecznych. Dodatkowo będą organizowane w godzinach porannych, co pozytywnie przełoży się na uczestnictwo w warsztatach odbywających się na terenie Festiwalu. Zajęcia poprowadzą eksperci fizjoterapii Fundacji Avalon, na co dzień wspierający rozwój aktywności osób z niepełnosprawnościami w ramach Projektu Avalon Active.",
    id: "4fae086e-5f38-4d36-acd7-e6bef374b127",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T10:30:00.000+02:00",
        id: "09a73ab1-07c3-4a9f-8d48-afd1997abd20",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T10:30:00.000+02:00",
        id: "b6c0724e-d694-4088-8ec0-8fb6c4ee4c88",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T10:30:00.000+02:00",
        id: "91c75d22-e506-4602-9008-92e37f928681",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T10:30:00.000+02:00",
        id: "04a9cc01-0aea-45b7-867c-fc952d72293c",
      },
    ],
  },
  {
    event:
      "Profilaktyka zdrowia seksualnego\nMiędzynarodowe Stowarzyszenie Studentów Medycyny IFMSA-Poland",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Studenci i studentki z Międzynarodowego Stowarzyszenia Studentów Medycyny IFMSA-Poland zapraszają na stanowisko profilaktyczne! Dowiedz się ważnych informacji na temat raka piersi, szyjki macicy, jąder i prostaty. Naucz się samobadania na naszych modelach piersi i jąder, zobacz jak wygląda badanie cytologiczne na modelu macicy. Porozmawiaj o profilaktyce HIV, AIDS i innych infekcji przenoszonych drogą płciową oraz wygraj prezerwatywy i inne gadżety w konkursie wiedzy. Śmiało zadawaj wszystkie nurtujące cię pytania z zakresu edukacji seksualnej. Dla nas nie ma tematów taboo!",
    id: "458ee2f1-074b-4f54-915f-612c98ab92b9",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "6eca9a15-bd1b-4270-a22e-ed20e3affcb3",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "c34a15a4-df17-461f-b34a-90a12d6e614e",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "c2a36656-fc03-4f85-bf3c-c73dea1333cf",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "8018c9cb-9ac1-4551-9f0a-8ee7eecb808b",
      },
    ],
  },
  {
    event:
      "Koncepcja duszy i zaświatów w wierzeniach dawnych Słowian\nWioska Słowiańska",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Każda religia posiada koncepcję zaświatów i tego co dzieje się z nami po śmierci. Przybliżenie sfery wierzeniowej dotyczącej składowych pierwiastów duszy, ich pośmiertnych losów, rodzaju zaświatów w oparciu o koncepcję Axis Mundi (związaną z wyobrażeniem drzewa życia) i ich podóży do nich.",
    id: "f5ea2cfa-5ff4-4161-aa0c-57e96e135d6b",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T11:00:00.000+02:00",
        id: "bb4a513d-5bcc-4bc6-b006-c3df56e27837",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T11:00:00.000+02:00",
        id: "51d2f078-0e77-4991-8952-b51df63c4f2e",
      },
    ],
  },
  {
    event: "Strefa Malucha\nMiejska Biblioteka Publiczna im. Galla Anonima",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Najmłodsi uczestnicy festiwalu będą mogli cieszyć się wieloma atrakcjami! Specjalna, wydzielona strefa oferuje między innymi: książeczki z panelami dotykowymi oraz dźwiękowymi dla najmłodszych, chusty animacyjne, worki do skakania, maty sensoryczne, bujaki. Dla dzieci uwielbiających budować, przygotowaliśmy wielkie klocki! Strefa malucha będzie miejscem relaksu dla rodzin z dziećmi.",
    id: "76e1cd39-11fd-405c-b846-1b7bc07103b3",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T18:00:00.000+02:00",
        id: "1f44017c-ab82-4a6c-b610-d63350dc99d5",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "ac43bd91-6150-46f6-b659-d01c5d3a3bfe",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "7082afe0-5166-42ef-ae5e-ec8e3c7303a5",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "52cbbdd6-ce20-458f-9d92-6b8d01aac745",
      },
    ],
  },
  {
    event:
      "Wielki Quiz Wiedzy!\nFundacja Avalon Bezpośrednia Pomoc Niepełnosprawnym",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Na stoisku Fundacji Avalon przez cały czas trwania Festiwalu będzie funkcjonowało miejsce, w którym uczestnicy Pol’and’Rock Festival mogą sprawdzić swoją wiedzę z zakresu seksualności osób z niepełnosprawnościami i języka inkluzywnego, walczyć ze stereotypami dotyczącymi OzN, jednocześnie dobrze się przy tym bawiąc!",
    id: "40b165d0-e6d2-4db0-bc93-87df7303de4f",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "a51accc9-b481-42a0-803c-7bcd8d0bf3ee",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "87313ae5-6ac6-4336-b0fd-ab3ede0f2ce6",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "2a5cb682-a703-4fac-a452-6065c5dd79c8",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "d03a1044-f69a-4229-9580-55c5ccc740c0",
      },
    ],
  },
  {
    event:
      "Pobudź swoją sensorykę! Zajęcia sensoryczne dla każdego\nFundacja Avalon Bezpośrednia Pomoc Niepełnosprawnym",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Serdecznie zapraszamy na wyjątkowe zajęcia sensoryczne na stoisko Fundacji Avalon. To wspaniała okazja zarówno dla dzieci, jak i dorosłych, aby odkrywać i rozwijać swoje zmysły poprzez zabawę i różnorodne aktywności. Te zajęcia nie tylko dostarczą uczestnikom unikalnych doświadczeń, ale będą również inspirującą formą edukacji i rozrywki, łączącą naukę, sztukę i interakcję społeczną. Zajęcia poprowadzą ekspertki w tej dziedzinie. Dołącz do nas i przeżyj niezapomniane chwile pełne zmysłowych odkryć i kreatywnej zabawy!",
    id: "7683b697-bbea-4d40-8989-11faec421e31",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T12:00:00.000+02:00",
        id: "a3088604-cbb3-41c8-9ed6-22733d84fae2",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T12:00:00.000+02:00",
        id: "da89fb81-5396-42d4-8b05-49f332eedc97",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T12:00:00.000+02:00",
        id: "20db4a84-2c9b-40f1-bdf9-98fe2379c82e",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T12:00:00.000+02:00",
        id: "23d4fb77-ca45-4e85-8ed6-c4f635b83b0d",
      },
    ],
  },
  {
    event: "Informacja dla młodzieży\nStowarzyszenie Europe4Youth",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy do naszego stoiska wszystkie osoby zainteresowane skorzystaniem z europejskich możliwości dla młodzieży, od wolontariatu, po organizowanie własnych projektów społecznych. \nCo można robić na naszym stoisku:\n- porozmawiać z jednym z konsultantów (po polsku lub angielsku) i uzyskać informacje, porady, wskazówki (neutralne, oparte na potrzebach młodych ludzi, apolityczne, etyczne) na temat wybranych możliwości: wolontariat, wymiany młodzieżowe, studia, praca za granicą, własne projekty, podróże po Europie, polityka młodzieżowa i in.,\n- wziąć udział w tematycznej grze terenowej pozwalającej na odkrycie korzyści, jakie dają programy europejskie dla młodzieży i z jakimi wyzwaniami można się spotkać,\n- podzielić się swoimi doświadczeniami z innymi poprzez spisanie wrażeń, rezultatów projektów młodzieżowych, jak i wyzwań, z jakimi się spotkali w kreatywnej formie (ścianka wrażeń).",
    id: "a830ee1a-1dec-4c68-b318-0c96fb0de3f1",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "0b7a1069-1404-4236-bb82-4e4ad78f7a7f",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "88dab95c-88c4-4f48-a15c-f1de3813b876",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "102affac-9cee-4c23-8e6f-7a6e44f29ba9",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "813cfb65-483f-4dc9-9269-5e293dd9f575",
      },
    ],
  },
  {
    event: "#zapytajradcę #porozmawiajznotariuszem\nIzba Notarialna w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Darmowe porady prawne udzielane przez radców prawnych.\nW tym roku gościnnie na pytanie będą odpowiadać notariusze i pracownicy Biura Urzędu Ochrony Danych Osobowych.",
    id: "029c47cc-272f-4378-86d7-72296653e5e5",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T11:00:00.000+02:00",
        id: "853471c0-bb91-4b6c-a5f6-d77c4936c83c",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T11:00:00.000+02:00",
        id: "3088596c-8073-44e8-b472-e45ae9cad9fe",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T11:00:00.000+02:00",
        id: "ef963d31-7946-4e35-8902-f7dede47f9ce",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T11:00:00.000+02:00",
        id: "9223dde6-3c75-4f87-bbea-385d11dac440",
      },
    ],
  },
  {
    event:
      "Dyskusje na temat hodowli zwierząt na futra\nStowarzyszenie Otwarte Klatki",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Dyskusje z aktywistami Otwartych Klatek na temat hodowli zwierząt na futra",
    id: "17271f4a-888c-4f14-a841-c7a226447907",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "a3f0ed2f-31b8-415c-92eb-de4f5cdbfbfb",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "5b0c04b8-deac-4995-8b1d-962c1f12b755",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "6093451e-743c-4a85-b836-f29041c07672",
      },
    ],
  },
  {
    event:
      'Akcja edukacyjno-profilaktyczna "Miłość, młodość, odpowiedzialność"\nTOWARZYSTWO ROZWOJU RODZINY ODDZIAŁ W ZIELONEJ GÓRZE',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy serdecznie do namiotu Towarzystwa Rozwoju Rodziny, oddział w Zielonej Górze na akcję pod nazwą „Miłość, młodość, odpowiedzialność”. \nJesteśmy obecni na Festiwalu  nieprzerwanie od 1998 roku !\nW naszej Festiwalowej ofercie znajdą się następujące bezpłatne działania:\n- rozmowy dotyczące seksualności, dojrzewania, bezpieczniejszych zachowań seksualnych, orientacji i tożsamości seksualnej, praw seksualnych i reprodukcyjnych, antykoncepcji, edukacji seksualnej, profilaktyki HIV/AIDS, HCV, HBV i innych STI, testowania na HIV w Polsce, profesjonalnej pomocy w sytuacjach trudnych i kryzysowych (np. problemy wieku dorastania, przemocy seksualnej, uzależnień, zakażenia HIV), \n- pomoc, wsparcie i poradnictwo w wyżej wymienionych obszarach,\n- pokaz i omówienie nowoczesnych metod antykoncepcyjnych, \n- nauka prawidłowego zakładania prezerwatywy męskiej i damskiej, \n- gry i quizy edukacyjne, \n- rozdawnictwo bezpłatnych materiałów profilaktycznych,\n- dodatkowo w naszej ofercie będzie możliwość anonimowego i bezpłatnego testowania szybkimi testami w kierunku HIV, HCV i kiły !!!\nRealizatorami zadania są certyfikowani edukatorzy z zakresu profilaktyki HIV/AIDS, doradcy w zakresie poradnictwa i testowania w kierunku HIV, edukatorzy seksualni, streetworkerzy, terapeuci, pedagodzy. \n\nZAPRASZAMY SERDECZNIE PRZEZ CAŁY CZAS TRWANIA FESTIWALU!",
    id: "25e90f96-03e4-4aca-a8f7-4f2d1e1a0f1c",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T18:00:00.000+02:00",
        id: "0bdc1db4-4a76-4d1d-9cf5-4a4a73758cae",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "d0e60501-9c6b-42f4-bc5d-cb461b9a2a40",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "421db727-c651-4e2e-8527-ea055aea6fcc",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "0b79b775-2e8a-4cb9-bb86-3814f94801eb",
      },
    ],
  },
  {
    event: "Fotobudka\nStowarzyszenie MONAR",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description: "Wpadnij i zrób sobie zdjęcie w naszej fotobudce.",
    id: "f50ab272-b191-474c-aaed-fde83f3343b2",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T15:00:00.000+02:00",
        id: "90b41e33-5c2f-4cbb-ab2f-d69d417a9fcd",
      },
    ],
  },
  {
    event: "#ChceszToWiesz - e-Doręczenia.\nKrajowa Rada Komornicza",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Wyjaśniamy czym są i jak działają e-Doręczenia. Jakie są korzyści z posiadania skrzynki do e-Doręczeń, a także pomagamy je założyć.",
    id: "8ce42042-0cf3-40d0-ae16-06f8aad8dd24",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T19:00:00.000+02:00",
        id: "b6027bae-72ce-48fc-899d-5bcd4e95f969",
      },
    ],
  },
  {
    event: "Zróbmy sobie Strajk!\nOgólnopolski Strajk Kobiet",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zrób sobie strajk i noś go na sobie! Mamy szablony więc każda i każdy będzie mógł namalować nasze wzory gdzie tylko chce! Dla bardziej cierpliwych będzie możliwość stworzenia spersonalizowanej i unikatowej biżuterii strajkowej do noszenia nie tylko na festiwalu, ale i na co dzień!",
    id: "f0c92107-296d-49d3-a834-caaaedba9638",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T12:00:00.000+02:00",
        id: "9511b825-8ce6-4983-ba8f-9332d64a2457",
      },
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T12:00:00.000+02:00",
        id: "7e189ef0-f3ca-4490-a4df-a71ec071cfd0",
      },
    ],
  },
  {
    event:
      "Odetchnij - świadome oddychanie drogą do zdrowia. Warsztaty pranajamy.\nStowarzyszenie MAYE",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Odetchnij - to warsztaty pranajamy, czyli świadomego oddychania jogicznego. Ponieważ oddech jest podstawą naszego życia watro jest nauczyć się pracować z oddechem. Przyjdź do Wioski Beztroskiej i naucz się oddychać pełną piersią!",
    id: "b44f696c-c596-4569-9b8b-0f54d40a0bdc",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T10:20:00.000+02:00",
        id: "7b58a5f0-344b-4d28-8f70-da7db8742f8d",
      },
      {
        dateStart: "2024-07-31T14:30:00.000+02:00",
        dateEnd: "2024-07-31T14:50:00.000+02:00",
        id: "a17f8d3e-06a2-470d-b5d2-381a3a8f6ce0",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T10:20:00.000+02:00",
        id: "ea7d60e7-d300-4ad4-b6a2-27cb5e9dedbe",
      },
      {
        dateStart: "2024-08-01T14:30:00.000+02:00",
        dateEnd: "2024-08-01T14:50:00.000+02:00",
        id: "9418349a-5207-4fd7-b733-8883e5b17ddb",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T10:20:00.000+02:00",
        id: "66f04876-9618-4a65-8701-84b279f1c4b5",
      },
      {
        dateStart: "2024-08-02T14:30:00.000+02:00",
        dateEnd: "2024-08-02T14:50:00.000+02:00",
        id: "1d289c52-124c-4ca2-a9a6-5ee637936261",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T10:20:00.000+02:00",
        id: "ceb2fa22-d119-45ab-bd1b-e93f6c11dd40",
      },
      {
        dateStart: "2024-08-03T14:30:00.000+02:00",
        dateEnd: "2024-08-03T14:50:00.000+02:00",
        id: "560ab9b8-70bb-461c-b88a-d24caa5a399e",
      },
    ],
  },
  {
    event:
      "Beztroskie SPA- techniki medytacji relaksacji i automasażu\nStowarzyszenie MAYE",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Kto z nas nie odczuwa stresu? Nie pozwól, aby stres kontrolował Ciebie - Ty naucz się kontrolować stres! Skorzystaj z naszego SPA. Poznaj proste techniki relaksacji i automasażu pomogą Ci pozbyć się stresu zarówno na platformie fizycznej, emocjonalnej i mentalnej.",
    id: "12c70c65-1c29-456a-9255-2336e5e1efad",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T11:00:00.000+02:00",
        id: "9fdf445f-7318-470f-9a0d-b57c8ab788ee",
      },
      {
        dateStart: "2024-07-31T13:00:00.000+02:00",
        dateEnd: "2024-07-31T14:00:00.000+02:00",
        id: "4170b004-b837-48c5-bff5-dd8ad1f52885",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T11:00:00.000+02:00",
        id: "6ab99d53-0f4b-4762-a846-548da16523f1",
      },
      {
        dateStart: "2024-08-01T13:00:00.000+02:00",
        dateEnd: "2024-08-01T14:00:00.000+02:00",
        id: "b2949535-0d4d-4ef5-b2c7-09a4d9cfcf57",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T11:00:00.000+02:00",
        id: "a630abab-27fd-4d2d-bcbe-2cdde29b757e",
      },
      {
        dateStart: "2024-08-02T13:00:00.000+02:00",
        dateEnd: "2024-08-02T14:00:00.000+02:00",
        id: "37f51c55-2f0d-4cc8-84a3-427c7761b44f",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T11:00:00.000+02:00",
        id: "66bec39a-0d4b-4f0c-bc76-52f4b7716a49",
      },
      {
        dateStart: "2024-08-03T13:00:00.000+02:00",
        dateEnd: "2024-08-03T14:00:00.000+02:00",
        id: "2e94bef8-1012-4948-beed-5ca00e31bd7d",
      },
    ],
  },
  {
    event:
      "Granica praw człowieka - wystawa zdjęć\nFundacja Inicjatywa Dom Otwarty",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Od trzech lat na granicy polsko-białoruskiej trwa kryzys humanitarny. W odróżnieniu od innych tragedii uchodźczych, które dzieją się na oczach świata, ten kryzys miał zniknąć z widoku. Nie udało się. Ratowanie życia na pograniczu to nie tylko podanie wody czy leków. To także dokumentowanie czyjejś obecności. Uchodźcy nadal tam są. I nadal powstają ich zdjęcia.\nAutor zdjęć: Karol Grygoruk",
    id: "b30587f7-e8d9-4059-babe-17147e9e8fda",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "936c4471-f422-44c7-884d-aac5bc483fb3",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "2e33d360-7432-4360-a72e-fa89b15c128b",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "77f8dadf-c2b3-4e19-86da-bac6c43dc296",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "d013dc32-eb92-4ec6-972f-1d30fa579a42",
      },
    ],
  },
  {
    event: "Rozmowy codzienne - uchodźcy\nFundacja Inicjatywa Dom Otwarty",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Do czasu eskalacji wojny w Ukrainie z uchodźcami w Polsce było jak z jednorożcami: wszyscy o nich mówili, ale nikt ich nie widział. Jednak Polska przyjmuje uchodźców od dawna, choć nielicznych. \nW naszej wiosce na Was i Wasze pytania czekają codziennie osoby, które pomagają uchodźcom oswoić sobie Polskę. Niektóre z nich same mają doświadczenie migracji.\nPrzyjdźcie, porozmawiajmy!",
    id: "3abeef5d-7c01-44ca-82a1-02e9a01d6f3c",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "0ad0ffb8-bf04-4022-9ca9-ba07aedf3e2f",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "609cd7f9-1c8f-4a79-a249-9318e262a1cb",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "f02e62af-d3cc-4f1a-94b0-af69d689055e",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "34a79887-1a82-4a12-9f8a-71fee7ab8105",
      },
    ],
  },
  {
    event:
      "Migracje, uchodźstwo, prawa człowieka - czyli o sytuacji osób z doświadczeniem migracyjnym w Polsce\nStpwarzyszenie Interwencji Prawnej",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Wojna w Ukrainie, kryzys humanitarny na granicy polsko-białoruskiej, strzeżone ośrodki dla cudzoziemców - to tylko niektóre z wyzwań, z którymi mierzą się osoby szukające bezpieczeństwa w Polsce i Europie. Jak wygląda ich codzienność i dlaczego wciąż musimy walczyć o przestrzeganie praw człowieka - na te pytania postaramy się odpowiedzieć na naszym stoisku. Przez cały festiwal, w strefie ASP, czekamy na Was z aktywnościami, które pozwolą lepiej poznać sytuację uchodźców i uchodźczyń w Polsce:\n\n1.\tFake czy news – rozpraw się z informacji funkcjonującymi w przestrzeni publicznej.\n2.\tSprawdź, z jakich krajów pochodzą uchodźcy, którzy szukają schronienia w Polsce.\n3.\tSłuchowisko - zapoznaj się z historią uchodźcy(-dźczyni).\n4.\tSprawdź, jakie kraje przyjmują najwięcej uchodźców(-czyń).\n5.\t„Test” - jakie są realia życia w zamkniętych ośrodkach dla cudzoziemców(-mek).\n6.\tJak dobrze znasz swoją osobę partnerską – imitacja rozmowy mającej na celu potwierdzenia związku obywatela(-lki) Polski z cudzoziemcem(-mką).\n7.\tPoznaj historie osób uchodźczych LGBTQ+ - minibroszurka.\n\nZ chęcią siądziemy też z Wami do rozmowy o łamaniu praw osób uchodźczych na granicy polsko-białoruskiej czy sytuacji osób uciekających z Ukrainy. Każda okazja jest dobra, by wspólnie spojrzeć na świat z innej perspektywy.",
    id: "c69bad6b-4773-454e-b269-315f1d82f963",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "eec2d32f-352a-486b-b1b2-79227130b60a",
      },
    ],
  },
  {
    event: '"Żywa Biblioteka Psychiatryczna"\nFundacja eFkropka',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'W \'Bibliotece Psychiatrycznej" Fundacji znajdują się "książki" z doświadczeniem różnych kryzysów zdrowia psychicznego. Wypożyczenie oznacza rozmowę z taką osobą i  poznanie jej historii. W Żywej Bibliotece Psychiatrycznej uczestniczą Edukatorzy, Asystenci Zdrowienia, psychologowie i psychoterapeuta. Biblioteka będzie czynna cały dzień.',
    id: "89c39d47-d77c-4622-b0c7-159fdcaffb4c",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T11:00:00.000+02:00",
        id: "62ff9536-7b6d-426a-8b75-de7c29f6f4d0",
      },
    ],
  },
  {
    event: "Czy Ty też jesteś hackerem?\nFUNDACJA HACKERSPACE KRAKÓW",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "U nas możesz się dowiedzieć kim jest hacker i czy Ty też możesz nim być. Poznasz koncepcję Hackerspace i porozmawiasz z hackerami tworzącymi takie miejsca w różnych miastach. A może sam potem założysz Hackerspace w swoim mieście...\nPostaramy się również odpowiedzieć na wszelkie związane z tym tematem pytania.\nZapraszamy zarówno dzieci jak i dorosłych.",
    id: "6e984fbd-1282-4e8e-8e3c-1b52f184365e",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T12:00:00.000+02:00",
        id: "7368eb6e-6547-4df4-8e52-5a4786abf958",
      },
      {
        dateStart: "2024-07-31T18:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "b1fc21ea-f560-4f1e-ae77-2c8c484dbd3a",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T12:00:00.000+02:00",
        id: "01661d71-c69d-493e-819f-9d1d1456f8f6",
      },
      {
        dateStart: "2024-08-01T18:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "9c6edc1e-5323-444f-ad0e-b95af8034b9d",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T12:00:00.000+02:00",
        id: "46027880-d616-419b-a6fa-6aa11e2e1d58",
      },
      {
        dateStart: "2024-08-02T18:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "66592506-a7c7-47eb-a9c2-152411651d1a",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T12:00:00.000+02:00",
        id: "e0c52db6-2801-4aee-8aae-ff2e465448c9",
      },
      {
        dateStart: "2024-08-03T18:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "9528e917-ac6c-400e-89f9-7afa5149cf42",
      },
    ],
  },
  {
    event: "Chodź, pomaluj mój kosmos\nPolskie Towarzystwo Astrobiologiczne",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Wyobrażenia o nowym życiu, odległych planetach i galaktykach mogą stać się czymś więcej, niż tylko marzeniem. Razem z nami złap pędzle i pokoloruj płótno tworząc z niego obraz, który pokaże, że wizja "Nowego Świata" stanie się rzeczywistością! Nasze wspólne dzieło nie tylko będzie cieszyć oczy, ale również pomoże innym w realnej przemianie ich świata na lepsze, stając się jednym z przedmiotów wystawionych na aukcji WOŚP.',
    id: "f55eaa5c-01ad-44c8-b6ee-cd3bdbdd2577",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "c2f107a1-17c0-4980-aba4-b7bfa7e67cc9",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "833c0c6f-9de3-433e-81d0-2a110c07a805",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "ea403284-308d-47cd-97ea-e3ea35a61afd",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "2bad23d7-a24e-4f4d-9848-212c441b4047",
      },
    ],
  },
  {
    event:
      'Punkt konsultacyjny "Zapytaj Inspektora"\nPaństwowa Inspekcja Pracy Okręgowy Inspektorat Pracy w Szczecinie oddział w Koszalinie',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Państwowa Inspekcja Pracy - Okręgowy Inspektorat Pracy w Szczecinie przygotował dla uczestników Polandrock festiwal 2024 szeroką ofertę porad i atrakcji -punkt konsultacyjny „Zapytaj Inspektora” w którym uzyskasz odpowiedzi na każde pytanie z zakresu prawa pracy, - sprawdzisz poprawność zatrudnienia - sprawdzisz poprawność swojej umowy o pracę - dowiesz się jak pracować i zatrudniać legalnie w ramach programu „Legitna praca”, - poznasz aktualne oferty zatrudnienia w Okręgowym Inspektoracie Pracy w Szczecinie - w wyznaczonych godzinach będziesz miał okazję wysłuchać krótkich prezentacji podczas których w pigułce przekażemy ci informacje o znowelizowanych przepisach, pracy zdalnej, kontroli trzeźwości w miejscu pracy, Work Life Balance - otrzymasz od nas darmowe wydawnictwa w których w przystępnej formie przedstawimy prawne wytyczne dla danej branży lub dziedziny prawa pracy, - zagadki z zakresu BHP i podstaw prawa pracy z nagrodami, - koło fortuny z nagrodami, - filmy informacyjne, - dla najmłodszych uczestników festiwalu gry i kolorowanki edukacyjne, zagadki o bezpieczeństwie z nagrodami, - pogadanki o bezpieczeństwie na wsi",
    id: "c8cef79a-c693-49db-97cf-4c9f54c282e7",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T18:00:00.000+02:00",
        id: "68d10fa7-6ea3-41a4-bd99-70dfcde3ebf2",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "99bca1b4-f76b-4011-9fae-189bc3b3ec34",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "5d30bd57-3a9b-4354-bb27-9b8f2e3fe465",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "924a55dd-8017-4d10-9c23-2d946b3208be",
      },
    ],
  },
  {
    event: "Stanowisko plastyczne dla najmłodszych.\nKrajowa Rada Komornicza",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy wszystkie dzieci - te młodsze i te starsze na nasze stanowisko plastyczne. Zapewnimy Wam dużo kolorów i uśmiechu.",
    id: "dcfeee0d-9c98-4c9a-a624-a836bf76205e",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T19:00:00.000+02:00",
        id: "444ed681-4749-49a0-99b1-3bb573529f17",
      },
    ],
  },
  {
    event:
      'Punkt Konsultacyjny ds. Uzależnień na Pol’and’Rock Festival 2024\nGórnośląskie Stowarzyszenie "Familia"',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Punkt Konsultacyjny ds. Uzależnień na Pol’and’Rock Festival 2024, w ramach którego oferujemy konsultacje, działania informacyjno – edukacyjne oraz działania interwencyjne związane z problematyką uzależnień.",
    id: "e3265ec2-edae-4e90-8231-3ef2cb9ff3de",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "c6f374ba-53e2-456f-ae9d-43e20a6c659b",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "ca856aab-25ad-47eb-bcd7-2cc641c007f4",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "b88b2f23-26ea-4327-a1aa-e944293fc900",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "22f0d1f5-0f3a-4ba4-9419-f4a303cfc81c",
      },
    ],
  },
  {
    event:
      'Punkt info o Żywej Bibliotece\nFundacja na Rzecz Grup Dyskryminowanych "Fala Równości"',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zespół koordynujący Sieć Żywa Biblioteka Polska, Koordynatorki Regionalne, organizatorki i organizatorzy Żywych Bibliotek, jak również Żywe Książki opowiedzą o metodzie edukacji o prawach człowieka, jaką jest Żywa Biblioteka. \n\nŻywa Biblioteka to międzynarodowy ruch promujący prawa człowieka i dialog społeczny. Od 2007 roku jest obecna w Polsce.\n\nPodobnie jak w prawdziwej bibliotece, Czytelnik_czka Żywej Biblioteki może wybierać z całego szeregu tytułów. Różnica polega na tym, że książkami są tu ludzie, a zamiast czytania jest rozmowa. Czytelnik_czka, który przychodzi do Żywej Biblioteki, rejestruje się i dostaje kartę biblioteczą. Następnie zapoznaje się z Katalogiem dostępnych tytułów Żywych Książek – ludzi reprezentujących grupy, z którymi związane są stereotypy i uprzedzenia. Wybór Żywych Książek jest odpowiedzią na aktualne potrzeby danej społeczności i opiera się na lokalnym kontekście.",
    id: "8015fdbf-2c26-40e1-a463-864affe226ea",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T18:00:00.000+02:00",
        id: "b19e4f59-de49-42c7-9066-696b963d7029",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "d14a4358-d9d1-4f54-a303-76daa9f34cf3",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T17:00:00.000+02:00",
        id: "2f3058b1-3a56-4259-a22d-3e4d010dc6d2",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "38118916-a7a5-477e-b863-5030ab84ffab",
      },
    ],
  },
  {
    event:
      '„Strefa pełna energii" Gry i zabawy\nVIESSMANN SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy wszystkich Uczestników Festiwalu do namiotu Viessmann po dodatkową dawkę rozrywki!\nStół pingpongowy - dla fanów dynamicznej rywalizacji!\nStacja ładowania komórek-rowery - naładujcie swoje telefony, pedałując!\nLotki magnetyczne - sprawdźcie swoje umiejętności celowania.\nSzachy - rozegrajcie partyjkę w relaksującej atmosferze.",
    id: "b6d6593e-f5cf-455c-b6cf-c97556c230f1",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "c4848438-8893-4928-afc1-581254123983",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "0dcd6b1c-1126-420d-847d-ae0a1c95a772",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "90922692-113d-4595-9210-f9a5d8c27ec0",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "24671269-7319-4371-9a17-5ee3ff154a7d",
      },
    ],
  },
  {
    event: "Stop Smog Car\nVIESSMANN SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Firma Viessmann nie tylko dostarcza kompletne i ekologiczne systemy dla domów, ale również aktywnie walczy ze smogiem. Stop SMOG Car Viessmann to specjalny samochód wyposażony w powietrzną pompę ciepła, nowoczesny kocioł gazowy, panele fotowoltaiczne i oczyszczacz powietrza. Zapraszamy Uczestników po dawkę wiedzy z zakresu energetyki!",
    id: "ef087bc6-e6d2-4e43-bce9-205b98ac207c",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T15:00:00.000+02:00",
        id: "ea83071d-6d60-4b77-a91c-c6c2208a930b",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T15:00:00.000+02:00",
        id: "91dd139b-916a-4ff6-8de9-535dcae712d0",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T15:00:00.000+02:00",
        id: "77a7da2d-12a3-4f15-8e9f-d0b5481bb1e7",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T15:00:00.000+02:00",
        id: "c3c551de-3187-4876-b1c7-46731db56989",
      },
    ],
  },
  {
    event: "Prowadzenie punktu IT\nGmina Czaplinek",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'W punkcie Informacji Turystycznej dostępne będą szczegółowe informacje dotyczące atrakcji gminy Czaplinek. Odwiedzający dowiedzą się, jak aktywnie spędzić czas, które miejsca warto odwiedzić, gdzie można przenocować oraz uzyskają odpowiedzi na wszelkie pytania związane z turystyką. Na naszym stoisku będzie można otrzymać następujące materiały:\n\nUlotka "Czaplinek Przystań na dłużej" dla osób chcących spędzić interesujący czas w naszej gminie i poznać najważniejsze atrakcje.\n"Spacerkiem po Czaplinku" opisująca 6 tras spacerowych po ulicach Czaplinka, które pomogą dotrzeć do najciekawszych i najpiękniejszych miejsc.\n"Przewodnik rowerowy po Gminie Czaplinek" zawierający opisy 4 szlaków rowerowych o różnej długości i stopniu trudności.\n"Jezioro Drawsko Przewodnik dla Wodniaków" wraz z mapą jeziora Drawsko, opisujący zatoki jeziora oraz propozycje aktywnego wypoczynku nad tym drugim co do głębokości jeziorem w Polsce.\n"Opowieści jezior i wzgórz" zawierające gawędy i legendy autorstwa lokalnej pisarki, zilustrowane przez miejscową artystkę, które przybliżają historię ziem czaplineckich.\n"Szlakiem Gotów" opisująca wyprawę do kamiennych kręgów - odkrycia archeologicznego ostatnich lat.\n"Szlak Templariuszy" przedstawiająca obiekty związane z Templariuszami.\n"Mapa Gminy Czaplinek" zawierająca plan miasta i mapę gminy, ułatwiającą orientację w terenie, oraz mapę "Wypoczywaj Aktywnie" z informacjami o dostępnych formach aktywnego wypoczynku.\nDodatkowo, będziemy rozdawać gadżety promocyjne z logo gminy, takie jak notesy, długopisy, naklejki, breloki nietonące dla żeglarzy oraz breloki w kształcie rowerka.\n\nWszystkie te atrakcje będą dostępne pod namiotem, obok którego zorganizujemy przestrzeń z leżakami, gdzie można będzie odpocząć. Stoisko zostanie wyposażone w lady, ściankę promocyjną oraz windery z logo gminy.',
    id: "97a4e080-b825-41c4-88c9-98065cfba41c",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "978c4937-71e9-4fc4-b745-dd28ef021d67",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "77108416-39cc-4b03-8cdf-62aaf6282bc4",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "0b7a7998-642e-4c8a-a29f-9b2dcc3c8329",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "84328f1c-121b-4aa7-a5d9-d1b75bc150a9",
      },
    ],
  },
  {
    event: "Mistrzostwa w Grę Planszową Pol'and'Rock\nPHALANX",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy serdecznie na VII Otwarte Mistrzostwa Pol'and'Rock: Gra Planszowa! To wyjątkowe wydarzenie towarzyszy 30. Festiwalowi Pol'and'Rock, a my zachęcamy do uczestnictwa w tej pasjonującej rozgrywce. Finał odbędzie się 3 sierpnia, zaś same eliminacje będą trwać przez cały czas trwania festiwalu od 31.07 do 03.08! Czym jest Pol'and'Rock: Gra Planszowa? To niepowtarzalne doświadczenie, przenoszące Was w serce festiwalu tętniącego wolnością, pokojem, miłością i przyjaźnią. Stwórzcie unikatową planszę, korzystając z modularnych kafli z kultowymi Miejscówkami, przemieszczajcie się po terenie Pol'and'Rocku, wykonujcie różnorodne akcje, gromadźcie Gości i zdobywajcie Wspomnienia! Kto z Was stworzy najpiękniejszą historię?\nSzczegóły i zapisy",
    id: "374c8d33-d73c-4c66-8f1d-b7a03729d318",
    instances: [
      {
        dateStart: "2024-07-31T10:00:00.000+02:00",
        dateEnd: "2024-07-31T21:00:00.000+02:00",
        id: "986107cf-a97a-4287-a6f6-4a4b09cf49c5",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T19:00:00.000+02:00",
        id: "05650d67-7b94-427a-95ad-af3776786e0b",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T19:00:00.000+02:00",
        id: "7f95d339-793a-46e9-9f9d-c861d7074098",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T19:00:00.000+02:00",
        id: "51f5c390-66db-4f85-aba4-1d8c8f2e3d68",
      },
    ],
  },
  {
    event:
      "Wschodnie sposoby na długowieczność -  warsztaty akupresury\nStowarzyszenie MAYE",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Kiedy mądrość Wschodu puka do drzwi Zachodu, żeby przekazać nam jak w prosty sposób, możemy sami stosować techniki medycyny chińskiej i akupresury, aby nasze utrzymać ciało w zdrowiu i harmonii. Zapraszamy do Wioski Beztroskiej!",
    id: "6412fd18-a28f-4c6c-8cab-a519210a8060",
    instances: [
      {
        dateStart: "2024-07-31T10:20:00.000+02:00",
        dateEnd: "2024-07-31T11:00:00.000+02:00",
        id: "3af095fc-1c19-4488-810f-d6a9089474a3",
      },
      {
        dateStart: "2024-08-01T10:20:00.000+02:00",
        dateEnd: "2024-08-01T11:00:00.000+02:00",
        id: "86d42904-8151-4c49-a4ea-8b40ae65dccd",
      },
      {
        dateStart: "2024-08-02T10:20:00.000+02:00",
        dateEnd: "2024-08-02T11:00:00.000+02:00",
        id: "54b112a2-d4ae-4119-b327-eeaa7294c44a",
      },
      {
        dateStart: "2024-08-03T10:20:00.000+02:00",
        dateEnd: "2024-08-03T11:00:00.000+02:00",
        id: "d8f00821-62df-4d9f-9998-5113f62e10d6",
      },
    ],
  },
  {
    event:
      "Tor przeszkód na wózkach\nFundacja Avalon Bezpośrednia Pomoc Niepełnosprawnym",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Pokonanie toru przeszkód na ogół jest dużym wyzwaniem. Jednak pokonanie tego samego toru w perspektywie osoby poruszającej się na wózku, jest zupełnie innym, bardziej wymagającym ćwiczeniem. Do skorzystania z aktywności serdecznie zapraszamy wszystkich tych, którzy chcieliby sprawdzić swoje umiejętności oraz zmierzyć się z takimi wyzwaniami jak krawężniki czy nierówności. Przeszkody na torze będą imitować bariery architektoniczne, które codziennie na swojej drodze muszą pokonywać tzw. wózkersi. Cały przejazd będzie odbywać się w bezpiecznych warunkach, pod okiem wykwalifikowanych fizjoterapeutów, którzy na co dzień pracują z beneficjentami Fundacji Avalon.",
    id: "8c22faca-b728-4373-b59e-4b3a516f2e62",
    instances: [
      {
        dateStart: "2024-07-31T10:30:00.000+02:00",
        dateEnd: "2024-07-31T13:30:00.000+02:00",
        id: "3f680e1f-918c-4b6d-9854-2ae5e8440634",
      },
      {
        dateStart: "2024-08-01T16:30:00.000+02:00",
        dateEnd: "2024-08-01T19:30:00.000+02:00",
        id: "38271f02-b1b4-47ff-a328-878d4d4322e2",
      },
      {
        dateStart: "2024-08-02T10:30:00.000+02:00",
        dateEnd: "2024-08-02T13:30:00.000+02:00",
        id: "2421569c-f193-4ad7-8ebe-3a591e0f730e",
      },
      {
        dateStart: "2024-08-03T15:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "b5ddb8f2-95cc-4846-9736-9e06cda1c556",
      },
    ],
  },
  {
    event:
      "Makrama\nUniwersyetet Artystyczny im. Magdaleny Abakanowicz w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Warsztaty rękodzielnicze, podczas których poznamy podstawowe sploty w technice makramy. Każda osoba uczestnicząca zapozna się z podstawowymi metodami formowania, wiązania i plecenia sznurków bez użycia igły, drutów, lub szydełka i będzie mogła wykonać własną formę przestrzenną - wiszący kwietnik na doniczkę.",
    id: "268b3abe-0b02-42e1-8ac2-959f21ac862a",
    instances: [
      {
        dateStart: "2024-07-31T10:30:00.000+02:00",
        dateEnd: "2024-07-31T13:00:00.000+02:00",
        id: "7b6b5988-964a-4443-9a48-df460ded3533",
      },
      {
        dateStart: "2024-08-01T10:30:00.000+02:00",
        dateEnd: "2024-08-01T13:00:00.000+02:00",
        id: "a978ed9c-e5c0-4c43-ad33-df42c4e5f91a",
      },
      {
        dateStart: "2024-08-02T10:30:00.000+02:00",
        dateEnd: "2024-08-02T13:00:00.000+02:00",
        id: "70670733-7efd-4d51-bd07-15a3327cbaf2",
      },
      {
        dateStart: "2024-08-03T10:30:00.000+02:00",
        dateEnd: "2024-08-03T13:00:00.000+02:00",
        id: "193b0608-fcd5-41be-b7b8-23c545692957",
      },
    ],
  },
  {
    event:
      "Poczytajki z warsztatami\nMiejska Biblioteka Publiczna im. Galla Anonima",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Spotkania dla rodzin z dziećmi podczas, których będziemy czytać specjalnie wybrane na tą okazję książeczki o tematyce dot. bezpieczeństwa, tolerancji, równości, miłości, przyjaźni. Po literackiej przygodzie, przyjdzie czas na wspólne działania plastyczne. To sposób do rozbudzenia wyobraźni, kreatywności  i twórczości dziecka. Jest to doskonały czas do bycia razem.",
    id: "8261258a-c605-4479-8128-33818f3bb29a",
    instances: [
      {
        dateStart: "2024-07-31T11:00:00.000+02:00",
        dateEnd: "2024-07-31T13:00:00.000+02:00",
        id: "65d35487-729a-4729-b2e2-c6f93e9c0a41",
      },
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T13:00:00.000+02:00",
        id: "9981e91a-f4f0-45a3-be14-a7682c3917b6",
      },
      {
        dateStart: "2024-08-02T11:00:00.000+02:00",
        dateEnd: "2024-08-02T13:00:00.000+02:00",
        id: "da63354b-6dd2-4a5e-b392-9c6b2c20a6fc",
      },
      {
        dateStart: "2024-08-03T11:00:00.000+02:00",
        dateEnd: "2024-08-03T13:00:00.000+02:00",
        id: "3f9ff04c-a189-4068-b8f2-7ffc41059c45",
      },
    ],
  },
  {
    event:
      "Warsztaty dla par budowania relacji – Lepienie róży z gliny\nToastmasters",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Dla par, które mają dobrą relację będzie to przyjemna i pouczająca randka. Dla par w kryzysie refleksja budująca dobrą relację. Oprócz tego, że dowiesz się, zobaczysz, poczujesz jak ważna jest współpraca w relacji będą podstawy lepienia w glinie, ulepicie razem śliczną różę i będziecie się przy tym dobrze bawić. A ze strony Toastmasters będzie można się  przyjrzeć temu czego nie wiedziałem, że nie umiem, a teraz nawet nie wiem, że umiem dzięki Toastmasters w prowadzeniu szkoleń, warsztatów czy wykładów. Warsztat poprowadzi Stanisław Kalicki Coach związków i relacji. Uczy technik tworzenia szczęśliwego życia w związku. Prowadzi warsztaty "Moc Pary dla Pary". Kanclerz Fundacji Już Pomagam, vice prezesem Fundacji Zdrowia ESCO, współzałożycielem Stowarzyszenia na rzecz pomocy dzieciom z chorobam nowotworowymi Pomóż dziecku wyzdrowieć, Stowarzyszenia Krewaktywni.',
    id: "4c004e3a-600f-4c0d-a537-07762965c60f",
    instances: [
      {
        dateStart: "2024-07-31T11:00:00.000+02:00",
        dateEnd: "2024-07-31T12:00:00.000+02:00",
        id: "6d8fac14-1062-461b-bdd6-aab57a291605",
      },
    ],
  },
  {
    event: "Ceramika\nStowarzyszenie MONAR",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zajęcia ceramiczne poprowadzi ekipa z ośrodka Monar w Milejowicach.\nWpadnij i ulep co ci w duszy gra :)",
    id: "6a0ffb73-3d48-4290-adfe-36b95756fb3d",
    instances: [
      {
        dateStart: "2024-07-31T11:00:00.000+02:00",
        dateEnd: "2024-07-31T13:00:00.000+02:00",
        id: "c47645f1-a62e-4a05-938b-43a83f333c07",
      },
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T13:00:00.000+02:00",
        id: "ed3f3612-64ce-4fbf-84e1-0a4030ca686b",
      },
      {
        dateStart: "2024-08-02T11:00:00.000+02:00",
        dateEnd: "2024-08-02T13:00:00.000+02:00",
        id: "da08394f-ad77-42d8-b12b-d82654932000",
      },
      {
        dateStart: "2024-08-03T11:00:00.000+02:00",
        dateEnd: "2024-08-03T13:00:00.000+02:00",
        id: "ad424c92-2d7a-4469-a56b-411afc5c4057",
      },
    ],
  },
  {
    event: "Warsztaty redukcji stresu\nStowarzyszenie MAYE",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Kto z nas nie odczuwa stresu? Stres towarzyszy nam na każdym kroku. Poznaj więc proste techniki, które pomogą Ci wyciszyć się, zrelaksować i poradzić sobie ze stresem życia codziennego, który nas spotyka w różnych sytuacjach życiowych. Nie pozwól, aby stres kontrolował Ciebie - Ty naucz się kontrolować stres! Zarszamy do Wioski Beztroskiej!",
    id: "a12a4360-8e1f-4f6e-811a-56754284380e",
    instances: [
      {
        dateStart: "2024-07-31T11:00:00.000+02:00",
        dateEnd: "2024-07-31T11:40:00.000+02:00",
        id: "ec17367c-0839-4f6e-bfcd-f95b9738fffd",
      },
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T11:40:00.000+02:00",
        id: "ca4b421f-1219-4299-97f5-c0c326290351",
      },
      {
        dateStart: "2024-08-02T11:00:00.000+02:00",
        dateEnd: "2024-08-02T11:40:00.000+02:00",
        id: "b632dd76-a829-4a18-91f7-927eb78c9b45",
      },
      {
        dateStart: "2024-08-03T11:00:00.000+02:00",
        dateEnd: "2024-08-03T11:40:00.000+02:00",
        id: "0d31ddfd-a59f-47e7-a559-b50b63eea0d6",
      },
    ],
  },
  {
    event: "Wkręć z nami rekord Polski!\nKlimas Wkręt-met",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Wkręć z nami rekord Polski!\nod godz. 11:00\n\nNa naszym stoisku w strefie warsztatów ASP:\n- bicie rekordu Polski: wspólne tworzenie wraz z uczestnikami Festiwalu największego obrazu z wkrętów\n- „Sztuka wkręcona” – prezentacja możliwości artystycznego wykorzystania wkrętów podczas warsztatów „Wykręć sobie screw art”;\n- emisja filmów przedstawiających kolejne etapy powstawania dzieła z wkrętów;\n- prezentacja Galerii Klimas art;\n- fotozabawa.",
    id: "a8069637-c974-439a-8b96-5816fd9d51c2",
    instances: [
      {
        dateStart: "2024-07-31T11:00:00.000+02:00",
        dateEnd: "2024-07-31T19:00:00.000+02:00",
        id: "7758ab83-983a-4b49-8377-e5c4f7fc25a2",
      },
    ],
  },
  {
    event:
      "Joga – przepis na zachowanie balansu i energii przez cały dzień\nBiuro Rzecznika Praw Obywatelskich",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Joga – przepis na zachowanie balansu i energii przez cały dzień",
    id: "f30bf258-4412-4bac-bb83-3e5d304adc6a",
    instances: [
      {
        dateStart: "2024-07-31T11:00:00.000+02:00",
        dateEnd: "2024-07-31T11:45:00.000+02:00",
        id: "729b2cd9-397b-4a04-a145-7a0bae510a53",
      },
      {
        dateStart: "2024-08-01T10:30:00.000+02:00",
        dateEnd: "2024-08-01T11:15:00.000+02:00",
        id: "52b28128-1b3b-4bd6-b05e-1fbbeef4ed8d",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T11:00:00.000+02:00",
        id: "14f576d3-28df-46b4-8c97-24d7f598db6c",
      },
      {
        dateStart: "2024-08-02T10:30:00.000+02:00",
        dateEnd: "2024-08-02T11:15:00.000+02:00",
        id: "ab7b5760-b4f9-43d6-9ee3-f0c6652ea7d0",
      },
    ],
  },
  {
    event:
      "Czy to naprawdę więcej niż tylko rugby w kaskach?: Zasady gry w futbol amerykański\nStowarzyszenie Kobiecej Drużyny Futbolu Amerykańskiego - Klub Sportowy Warsaw Sirens",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Te warsztaty, mają na celu odczarowanie jednej z najbardziej dynamicznych gier zespołowych na świecie. Skupimy się na omówieniu podstawowych zasad futbolu amerykańskiego, odkrywając, że jest to sport, który wymaga nie tylko siły, ale także taktyki, strategii i zrozumienia reguł gry. Te warsztaty pomogą ci zrozumieć, jak oglądać i cieszyć się tą ekscytującą grą, pokazując, że futbol amerykański to coś więcej niż "rugby w kaskach". Przyjdź i odkryj tę fascynującą grę razem z nami!',
    id: "9621759b-1ee8-4a5c-b0e1-c33856719a03",
    instances: [
      {
        dateStart: "2024-07-31T11:00:00.000+02:00",
        dateEnd: "2024-07-31T12:00:00.000+02:00",
        id: "42bedbe5-a50b-49ce-9780-ae605cfbb329",
      },
      {
        dateStart: "2024-08-01T13:00:00.000+02:00",
        dateEnd: "2024-08-01T14:00:00.000+02:00",
        id: "79c84825-eef7-47bf-a34f-a71e9b0e568b",
      },
      {
        dateStart: "2024-08-02T15:00:00.000+02:00",
        dateEnd: "2024-08-02T16:00:00.000+02:00",
        id: "8172059c-6edd-475a-8feb-967af14a4f2b",
      },
      {
        dateStart: "2024-08-03T11:00:00.000+02:00",
        dateEnd: "2024-08-03T12:00:00.000+02:00",
        id: "c6da479d-4010-400d-9b24-fe4002d348a7",
      },
    ],
  },
  {
    event:
      "Strefa work-life balance\nVIESSMANN SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Warsztaty : Wyrobić w sobie dobre nawyki – strefa work-life balance\nZapraszamy na aktywny wypoczynek w przestrzeni Viessmann „Strefa pełna energii”\n\nDLA OSÓB POSZUKUJĄCYCH HARMONII CIAŁA I UMYSŁU, DLA PRZYSZŁYCH DOBRYCH NAWYKÓW!. \n\nZadbasz o swoje ciało i umysł biorąc w nich  udział. Zwiększysz mobilność i poprawisz samopoczucie na zajęciach z naszym trenerem.\n\nW programie zajęcia pokazowe form gimnastycznych dla Wszystkich. Zabawa, ruch, weryfikacja sprawności a przede wszystkim wszechstronna aktywność. Nie zabraknie również miejsca na rozwój osobisty i swojej kreatywności podczas warsztatów twórczo-rozwojowych.\n\nTo spotkanie ze sobą pokaże Ci, czego chcesz zaprosić więcej do swojego życia, a co chcesz zostawić, odpuścić, zakończyć – to może być początek mniejszej lub całkiem sporej zmiany w Twoim życiu prywatnym i/lub zawodowym. Zmiany na lepsze po powrocie z Festiwalu!",
    id: "83c1ba98-a595-4572-b05e-95335b00dc9a",
    instances: [
      {
        dateStart: "2024-07-31T11:00:00.000+02:00",
        dateEnd: "2024-07-31T11:30:00.000+02:00",
        id: "b2684bac-f58f-4df1-990a-7da801300106",
      },
      {
        dateStart: "2024-07-31T14:00:00.000+02:00",
        dateEnd: "2024-07-31T14:30:00.000+02:00",
        id: "a0a853af-7510-4b59-b5bd-a38069e8f8a3",
      },
      {
        dateStart: "2024-07-31T16:00:00.000+02:00",
        dateEnd: "2024-07-31T16:30:00.000+02:00",
        id: "e2554844-4a7b-4bf0-bbbf-5b07c519e7f2",
      },
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T11:30:00.000+02:00",
        id: "f10f4dc0-42e8-4f60-977e-4c1aaa87698e",
      },
      {
        dateStart: "2024-08-01T14:00:00.000+02:00",
        dateEnd: "2024-08-01T14:30:00.000+02:00",
        id: "75cce90c-0c19-42d6-bfbd-5bf3dce3801d",
      },
      {
        dateStart: "2024-08-01T16:00:00.000+02:00",
        dateEnd: "2024-08-01T16:30:00.000+02:00",
        id: "2c8f9dd4-2c6a-43f1-bbe8-905ed3ec732d",
      },
      {
        dateStart: "2024-08-02T11:00:00.000+02:00",
        dateEnd: "2024-08-02T11:30:00.000+02:00",
        id: "016ab95a-c970-45f6-aa3a-33888cee2c77",
      },
      {
        dateStart: "2024-08-02T14:00:00.000+02:00",
        dateEnd: "2024-08-02T14:30:00.000+02:00",
        id: "fb70183e-0605-4501-964c-1e55d0f4156b",
      },
      {
        dateStart: "2024-08-02T16:00:00.000+02:00",
        dateEnd: "2024-08-02T16:30:00.000+02:00",
        id: "34f16293-c13e-4bd8-84b0-0628064b6b69",
      },
      {
        dateStart: "2024-08-03T11:00:00.000+02:00",
        dateEnd: "2024-08-03T11:30:00.000+02:00",
        id: "0ed7f871-97b1-4750-a82a-38c5a3d7e743",
      },
      {
        dateStart: "2024-08-03T14:00:00.000+02:00",
        dateEnd: "2024-08-03T14:30:00.000+02:00",
        id: "b8d0c7bf-7e5e-4a26-8408-99766129e450",
      },
      {
        dateStart: "2024-08-03T16:00:00.000+02:00",
        dateEnd: "2024-08-03T16:30:00.000+02:00",
        id: "ec5b4db7-c0a8-405f-8cfa-da1848e8ac4c",
      },
    ],
  },
  {
    event:
      "Graj w NGO! O tym jak skutecznie działać społecznie\nNarodowy Instytut Wolności - Centrum Rozwoju Społeczeństwa Obywatelskiego",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Jest to połączenie warsztatu, quizu i sesji Q&A z ekspertami zajmującymi się na co dzień wspieraniem organizacji społecznych. Dowiesz się jak skutecznie działać społecznie, jak przekuć pomysł w projekt oraz jak ubiegać się o jego finansowanie. W ramach warsztatów odbędą się także:\n•\tKonkurs Wiedzy: quiz wiedzy o trzecim sektorze, organizacjach pozarządowych, naszych działaniach etc. będą odpowiadać na pytania i za poprawne udzielenie odpowiedzi wygrywać nagrody (nasze gadżety). \n•\tKonkurs na mini projekt społeczny. Zachęcimy was do zastanowienia się nad problemami i potrzebami, z którymi spotykacie się na co dzień w swoim miejscu zamieszkania. Najciekawsze rozwiązania tych problemów, otrzymają nie tylko nagrody, ale i podpowiedzi jak dane pomysły zrealizować.\nWarsztaty realizowane przez NIW-CRSO.",
    id: "aa3195fe-0f84-4562-b35f-4dfdfd5b4bb5",
    instances: [
      {
        dateStart: "2024-07-31T11:00:00.000+02:00",
        dateEnd: "2024-07-31T12:00:00.000+02:00",
        id: "7795779b-2995-4e7a-82dd-a6122e9e30f8",
      },
      {
        dateStart: "2024-07-31T13:00:00.000+02:00",
        dateEnd: "2024-07-31T14:00:00.000+02:00",
        id: "5ee342e1-8f92-44a9-a8a2-70def87689e8",
      },
      {
        dateStart: "2024-07-31T15:00:00.000+02:00",
        dateEnd: "2024-07-31T16:00:00.000+02:00",
        id: "46da1127-d4d5-412c-85c8-85d7913361d4",
      },
    ],
  },
  {
    event: "Dobrego popołudnia :)\nKlimas Wkręt-met",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Dobrego popołudnia :) Od 16.00: - strefa chilloutu z możliwością zagrania z proste gry towarzyskie, jak np. mega Jenga; - dobrego popołudnia: prezentacja „Bajek, które nie istniały”, niezwykłej książki wydanej przez Klimas Wkręt-met, a stworzonej i zilustrowanej przez dzieci.",
    id: "6d9c8ece-c13b-49ba-af4b-88dc069132ad",
    instances: [
      {
        dateStart: "2024-07-31T11:00:00.000+02:00",
        dateEnd: "2024-07-31T19:00:00.000+02:00",
        id: "192b49a2-6937-4c23-8212-e6753c677753",
      },
    ],
  },
  {
    event: "Speed Friending time!\nStowarzyszenie Otwarte Klatki",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Speed Friending time! (introwertycy nie bójcie się, będzie słoiczek z zestawem randomowych pytań)\nNa czym polega Speed Friending? To format wywodzący się bezpośrednio ze speed datingu, ale nastawiony na budowanie relacji koleżeńskich. Osoby biorące udział w zabawie są dobierane w pary i mają ok. 5 minut by się poznać.",
    id: "01c5f07a-9b32-44d7-a09b-e073a71b0e42",
    instances: [
      {
        dateStart: "2024-07-31T11:00:00.000+02:00",
        dateEnd: "2024-07-31T12:00:00.000+02:00",
        id: "effb8f6b-40f4-426d-9fdd-5a13313e5781",
      },
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T12:00:00.000+02:00",
        id: "67cf0ca4-c523-4cd6-8c30-a1ebfff301a9",
      },
      {
        dateStart: "2024-08-02T11:00:00.000+02:00",
        dateEnd: "2024-08-02T12:00:00.000+02:00",
        id: "7393157f-316b-41cb-804c-288ece084c74",
      },
    ],
  },
  {
    event:
      "Wyzwanie Handbike\nFundacja Avalon Bezpośrednia Pomoc Niepełnosprawnym",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Na stoisku Fundacji Avalon będzie można spróbować swoich sił na handbike’u – specjalnym „rowerze”, który różni się od klasycznego roweru sposobem napędzania. Aby ruszyć kołem, należy pedałować… rękoma! W ramach tej aktywności przewidzieliśmy codzienną rywalizację. Wszystkie wyniki będą zapisywane, co pozwoli wyłonić parę zwycięzców – mistrzów Pol’and’Rock Festival, którzy wykręcili najlepszy czas.",
    id: "c39a3802-d343-42f1-bbd9-d1a3de98148d",
    instances: [
      {
        dateStart: "2024-07-31T11:00:00.000+02:00",
        dateEnd: "2024-07-31T15:00:00.000+02:00",
        id: "524cf51d-9e56-4772-9275-636aebaafea8",
      },
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T15:00:00.000+02:00",
        id: "1af1f1d3-1847-4887-895a-440f8b6ac811",
      },
      {
        dateStart: "2024-08-02T10:30:00.000+02:00",
        dateEnd: "2024-08-02T13:30:00.000+02:00",
        id: "66b8dceb-c71c-4a32-a832-245b28729711",
      },
      {
        dateStart: "2024-08-03T10:30:00.000+02:00",
        dateEnd: "2024-08-03T13:30:00.000+02:00",
        id: "429f5fa9-da27-4ef8-b275-d23b097e43af",
      },
    ],
  },
  {
    event: "Trening dobrej rozmowy\nFundacja Nowej Wspólnoty",
    place: "Namiot Warsztatowy ASP",
    kind: "Warsztat",
    description:
      "Trening dobrej rozmowy to warsztaty z praktycznych umiejętności rozmawiania na sporne tematy, m.in. o klimacie, tożsamości czy patriotyzmie. Osoby uczestniczące nauczą się: aktywnego słuchania, empatycznego zadawania pytań, wyrażania własnego zdania w poszanowaniu cudzych poglądów, radzenia sobie z emocjami, gdy słyszymy odmienne poglądy. \nTrening prowadzą jedna lub dwie osoby facylitujące, ćwiczenia odbywają się w małych grupach i w parach, pokazują, jak poprowadzić dobrą rozmowę w codziennych sytuacjach – w pracy, ze znajomymi, w rodzinie. Trening rozpoczyna się od pytania otwierającego, a każde kolejne ćwiczenie pogłębia wybrany temat i pozwala doświadczyć nowej jakości rozmowy, w której jest miejsce dla wszystkich.",
    id: "05df17ad-4450-45bb-9c7b-917015577410",
    instances: [
      {
        dateStart: "2024-07-31T11:00:00.000+02:00",
        dateEnd: "2024-07-31T13:00:00.000+02:00",
        id: "2a229df8-d92e-4c07-9b7d-c2bd9d3288e7",
      },
    ],
  },
  {
    event:
      "Warsztaty: Zabawa, Kreatywność i Rozwój!\nBody&Mind Edukacja Rozwój Aktywność Marzena Gajlewicz",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy wszystkie dzieci i dorosłych na wyjątkowe warsztaty, które łączą zabawę z twórczym rozwojem! Przygotowaliśmy wiele atrakcji, w tym tworzenie mega baniek mydlanych, dynamiczne gry ruchowe, rozwijające gry umysłowe i planszowe oraz twórczą rozrywkę. Nasze zajęcia nie tylko bawią, ale także stymulują umysł, rozwijają połączenia nerwowe i wzmacniają plastyczność umysłową. Jest to również okazja do nauki gry w szachy. To doskonały moment dla wszechstronnego rozwoju, odkrywania talentów i spędzenia czasu w radosnej, inspirującej atmosferze. Dorośli także mogą brać udział w naszych zajęciach, czerpiąc radość z wspólnej zabawy i twórczego działania. Zapewnij sobie i swojemu dziecku niezapomniane przeżycia, pełne zabawy i kreatywności! Dołącz do nas i przekonaj się, jak wiele radości może przynieść rozwijanie umiejętności przez zabawę!",
    id: "d64192e1-edf1-4477-96db-85d1d62133f4",
    instances: [
      {
        dateStart: "2024-07-31T11:00:00.000+02:00",
        dateEnd: "2024-07-31T13:00:00.000+02:00",
        id: "0039e48d-0d0a-42ed-baf4-8325abced17a",
      },
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T13:00:00.000+02:00",
        id: "1d9a12fc-f609-4c69-ad6f-89c1b91df43f",
      },
      {
        dateStart: "2024-08-02T11:00:00.000+02:00",
        dateEnd: "2024-08-02T13:00:00.000+02:00",
        id: "1dd9474f-2132-4a59-bd29-b595f63476f0",
      },
      {
        dateStart: "2024-08-03T11:00:00.000+02:00",
        dateEnd: "2024-08-03T13:00:00.000+02:00",
        id: "53391921-d07a-459f-baf7-22ebf28c8841",
      },
    ],
  },
  {
    event:
      "Czego nie nauczą Cię w szkole, czyli edukacja finansowa dla najmłodszych\nCelina Wojciechowska Finanse i Ubezpieczenia",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Serdecznie zapraszamy na warsztaty pt. "Czego nie nauczą Cię w szkole, czyli edukacja finansowa dla najmłodszych". Warsztaty te są skierowane do dzieci i młodzieży, które pragną zdobyć praktyczną wiedzę na temat finansów, zarządzania pieniędzmi oraz oszczędzania. \n\nCele warsztatów: \n1.Wzbudzenie zainteresowania finansami: \nCelem jest wzbudzenie ciekawości i zainteresowania tematyką finansową wśród najmłodszych uczestników. \n2. Praktyczna wiedza: \nPrzekazanie praktycznych umiejętności zarządzania pieniędzmi, które dzieci i młodzież będą mogły wykorzystać w codziennym życiu. \n3. Świadomość finansowa: \nUświadomienie uczestnikom znaczenia świadomego podejścia do finansów i oszczędzania od najmłodszych lat. \n\nProgram warsztatów: \n1. Wprowadzenie do finansów: \nKrótka prezentacja na temat roli pieniędzy w codziennym życiu.\nOmówienie podstawowych pojęć finansowych: dochód, wydatek, oszczędności, inwestycje. \n2. Skąd się biorą pieniądze?:\nPrzedstawienie różnych źródeł dochodu.\nOmówienie roli pracy i przedsiębiorczości w zarabianiu pieniędzy. \n3. Planowanie budżetu: \nĆwiczenia na temat tworzenia prostego budżetu.\nRozmowa o znaczeniu planowania wydatków i oszczędności. \n4. Oszczędzanie i cele finansowe:\nPraktyczne porady na temat oszczędzania pieniędzy.\nTworzenie listy celów finansowych i omówienie, jak do nich dążyć. \n5. Bezpieczeństwo finansowe: \nOmówienie podstaw bezpieczeństwa finansowego, w tym oszczędzania na "czarną godzinę". \nRozmowa o unikaniu długów i rozważnym korzystaniu z kredytów. \n6. Praktyczne ćwiczenia i gry edukacyjne: \nGry i ćwiczenia, które pomogą uczestnikom lepiej zrozumieć zagadnienia finansowe. \n7. Podsumowanie i pytania: \nPodsumowanie najważniejszych wniosków z warsztatów. \nCzas na pytania i odpowiedzi, aby rozwiać wszelkie wątpliwości uczestników. \n\nKorzyści dla uczestników: \n• Zdobycie praktycznej wiedzy finansowej, której nie uczą w szkole.\n• Rozwój umiejętności zarządzania pieniędzmi, które będą przydatne przez całe życie. \n• Zwiększenie świadomości finansowej i nauka odpowiedzialnego podejścia do finansów.',
    id: "85fc9915-93df-4484-8a44-d78b59a9343b",
    instances: [
      {
        dateStart: "2024-07-31T11:00:00.000+02:00",
        dateEnd: "2024-07-31T12:30:00.000+02:00",
        id: "3b319d5f-2ee6-4341-b09c-dd7f55df655c",
      },
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T12:30:00.000+02:00",
        id: "bc3c8ab2-fb8b-47bd-a2d8-24dd227d45e8",
      },
      {
        dateStart: "2024-08-02T11:00:00.000+02:00",
        dateEnd: "2024-08-02T12:30:00.000+02:00",
        id: "1687376e-cd91-470f-8fa4-7ef4ef6586a6",
      },
      {
        dateStart: "2024-08-03T11:00:00.000+02:00",
        dateEnd: "2024-08-03T12:30:00.000+02:00",
        id: "7d38bd5e-514f-4ed2-a70e-8a1ae8176e2d",
      },
    ],
  },
  {
    event: "Żonglerka\nFundacja Rozwoju Społecznego SPINACZ",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Żonglerka dla początkujących!\nPodczas warsztatów przekonasz się, że żonglowanie jest fajne i jest dla każdego. Zapraszamy do nas wszystkich, którzy chcieliby nauczyć się żonglować 3 piłkami :) Dla osób, które już potrafią, nasze warsztaty mogą być okazją do podpatrzenia nowych technik uczenia żonglerki innych osób.\nŻonglerka to nie tylko świetna zabawa, ale  poprawia także koncentrację, uczy cierpliwości,  wzmacnia koordynację wzrokowo- ruchową, synchronizuje półkule mózgowe, wzmacnia umiejętności czytania i pisania,  a niektórych nawet relaksuje. Żonglując  poszerzamy  nasze pole widzenia. Żonglerka to nieoceniona gimnastyka dla umysłu. Można się tym chwalić! ;)",
    id: "95c6eb9c-7445-4f2b-8bdc-edc468fc72c0",
    instances: [
      {
        dateStart: "2024-07-31T11:00:00.000+02:00",
        dateEnd: "2024-07-31T12:30:00.000+02:00",
        id: "a5cc074e-bc93-4f8b-b66f-2baddb02752a",
      },
      {
        dateStart: "2024-08-01T18:00:00.000+02:00",
        dateEnd: "2024-08-01T19:30:00.000+02:00",
        id: "0bd9ac9c-2831-4ffb-b250-64d014352de5",
      },
      {
        dateStart: "2024-08-02T13:30:00.000+02:00",
        dateEnd: "2024-08-02T14:30:00.000+02:00",
        id: "28f3b5e0-a073-4583-b263-2d73247b8b50",
      },
      {
        dateStart: "2024-08-03T15:30:00.000+02:00",
        dateEnd: "2024-08-03T17:00:00.000+02:00",
        id: "8c5f228e-072c-4dd7-8f53-11acaf22dfbd",
      },
    ],
  },
  {
    event: "WYSTAWY\nStowarzyszenie Kongres Kobiet",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "- mobilna wystawa nt 100.lecie praw człowieka (roll-upy),\n- Memy Marty Frej nt praw kobiet\n- memy nt definicji zgwałcenia",
    id: "ab7ef29b-f724-4c53-90bf-c42af7c2b01d",
    instances: [
      {
        dateStart: "2024-07-31T11:00:00.000+02:00",
        dateEnd: "2024-07-31T17:00:00.000+02:00",
        id: "93ebee2c-2474-4a63-9277-4d893f17a445",
      },
    ],
  },
  {
    event: "Warsztaty haftu tradycyjnego\nWioska Słowiańska",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Warsztaty haftu tradycyjnego oferują uczestnikom naukę podstawowych technik haftu przekazywanych z pokolenia na pokolenie. Uczestnicy będą mogli praktycznie zastosować zdobyte umiejętności, tworząc własne haftowane dzieła.",
    id: "47bc7137-746f-411e-bac5-02147d7b3997",
    instances: [
      {
        dateStart: "2024-07-31T11:00:00.000+02:00",
        dateEnd: "2024-07-31T13:00:00.000+02:00",
        id: "b4d489ed-0541-4c08-87d2-8ce5a4e18023",
      },
      {
        dateStart: "2024-08-02T11:00:00.000+02:00",
        dateEnd: "2024-08-02T13:00:00.000+02:00",
        id: "5082fc03-ef34-4344-84f5-59693ed1b64c",
      },
    ],
  },
  {
    event:
      "Wymyślaj, nie maluj! Twórz obrazy z sztuczną inteligencją!\nOkręgowa Izba Radców Prawnych w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Warsztaty dla dzieci prowadzone przez radców prawnych w oparciu o technologię AI",
    id: "8d9574ba-7805-4423-bacf-681fc2294b6b",
    instances: [
      {
        dateStart: "2024-07-31T11:00:00.000+02:00",
        dateEnd: "2024-07-31T11:30:00.000+02:00",
        id: "b7c2fa58-01d2-4fb5-8715-96791b6feffb",
      },
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T11:30:00.000+02:00",
        id: "a42f7542-1db1-406b-a84c-13e9a561c8d1",
      },
      {
        dateStart: "2024-08-03T11:00:00.000+02:00",
        dateEnd: "2024-08-03T11:30:00.000+02:00",
        id: "efee5904-81fc-421a-8fa8-bdcb18ec048c",
      },
    ],
  },
  {
    event: "MALOWANIE PRAW CZŁOWIEKA\nStowarzyszenie Amnesty International",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy do malowania plakatów i transparentów na temat praw człowieka, codziennie na inny temat: W ŚRODĘ - w obronie uchodźczyń i uchodźców, \nW CZWARTEK - o Palestynkach i Palestyńczykach w Gazie oraz wzywających do zawieszenia broni, \nW PIĄTEK - o zrównaniu praw osób LGBTI do życia w małżeństwie i założenia rodziny, \nW SOBOTĘ - o (s)prawach kobiet, w szczególności nt. przemocy wobec kobiet i prawa do aborcji. \n\nWasze prace codziennie zawisną na ścianach naszego namiotu i pokażemy je w naszych social-mediach.",
    id: "63ebf354-63ae-43dc-bb72-440a704d761c",
    instances: [
      {
        dateStart: "2024-07-31T11:00:00.000+02:00",
        dateEnd: "2024-07-31T13:00:00.000+02:00",
        id: "414e5a31-e87d-4793-a94d-d2cc304b2e90",
      },
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T13:00:00.000+02:00",
        id: "64ffbc02-7dd7-40ef-b3dc-4f854954e232",
      },
      {
        dateStart: "2024-08-02T11:00:00.000+02:00",
        dateEnd: "2024-08-02T13:00:00.000+02:00",
        id: "ac30ac7a-ffaf-453e-8475-f3dfeeaa7e18",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T12:00:00.000+02:00",
        id: "b8de9d23-dddb-4ab0-83cf-8b33b479d292",
      },
    ],
  },
  {
    event:
      "Odetchnij - świadome oddychanie drogą do zdrowia.\nStowarzyszenie MAYE",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Odetchnij - to warsztaty pranajamy, czyli świadomego oddychania jogicznego. Ponieważ oddech jest podstawą naszego życia watro jest nauczyć się pracować z oddechem. Przyjdź do Wioski Beztroskiej i naucz się oddychać pełną piersią!",
    id: "8b017874-911a-4daf-9e03-b0e9f4ebbaa7",
    instances: [
      {
        dateStart: "2024-07-31T11:10:00.000+02:00",
        dateEnd: "2024-07-31T11:30:00.000+02:00",
        id: "6fd19bba-c0ae-4134-91a7-fed447f7333f",
      },
      {
        dateStart: "2024-07-31T12:30:00.000+02:00",
        dateEnd: "2024-07-31T13:00:00.000+02:00",
        id: "2ed3b9bb-21be-4b63-830a-25d49f18ab3d",
      },
      {
        dateStart: "2024-08-01T11:10:00.000+02:00",
        dateEnd: "2024-08-01T11:30:00.000+02:00",
        id: "c8c19104-ebf9-4414-994e-df93142b6815",
      },
      {
        dateStart: "2024-08-01T12:30:00.000+02:00",
        dateEnd: "2024-08-01T13:00:00.000+02:00",
        id: "e113cea3-beed-4368-b11e-e01b3f8b939d",
      },
      {
        dateStart: "2024-08-02T11:10:00.000+02:00",
        dateEnd: "2024-08-02T11:30:00.000+02:00",
        id: "6b68b6b2-01f8-4e5f-a2bd-0b1677cfba7c",
      },
      {
        dateStart: "2024-08-02T12:30:00.000+02:00",
        dateEnd: "2024-08-02T13:00:00.000+02:00",
        id: "73faf82a-7cb5-4177-9b69-9bf3b790cd2a",
      },
      {
        dateStart: "2024-08-03T11:10:00.000+02:00",
        dateEnd: "2024-08-03T11:30:00.000+02:00",
        id: "cbac3c91-4372-4ec4-b665-929ddbdd3037",
      },
      {
        dateStart: "2024-08-03T12:30:00.000+02:00",
        dateEnd: "2024-08-03T13:00:00.000+02:00",
        id: "c2b93ecd-b4ba-4686-8dd0-63df3eda9d7e",
      },
    ],
  },
  {
    event: "Chilloutowe relaksacje z lawendą i ogórkiem\nStowarzyszenie MAYE",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Chilloutowe relaksacje z lawendą i ogórkiem - czyli festiwalowe SPA i strefa pełnego relaksu. Zapraszamy do Wioski Beztorskiej!",
    id: "5f474476-032e-4b54-8335-cb999574e2c2",
    instances: [
      {
        dateStart: "2024-07-31T11:30:00.000+02:00",
        dateEnd: "2024-07-31T12:30:00.000+02:00",
        id: "5e7e09a5-2d61-487d-8712-eb6af1faa84c",
      },
      {
        dateStart: "2024-07-31T14:00:00.000+02:00",
        dateEnd: "2024-07-31T15:00:00.000+02:00",
        id: "75ea7efc-c633-4ee5-96f4-accb5b9645c1",
      },
      {
        dateStart: "2024-08-01T11:30:00.000+02:00",
        dateEnd: "2024-08-01T12:30:00.000+02:00",
        id: "f379271d-7c3f-4906-99b8-570242b8df45",
      },
      {
        dateStart: "2024-08-01T14:00:00.000+02:00",
        dateEnd: "2024-08-01T15:00:00.000+02:00",
        id: "078b3757-4e14-4451-9c19-fffdcfc79c8f",
      },
      {
        dateStart: "2024-08-02T11:30:00.000+02:00",
        dateEnd: "2024-08-02T12:30:00.000+02:00",
        id: "aa42a96a-f1e0-4198-ada0-d7131b5a31f5",
      },
      {
        dateStart: "2024-08-02T14:00:00.000+02:00",
        dateEnd: "2024-08-02T15:00:00.000+02:00",
        id: "d34fe373-3a12-44e3-a9e7-de61c9fb86da",
      },
      {
        dateStart: "2024-08-03T11:30:00.000+02:00",
        dateEnd: "2024-08-03T12:30:00.000+02:00",
        id: "a04556ae-d87b-4d47-abc1-6b6833b69684",
      },
      {
        dateStart: "2024-08-03T14:00:00.000+02:00",
        dateEnd: "2024-08-03T15:00:00.000+02:00",
        id: "cf07c354-4654-4b6d-871e-518ec0f6bb5c",
      },
    ],
  },
  {
    event: "Prawnicze memory\nOkręgowa Izba Radców Prawnych w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Popularna gra "Memory" oparta o symbolikę prawniczą. Zabawa z nagrodami rzeczowymi',
    id: "d797497e-1a43-4e26-8e4c-46c93b42510c",
    instances: [
      {
        dateStart: "2024-07-31T11:30:00.000+02:00",
        dateEnd: "2024-07-31T12:00:00.000+02:00",
        id: "d6f06288-2438-431c-90b8-a71e3f7c90de",
      },
    ],
  },
  {
    event: "5D\nFundacja Feminoteka",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Szkolenia realizuje fundacja Feminoteka w ramach kampanii „Stand Up. Sprzeciw się molestowaniu w miejscach publicznych”. Kampanię prowadzimy wraz z marką L’Oreal Paris we współpracy z Right To Be (wcześniej Hollaback!), amerykańską organizacją pozarządową specjalizującą się w  walce ze wszystkimi formami molestowania. Proponujemy szkolenie według metody 5D, poprzez którą uczymy, jak  skutecznie reagować na molestowanie seksualne w przestrzeni publicznej.  Podczas szkolenia trenerki Feminoteki uczą, jak reagować, kiedy  doświadczamy molestowania, ale również jak nie pozostać bezradnym  świadkiem/bezradną świadkinią takiej sytuacji i zadbać o bezpieczeństwo  swoje i osoby doświadczającej molestowania.",
    id: "a6a43d6f-5d9d-4f57-ae69-85eaf28330eb",
    instances: [
      {
        dateStart: "2024-07-31T11:30:00.000+02:00",
        dateEnd: "2024-07-31T13:00:00.000+02:00",
        id: "a8d65890-06da-4104-8151-b8121fb80a5c",
      },
      {
        dateStart: "2024-07-31T16:00:00.000+02:00",
        dateEnd: "2024-07-31T17:30:00.000+02:00",
        id: "f4568c8e-83ff-4657-bbf4-456c2ec3385f",
      },
      {
        dateStart: "2024-08-01T16:00:00.000+02:00",
        dateEnd: "2024-08-01T17:30:00.000+02:00",
        id: "4eabc65b-8790-40e8-ba64-17d865f8dbeb",
      },
      {
        dateStart: "2024-08-02T18:00:00.000+02:00",
        dateEnd: "2024-08-02T19:30:00.000+02:00",
        id: "b7d993f2-b5df-4ef2-a4e5-9e66a753d7d7",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T11:30:00.000+02:00",
        id: "2b69cc2b-1a2c-4a7d-aa60-37038710c0fc",
      },
      {
        dateStart: "2024-08-03T18:00:00.000+02:00",
        dateEnd: "2024-08-03T19:30:00.000+02:00",
        id: "f93d5ff9-82ee-4991-a8eb-b34d9c50b3d6",
      },
    ],
  },
  {
    event: "Body Art Painting- malowanie ciała farbami\nStowarzyszenie MAYE",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Przyjdź i pomaluj swoje ciało! Body Art Painting to wyjątkowe warsztaty na których możesz sam sobie zrobić oryginalny "makijaż" całego ciała. Zapraszamy do Wioski Beztroskiej do namiotu ART!',
    id: "d931fa4a-9cb9-489b-a810-05b86110a537",
    instances: [
      {
        dateStart: "2024-07-31T11:30:00.000+02:00",
        dateEnd: "2024-07-31T13:00:00.000+02:00",
        id: "7e2cb65c-b3e9-454c-8112-c62340cceea3",
      },
      {
        dateStart: "2024-08-01T11:30:00.000+02:00",
        dateEnd: "2024-08-01T13:00:00.000+02:00",
        id: "929fdb2f-6788-4cf9-bb22-f9c199f95f1c",
      },
      {
        dateStart: "2024-08-02T11:30:00.000+02:00",
        dateEnd: "2024-08-02T13:00:00.000+02:00",
        id: "fa1b63f2-93fc-4777-a41b-8eb99a0d7802",
      },
      {
        dateStart: "2024-08-03T11:30:00.000+02:00",
        dateEnd: "2024-08-03T13:00:00.000+02:00",
        id: "488fac20-a2ce-4ccc-9346-e4a11c97d429",
      },
    ],
  },
  {
    event:
      "Techniki medytacji relaksacji i automasażu - warsztaty praktyczne\nStowarzyszenie MAYE",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Kto z nas nie odczuwa stresu? Nie pozwól, aby stres kontrolował Ciebie - Ty naucz się kontrolować stres! Proste techniki relaksacji i automasażu pomogą Ci pozbyć się stresu zarówno na platformie fizycznej, emocjonalnej i mentalnej.",
    id: "3c61010d-6884-4638-946f-a05434e37908",
    instances: [
      {
        dateStart: "2024-07-31T11:50:00.000+02:00",
        dateEnd: "2024-07-31T12:40:00.000+02:00",
        id: "c08c3e6d-4d04-4a3f-b211-55e79ea97635",
      },
      {
        dateStart: "2024-08-01T11:50:00.000+02:00",
        dateEnd: "2024-08-01T12:40:00.000+02:00",
        id: "feabec4b-31d4-4e14-99af-39111be49568",
      },
      {
        dateStart: "2024-08-02T11:50:00.000+02:00",
        dateEnd: "2024-08-02T12:40:00.000+02:00",
        id: "084c2490-b684-44e3-b681-57afe07cda22",
      },
      {
        dateStart: "2024-08-03T11:50:00.000+02:00",
        dateEnd: "2024-08-03T12:40:00.000+02:00",
        id: "23e0cbca-8d4c-46ea-a387-a6690689fbf3",
      },
    ],
  },
  {
    event:
      "Strefa “Tatuaże Zamiast Futra” - zrób sobie zmywalny tatuaż\nStowarzyszenie Otwarte Klatki",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description: "Strefa “Tatuaże Zamiast Futra” - zrób sobie zmywalny tatuaż",
    id: "b89494eb-6fa9-4edc-9b61-76b35fd1385c",
    instances: [
      {
        dateStart: "2024-07-31T12:00:00.000+02:00",
        dateEnd: "2024-07-31T14:00:00.000+02:00",
        id: "e85f1f78-9018-4e7a-9639-cf090dad5c6b",
      },
      {
        dateStart: "2024-08-01T12:00:00.000+02:00",
        dateEnd: "2024-08-01T14:00:00.000+02:00",
        id: "61d82955-9807-4fb9-806c-deded40340ec",
      },
      {
        dateStart: "2024-08-02T13:30:00.000+02:00",
        dateEnd: "2024-08-02T15:30:00.000+02:00",
        id: "116874c3-4f3d-4e97-a3ea-f9e25d5526f7",
      },
      {
        dateStart: "2024-08-03T15:00:00.000+02:00",
        dateEnd: "2024-08-03T17:00:00.000+02:00",
        id: "30c6c291-7850-44ea-a778-419747d3980c",
      },
    ],
  },
  {
    event:
      "FAKTY, MITY i JĘZYK OPOWIEŚCI O UCHODŹCACHmity i język opowieści o uchodźcach\nStowarzyszenie Amnesty International",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy do namiotu Amnesty International na warsztat o tym, jak o osobach uchodźczych mówić językiem niedyskryminującym i inkluzywnym, a także jak weryfikować fakty i mity o osobach w drodze.",
    id: "425f01c8-e15e-438f-a737-81c8b8eac79b",
    instances: [
      {
        dateStart: "2024-07-31T12:00:00.000+02:00",
        dateEnd: "2024-07-31T13:00:00.000+02:00",
        id: "c9fc734a-2c26-4205-a235-3d08f9aec51d",
      },
    ],
  },
  {
    event: "Canmagedon\nFundacja RECAL",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Autorski tor przeszkód, test na wytrwałość, który uczy przekraczania własnych granic w stosowaniu się do selektywnej zbiórki puszek aluminiowych, a każda z przeszkód odnosi się do jednego z 9 etapów cyrkularnego życia puszki aluminiowej.",
    id: "a9c1c588-86e1-480e-9070-0dc86c7554cb",
    instances: [
      {
        dateStart: "2024-07-31T12:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "2203dc1c-eaf1-4b2e-9b12-1dc0f8c2e93a",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "3509f22d-b63f-4a3d-a4b6-db0693dc539a",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "773d368b-a044-4cfa-a4a1-2a1caf9e3068",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "0f575385-1c86-4384-9bcd-23ae34209381",
      },
    ],
  },
  {
    event:
      "Strefa Komfortu\nFundacja Avalon Bezpośrednia Pomoc Niepełnosprawnym",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "W Strefie Komfortu Fundacji Avalon, każdy, kto tego potrzebuje, będzie mógł znaleźć odrobinę wytchnienia od festiwalowych dźwięków i emocji. Strefa tworzona jest z myślą o osobach z niepełnosprawnościami, które szukać będą chwili odpoczynku od zgiełku wartkiego, festiwalowego życia.",
    id: "aed18860-7660-4487-94f1-24fcb6acd743",
    instances: [
      {
        dateStart: "2024-07-31T12:00:00.000+02:00",
        dateEnd: "2024-07-31T15:00:00.000+02:00",
        id: "bb4302ce-2cce-4452-8be0-8982c8ea6e80",
      },
      {
        dateStart: "2024-07-31T16:30:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "0a5ad5ff-9c4e-46fd-bd43-09d7c0c28f4e",
      },
      {
        dateStart: "2024-08-01T12:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "1f920537-8791-41b3-8572-6d2e75a65182",
      },
      {
        dateStart: "2024-08-02T12:00:00.000+02:00",
        dateEnd: "2024-08-02T13:30:00.000+02:00",
        id: "fce55438-0d4f-4b12-b7ec-b5a112ee8119",
      },
      {
        dateStart: "2024-08-02T17:30:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "4abe16e8-1bad-45f3-867f-09ff6cff4055",
      },
      {
        dateStart: "2024-08-03T15:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "8451c087-18ef-4cc9-b7fc-95b5daecb0cb",
      },
    ],
  },
  {
    event:
      "Sztuczna inteligencja dla twórców i artystów - prawo autorskie i nowe technologie\nPolska izba rzeczników patentowych",
    place: "Namiot Warsztatowy ASP",
    kind: "Warsztat",
    description:
      'Nowa piosenka Elvisa Presleya, a może "czwarta część trygologii" ;) to wszystko stało się możliwe dzięki AI! Pytanie, jakie problemy prawne się z tym łączą\n\nCzy regulacje prawne AI, nad którymi od kilku lat pracowała UE i w końcu weszły w życie zmieniły cokolwiek w korzystaniu ze sztucznej inteligencji przez szarego użytkownika? Czy w końcu w tej sprawie coś wiemy na pewno? Czy w końcu wiemy, kto jest autorem tego co stworzy AI? A może już wiadomo, jak bezpiecznie z niego korzystać? Czy nasze prawo jest w stanie się przydać do interpretacji problemów z AI? Jakie są ryzyka i co może się stać jeśli użyję AI w swoim utworze?\nRozmawiamy o praktycznych problemach prawnych twórców w zderzeniu z AI i dzielimy się swoimi doświadczeniami! Podziel się swoimi, bo to przecież nie wykład - TO WARSZTATY! Liczymy na Was!',
    id: "95049bf5-7c4e-4b6a-9b34-a76d0396d8d6",
    instances: [
      {
        dateStart: "2024-07-31T12:00:00.000+02:00",
        dateEnd: "2024-07-31T13:00:00.000+02:00",
        id: "8228221e-358b-4601-bedf-1cce357951a7",
      },
    ],
  },
  {
    event:
      "Warsztat „Co chcielibyście wiedzieć o seksie a Wam się (nie)kojarzy”\nTOWARZYSTWO ROZWOJU RODZINY ODDZIAŁ W ZIELONEJ GÓRZE",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Warsztat pt. „Co chcielibyście wiedzieć o seksie a Wam się (nie)kojarzy” dotyczy zagadnień związanych z seksualnością człowieka. Poruszane będą kwestie seksualności kobiet i mężczyzn, rozwoju psychoseksualnego, tożsamości i orientacji psychoseksualnej, normy seksuologicznej w kontekście ludzkich zachowań, promocji zdrowia seksualnego i reprodukcyjnego oraz praw w tym zakresie. Przekazywana będzie wiedza i jednocześnie obalane będą mity związane z kobiecością i męskością, tożsamością i orientacją psychoseksualną, aktywnością seksualną, antykoncepcją. Naukowa wiedza będzie przekazywana z poczuciem humoru w jasny, akceptujący i zrozumiały sposób. Będziemy się także bawić w „seksualne A,B,C” oraz alfabet seksu : )",
    id: "8448d016-2a5e-41b4-aea8-b1ff6c86b808",
    instances: [
      {
        dateStart: "2024-07-31T12:00:00.000+02:00",
        dateEnd: "2024-07-31T13:00:00.000+02:00",
        id: "49ea44cc-329c-4284-a2ae-86d08d173bc9",
      },
      {
        dateStart: "2024-08-01T12:00:00.000+02:00",
        dateEnd: "2024-08-01T13:00:00.000+02:00",
        id: "387e7070-e17c-4846-878e-af50c8483c4d",
      },
      {
        dateStart: "2024-08-02T12:00:00.000+02:00",
        dateEnd: "2024-08-02T13:00:00.000+02:00",
        id: "1f9b01c9-5ed8-4c1c-b676-09a5a68cf6ec",
      },
      {
        dateStart: "2024-08-03T12:00:00.000+02:00",
        dateEnd: "2024-08-03T13:00:00.000+02:00",
        id: "96842960-272f-4829-af7d-b904e7047d54",
      },
    ],
  },
  {
    event: "Prezentacja-Podpis cyfrowy\nCisco Systems Sp. z o.o.",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Podczas prezentacji skupimy się na wyjaśnieniu pojęcia podpisu elektronicznego. W prosty sposób przedstawimy i omówimy zasadę działania i jego główne komponenty.",
    id: "29330c43-af3f-471a-8f95-f122eb48cf48",
    instances: [
      {
        dateStart: "2024-07-31T12:00:00.000+02:00",
        dateEnd: "2024-07-31T12:45:00.000+02:00",
        id: "d1b5bd25-84bf-4813-89fd-3c5786b865be",
      },
      {
        dateStart: "2024-08-01T12:00:00.000+02:00",
        dateEnd: "2024-08-01T12:45:00.000+02:00",
        id: "1a7a3eb6-889e-472a-8af2-b20f50bed127",
      },
    ],
  },
  {
    event:
      'Quiz "Równość Praw - poznaj swoje prawa i obowiązki"\nStowarzyszenie Sędziów Polskich  "Iustitia"',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "quiz prawniczy z nagrodami w trakcie którego możesz sprawdzić swoją wiedzę z praw człowieka i obywała w zakresie równości wobec prawa,  niedyskryminacji, historii praw człowieka w tym zakresie, przyjdź wylosuj pranie, odpowiedz , a potem w loterii wygraj nagodę",
    id: "13402042-2dbd-46ac-9e29-195f3e8ef56a",
    instances: [
      {
        dateStart: "2024-07-31T12:00:00.000+02:00",
        dateEnd: "2024-07-31T13:00:00.000+02:00",
        id: "977cf0e6-4d57-490f-ac8d-82b1149c2f58",
      },
    ],
  },
  {
    event: '"Usoa" - spektakl\nFundacja Banina',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Usoa, czyli Gołąbka, to imię dziewczynki, która przyleciała... z Afryki, z kraju ogarniętego wojną, w którym panował głód i niedostatek. Przyleciała samolotem – bez bagażu, zupełnie sama. Jedyne co miała, to list, który ściskała w dłoniach. Kto go napisał? Do kogo był adresowany? Czy pomoże jej znaleźć dom?\n\nDotychczasowy pokaz przedpremierowy: Szkoła Podstawowa w Helu (czerwiec 2024)\nPlanowane pokazy popremierowe: Akademia Zamojska - mediateka (lipiec 2024), Europejskie Centrum Solidarności w Gdańsku (lipiec 2024),  Pol'and'Rock Festival - strefa warsztatowa Akademii Sztuk Przepięknych (lipiec/sierpień 2024)\nObsada: Kalina Jagieło, Julia Herc, Cezary Dębski",
    id: "6ca96daf-2bd1-46be-9152-f68707b6647c",
    instances: [
      {
        dateStart: "2024-07-31T12:00:00.000+02:00",
        dateEnd: "2024-07-31T14:00:00.000+02:00",
        id: "cc547d0f-ba4b-4a73-a9b1-0913828ba575",
      },
      {
        dateStart: "2024-08-03T12:00:00.000+02:00",
        dateEnd: "2024-08-03T14:00:00.000+02:00",
        id: "2cb2463b-e4d8-4b79-bf98-bbbe1d730f1a",
      },
    ],
  },
  {
    event: "Poranna joga\nAkademia Redukcji Stresu Paweł Gutral",
    place: "Strefa Działań Twórczych ASP",
    kind: "Warsztat",
    description:
      "Joga na stres - połączenie oddechu , pracy z ciałem w łagodnej wersji z rozciąganiem i rozluźnianiem, z pogłębioną relaksacją. To zintegrowanie psychiki i fizyczności na równi z transcendencją (duchowością). Takie kompleksowe działania mogą przyczynić się do lepszego zrozumienia samego siebie, a co za tym idzie lepszego samopoczucia i poradzenia sobie z wyzwaniami życia. Joga na stres jest wspaniałą praktyką redukującą stres.",
    id: "4d6c01da-f3fb-42aa-9d84-2311b887c607",
    instances: [
      {
        dateStart: "2024-07-31T12:00:00.000+02:00",
        dateEnd: "2024-07-31T13:00:00.000+02:00",
        id: "0e35ad2c-6fc5-42e1-8017-648f9c7b4349",
      },
      {
        dateStart: "2024-08-01T09:00:00.000+02:00",
        dateEnd: "2024-08-01T10:00:00.000+02:00",
        id: "ac51db9b-b04d-4f76-bbb7-0556457d6f45",
      },
    ],
  },
  {
    event: "Toastmasters- byłem, jestem, będę\nToastmasters",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Czyli co każdy może nauczyć się, rozwinie dzięki Toastmasters, kto jest lub chce być liderem(-ką), przywódcą(-czynią), kierownikiem(-czką), matką, ojcem, przyjacielem(-ką). I co daje dodatkowo bycie wśród pozytywnie zakręconych ludzi.",
    id: "45b215f5-57d5-44f8-9081-3ca68e2bcef5",
    instances: [
      {
        dateStart: "2024-07-31T12:00:00.000+02:00",
        dateEnd: "2024-07-31T13:00:00.000+02:00",
        id: "e156dd2a-63ba-4211-89e0-f90f3a36e45e",
      },
    ],
  },
  {
    event:
      'Misja "Is There anybody Out There?"\nPolskie Towarzystwo Astrobiologiczne',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Czy jesteśmy sami we wszechświecie? To pytanie zaprząta głowę ludzkości od momentu kiedy jako gatunek zaczęliśmy patrzeć z ciekawością w rozgwieżdżone nocne niebo. Aby odpowiedzieć na tą odwieczną zagadkę wysyłamy misje i łaziki które przekopują podłoże planet z Układu Słonecznego. Jednak nic nie zastąpi człowieka który jest w stanie podjąć właściwą decyzję na miejscu. Takie misje jak wyprawa np. na Księżyc są niebezpieczne i wymagają bardzo dokładnych przygotowań. Podczas tych warsztatów przeprowadzimy krótką symulację takiej wyprawy! \n\nUczestnicy wcielą się w rolę pionierów poszukujących życia na planecie obcej planecie. Jako zespół, pod czujnym okiem prowadzących, festiwalowicze przeprowadzą symulację misji kosmicznej i wyruszą w nieznane na poszukiwanie śladów życia na terenie festiwalu. Druga część warsztatów będzie polegać na przeprowadzeniu prostych analiz terenowo-laboratoryjnych w warunkach polowych. Szykujcie skafandry!\nUWAGA! To czy misja się odbędzie zależy od pogody!",
    id: "208190ec-5aab-41a0-8e12-ad9be118ed59",
    instances: [
      {
        dateStart: "2024-07-31T12:00:00.000+02:00",
        dateEnd: "2024-07-31T14:00:00.000+02:00",
        id: "bc59d963-6d42-4d57-9dd1-404b43a9ddf2",
      },
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T13:00:00.000+02:00",
        id: "56c718d6-4111-4868-b7f2-2b90d463a7f8",
      },
      {
        dateStart: "2024-08-02T11:00:00.000+02:00",
        dateEnd: "2024-08-02T13:00:00.000+02:00",
        id: "f17017e5-9a65-45f7-a11f-6354ac432f30",
      },
      {
        dateStart: "2024-08-03T14:00:00.000+02:00",
        dateEnd: "2024-08-03T16:00:00.000+02:00",
        id: "1c1222f5-ec4a-4068-9209-4f5a705fc0bc",
      },
    ],
  },
  {
    event:
      "Notariusz w ramonesce. O ślubie humanistycznym\nIzba Notarialna w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "W temacie: ślub humanistyczny, notariusz a związki partnerskie, o pełnomocnictwie i testamencie. Wystąpienie i odpowiedzi na pytania.",
    id: "b67c9a7e-3d88-4fd3-9b2e-6db4e5fe2130",
    instances: [
      {
        dateStart: "2024-07-31T12:00:00.000+02:00",
        dateEnd: "2024-07-31T12:55:00.000+02:00",
        id: "8406cd41-054a-43da-87ef-ee8724f4f915",
      },
    ],
  },
  {
    event:
      'Prawa człowieka od podstaw\nFundacja na Rzecz Grup Dyskryminowanych "Fala Równości"',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zajęcia dla osób w wieku 7-10 lat.\nWarsztaty mają na celu wzbudzenie ciekawości u dzieci w zakresie praw dziecka, praw człowieka oraz zaprezentowaniu ich w przystępny sposób przy wykorzystaniu m.in. Powszechnej Deklaracji Praw Człowieka, tekstów literackich i języka NVC (komunikacji bez przemocy). Warsztaty będą prowadzone przez doświadczone edukatorki, pedagożki i trenerki.",
    id: "814efc63-400a-4f09-ae56-c36838708105",
    instances: [
      {
        dateStart: "2024-07-31T12:00:00.000+02:00",
        dateEnd: "2024-07-31T13:00:00.000+02:00",
        id: "83292e62-f7b0-47f2-a3da-278cbb7ec8a9",
      },
      {
        dateStart: "2024-08-01T12:00:00.000+02:00",
        dateEnd: "2024-08-01T13:00:00.000+02:00",
        id: "b4937428-a07d-472a-b381-887b28092ec9",
      },
      {
        dateStart: "2024-08-03T12:00:00.000+02:00",
        dateEnd: "2024-08-03T13:00:00.000+02:00",
        id: "133db770-d605-4c87-8142-6665a792d8c6",
      },
    ],
  },
  {
    event: "OSTEOBUS - badania densytometryczne\nCOGITO MED",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Badania densytometryczne są ukierunkowane na profilaktykę oraz wczesne wykrywanie osteoporozy. Z badania będzie mógł skorzystać każdy, ale jest ono rekomendowane głównie dla kobiet powyżej 40 roku życia oraz mężczyzn powyżej 60 roku życia. Badanie polega na zdjęciu RTG z minimalną dawką promieniowania. Jest ono całkowicie bezpieczne, a wynik pacjent otrzymuje od razu po wykonaniu badania. Badania odbywać się będą w godzinach od 12:00 do 18:00.",
    id: "edf7aaf2-a0bb-4281-9dde-09e18c6e358c",
    instances: [
      {
        dateStart: "2024-07-31T12:00:00.000+02:00",
        dateEnd: "2024-07-31T18:00:00.000+02:00",
        id: "edb08d1d-1af3-4e1b-b2c0-4d874a0ef7f2",
      },
      {
        dateStart: "2024-08-01T12:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "c22fd44f-8bd9-4751-9fd0-9bce71fe63f7",
      },
      {
        dateStart: "2024-08-02T12:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "6f814fe3-d6bb-4d69-bc7b-d75819456c2e",
      },
      {
        dateStart: "2024-08-03T12:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "e6f09651-c6d5-42b2-9084-07e798295df2",
      },
    ],
  },
  {
    event:
      "Gry, zabawy dydaktyczne i konkursy z nagrodami\nBiuro Rzecznika Praw Obywatelskich",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Gry, zabawy dydaktyczne i konkursy z nagrodami. Czas na promocję i edukację w zakresie praw człowieka w aktywny sposób. Stworzone indywidualnie poszczególne gry opierają się na zasadach popularnych gier, jednak zmodyfikowane są tak, aby uczestnicy mogli poznać prawa człowieka od innej strony i sprawdzić swoją wiedzę obywatelską:\n\tPrawo bez tabu\n\tRozwal to – kręgle z hasłami \n\tWieża wartości – pozytywna jenga\n\tKalambury prawnoczłowiecze\n\tObywatelski zawrót głowy – twister z ciekawostkami\n\tO prawie inaczej – puzzle\n\tFamiliada – konkurs drużynowy wiedzy o prawach człowieka\n\t„Twoje prawo brzmi znajomo” – uczestnicy oceniają, który z prawników w najbardziej dostępny sposób przedstawi zagadnienie prawnicze\n\tZgadnij Instytucję – dopasuj instytucję do zagadnienia prawniczego\n\tGra Terenowa – stworzona we współpracy z zaprzyjaźnioną instytucją",
    id: "876b0035-eb99-4ca4-bfe9-80d4fd794d1e",
    instances: [
      {
        dateStart: "2024-07-31T12:00:00.000+02:00",
        dateEnd: "2024-07-31T16:00:00.000+02:00",
        id: "0108056d-ceb9-485f-8b22-fc25285c3d0c",
      },
      {
        dateStart: "2024-08-01T12:30:00.000+02:00",
        dateEnd: "2024-08-01T13:00:00.000+02:00",
        id: "ca898b45-5e1a-4b51-982b-146d6df0f9af",
      },
      {
        dateStart: "2024-08-01T14:30:00.000+02:00",
        dateEnd: "2024-08-01T15:30:00.000+02:00",
        id: "0f03e472-0dbd-4c71-b638-4e9b57b996e7",
      },
      {
        dateStart: "2024-08-01T17:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "e4ba9d07-61d3-4bc4-bdde-9a35fa940ab4",
      },
      {
        dateStart: "2024-08-02T14:30:00.000+02:00",
        dateEnd: "2024-08-02T15:30:00.000+02:00",
        id: "6b82eb25-8a59-4736-b1ba-48715d4af074",
      },
      {
        dateStart: "2024-08-03T12:00:00.000+02:00",
        dateEnd: "2024-08-03T13:00:00.000+02:00",
        id: "9a55d357-44df-4102-8838-2713721771ae",
      },
      {
        dateStart: "2024-08-03T14:30:00.000+02:00",
        dateEnd: "2024-08-03T15:30:00.000+02:00",
        id: "5487ecd5-704a-464a-ac62-f0c27ffdc473",
      },
    ],
  },
  {
    event: "Notariusz w ramonesce\nOkręgowa Izba Radców Prawnych w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "W temacie: ślub humanistyczny, notariusz a związki partnerskie, o pełnomocnictwie i testamencie. Wystąpienie i odpowiedzi na pytania.",
    id: "e542e5d2-045f-4a78-969c-67938197ae2b",
    instances: [
      {
        dateStart: "2024-07-31T12:00:00.000+02:00",
        dateEnd: "2024-07-31T12:55:00.000+02:00",
        id: "9c614180-e964-4e56-a1e5-a75f7f2de45e",
      },
    ],
  },
  {
    event:
      "Aktywności: Escape tele-room, Gry i Zabawy, Quizy z nagrodami\nCisco Systems Sp. z o.o.",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "W ciągu dnia przyjdź na nasze stoisko, gdzie będziemy organizować gry, zabawy, quizy i escape room.",
    id: "5ee7c38b-4550-40a3-a4e3-3358f7f0980b",
    instances: [
      {
        dateStart: "2024-07-31T12:00:00.000+02:00",
        dateEnd: "2024-07-31T16:00:00.000+02:00",
        id: "9a4f26d0-85fa-4fd7-aeac-a21e2e2f93d9",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T14:00:00.000+02:00",
        id: "de0bf1bd-b183-407d-be79-40f05a7848d9",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T14:00:00.000+02:00",
        id: "1959205f-4e52-48b3-bde4-e5c3a0113da5",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T14:00:00.000+02:00",
        id: "97bcdec5-98a2-4769-8da8-2c6fc19b76f9",
      },
    ],
  },
  {
    event: "Efekty gitarowe\nFUNDACJA HACKERSPACE KRAKÓW",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Pewnie wielu z Was ma gitarowego idola, który ma swoje charakterystyczne brzmienie. Ale czy zastanawialiście się, w jaki sposób to osiąga i jakie czynniki mają na to wpływ? Na tych warsztatach dowiecie się jak efekty gitarowe (i nie tylko!) działają od środka, oraz jak możecie wykorzystać je by ubarwić tworzoną przez siebie muzykę, często nawet bez kupowania dodatkowego sprzętu!",
    id: "451228e5-d16b-4d87-828c-c42eb257ef6d",
    instances: [
      {
        dateStart: "2024-07-31T12:00:00.000+02:00",
        dateEnd: "2024-07-31T13:30:00.000+02:00",
        id: "3493234e-cf17-4f7c-a11b-46d91efb1f53",
      },
      {
        dateStart: "2024-08-02T12:00:00.000+02:00",
        dateEnd: "2024-08-02T13:30:00.000+02:00",
        id: "f9b14a17-3972-4628-ae94-73427322ecdb",
      },
    ],
  },
  {
    event: "Gabinet Mobilny - badania przesiewowe\nCOGITO MED",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "W mobilnym gabinecie nasz personel medyczny będzie wykonywał przesiewowe badanie wzroku, które jest bezinwazyjne i wykrywa podstawowe wady wzorku, spirometrię, czyli badanie układu oddechowego oraz przeprowadzona zostanie analiza składu ciała. Do każdego badania uczestnik otrzyma wynik papierowy oraz zostanie on omówiony z naszym wykwalifikowanym personelem. Z badań skorzystać będzie można w godzinach od 12:00 do 18:00.",
    id: "85b8acb0-7d54-45da-a14f-8001b5fc45bc",
    instances: [
      {
        dateStart: "2024-07-31T12:00:00.000+02:00",
        dateEnd: "2024-07-31T18:00:00.000+02:00",
        id: "cb5f8d1e-f084-42c8-895d-e52674ce3099",
      },
      {
        dateStart: "2024-08-01T12:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "cf88b310-11f5-47e1-98f0-823e962c6af6",
      },
      {
        dateStart: "2024-08-02T12:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "d4b53b30-2c5c-48fe-8f84-c7ff317f65dd",
      },
      {
        dateStart: "2024-08-03T12:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "ecd545b9-ea96-43b3-9f60-363c53e22996",
      },
    ],
  },
  {
    event: "Stoisko diagnostyczne\nCOGITO MED",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Nasz personel przy stoisku będzie wykonywał testy z krwi na poziom cukru oraz dla mężczyzn PSA, który wykrywa podwyższony antygen prostaty. Dodatkowo przy stoisku będzie wykonywane ciśnienie  dla wszystkich chętnych osób. Badania te jak i wszystkie inne będą dostępne dla uczestników  w godzinach od 12:00 do 18:00.",
    id: "5c2386c2-af83-4668-bfe8-c41fddb0b2be",
    instances: [
      {
        dateStart: "2024-07-31T12:00:00.000+02:00",
        dateEnd: "2024-07-31T18:00:00.000+02:00",
        id: "fe125805-4bf6-47f4-8a4c-f704db3b2562",
      },
      {
        dateStart: "2024-08-01T12:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "7b97e282-dbc9-46d2-bc5c-8cd04033add3",
      },
      {
        dateStart: "2024-08-02T12:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "bbe729e5-702c-4f70-abf4-230885132d3b",
      },
      {
        dateStart: "2024-08-03T12:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "45650d6e-c716-4088-a96a-9737e7d341a9",
      },
    ],
  },
  {
    event: "Pierwsza Pomoc Psychologiczna\nFundacja eFkropka",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Warsztat ma ułatwić zauważenie  osoby w kryzysie w naszym otoczeniu. W pracy, w szkole, na uczelni i co z tym zrobić. Czy i  jak z nią rozmawiać, co jej proponować. Czy jest się czego bać?",
    id: "5466ccc8-e4e4-45bf-bee6-11a113780bef",
    instances: [
      {
        dateStart: "2024-07-31T12:00:00.000+02:00",
        dateEnd: "2024-07-31T13:00:00.000+02:00",
        id: "df8776e0-10fe-41c7-9965-dec3d7b85370",
      },
      {
        dateStart: "2024-08-02T12:00:00.000+02:00",
        dateEnd: "2024-08-02T13:00:00.000+02:00",
        id: "30c2a22c-f2d5-4b09-ab99-f6e31bb40a7d",
      },
    ],
  },
  {
    event:
      '"Specyfika tzw. "przestępstw seksualnych"\nStowarzyszenie Prokuratorów Lex Super Omnia',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Tematem zajęć związanych z przestępstwami seksualnymi będą zachowania, które obok typowego gwałtu (rozumianego jako stosowanie przemocy wobec ofiary), wyczerpują znamiona przestępstwa. Na przykładach z orzecznictwa sądowego przedstawić zachowania, które realizują znamiona czynu zabronionego. Chcielibyśmy w ich trakcie przybliżyć uczestnikom festiwalu przebieg postępowania związanego z zawiadomieniem o przestępstwie na tle seksualnym, wyjaśnić, dlaczego z reguły są one długotrwałe, a nade wszystko wskazać na prawną i faktyczną ochronę ofiar przestępstw seksualnych z uwzględnieniem wtórnej wiktymizacji.",
    id: "349e780c-bf6c-4e83-8a6c-618fa682ac21",
    instances: [
      {
        dateStart: "2024-07-31T12:30:00.000+02:00",
        dateEnd: "2024-07-31T13:30:00.000+02:00",
        id: "849f64b8-50cd-4c53-808b-7b6448290bee",
      },
    ],
  },
  {
    event: "Umysł na bosaka\nProjekt The Presja- Fundacja Z Wyboru",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Stopy są podstawą kształtowania  sylwetki. Stabilizują nasze ciało i dźwigają jego ciężar. Ponadto nasze stopy mówią wiele o naszym charakterze. Z ich kształtu możemy się też wiele dowiedzieć na temat potencjalnych, charakterystycznych schorzeń. Niestety nie zawsze dbamy odpowiednio o ich zdrowie. Z największą przyjemnością zapraszam na warsztat i  pogawędkę-w programie sekretne życie i tupot małych stópek:  co robić żeby stopom nie szkodzić, co poradzić jak się stresują palczaste twory kończące vs będące początkiem nas samych? Teoria i praktyka otulona uśmiechem.\n\nadresaci: dorośli\nprowadząca: Magdalena Kowalska- psycholożka",
    id: "de237c0c-6c6d-47ca-b53d-50a052852708",
    instances: [
      {
        dateStart: "2024-07-31T12:30:00.000+02:00",
        dateEnd: "2024-07-31T14:30:00.000+02:00",
        id: "d9171da6-ea7e-4a99-8cd3-6026a8380aa7",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T12:00:00.000+02:00",
        id: "5456630a-7f3c-4bcf-9f2a-68cb2cefcd91",
      },
    ],
  },
  {
    event:
      '"Specyfika tzw. przestępstw seksualnych”\nIzba Adwokacka w Warszawie',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Tematem zajęć związanych z przestępstwami seksualnymi będą zachowania, które obok typowego gwałtu (rozumianego jako stosowanie przemocy wobec ofiary), wyczerpują znamiona przestępstwa. Na przykładach z orzecznictwa sądowego przedstawić zachowania, które realizują znamiona czynu zabronionego. Chcielibyśmy w ich trakcie przybliżyć uczestnikom festiwalu przebieg postępowania związanego z zawiadomieniem o przestępstwie na tle seksualnym, wyjaśnić, dlaczego z reguły są one długotrwałe, a nade wszystko wskazać na prawną i faktyczną ochronę ofiar przestępstw seksualnych z uwzględnieniem wtórnej wiktymizacji.",
    id: "473b6d75-9c3a-408e-b419-25681e4791a6",
    instances: [
      {
        dateStart: "2024-07-31T12:30:00.000+02:00",
        dateEnd: "2024-07-31T13:30:00.000+02:00",
        id: "6265b1ab-e231-4c7d-b3ef-ecd36ecd35de",
      },
    ],
  },
  {
    event: "Medytacja co daje i jak zacząć warsztaty\nStowarzyszenie MAYE",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Może od dawna myślisz, że dobrze byłoby spróbować medytacji, ale nigdy nie masz na to czasu... Jeśli chcesz nauczyć się medytacji - to te warsztaty z pewnością są dla Ciebie! Będzie dużo praktycznych informacji, po co, jak i dlaczego - zwięźle i na temat - szczypta teorii i dużo praktyki!",
    id: "b96fdae7-f7fc-4a9c-b148-d4ea0bcbacc4",
    instances: [
      {
        dateStart: "2024-07-31T12:40:00.000+02:00",
        dateEnd: "2024-07-31T13:30:00.000+02:00",
        id: "908b54a9-972e-49b2-b461-badba05ca4ea",
      },
      {
        dateStart: "2024-08-01T12:40:00.000+02:00",
        dateEnd: "2024-08-01T13:30:00.000+02:00",
        id: "c06579cd-cfc0-428e-a9bb-9481e19fe850",
      },
      {
        dateStart: "2024-08-02T12:40:00.000+02:00",
        dateEnd: "2024-08-02T13:30:00.000+02:00",
        id: "6d6eff70-481d-4055-8c96-a130d5d890b4",
      },
      {
        dateStart: "2024-08-03T12:40:00.000+02:00",
        dateEnd: "2024-08-03T13:30:00.000+02:00",
        id: "c526de7e-0be2-4142-a9c3-ad6bc16818cd",
      },
    ],
  },
  {
    event:
      "Sztuczna Inteligencja - Super.... Bohater czy Złoczyńca\nCisco Systems Sp. z o.o.",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Czy sztuczna inteligencja uratuje świat, czy może go zniszczy? Czy AI jest naszym sprzymierzeńcem, czy raczej potencjalnym wrogiem? Ta prezentacja ukazuje innowacyjne zastosowania AI oraz ciemne strony tej technologii.  Dołącz do nas, aby wspólnie odkryć przyszłość pełną możliwości i wyzwań!",
    id: "e800c88f-8b9e-449f-87dc-cc70d2366d2a",
    instances: [
      {
        dateStart: "2024-07-31T13:00:00.000+02:00",
        dateEnd: "2024-07-31T13:45:00.000+02:00",
        id: "d41c3d0c-58ec-4283-a11e-df2ee7bf6c90",
      },
      {
        dateStart: "2024-08-01T13:00:00.000+02:00",
        dateEnd: "2024-08-01T13:45:00.000+02:00",
        id: "88bd218d-cc38-48e9-9ea3-d962444ba9c2",
      },
      {
        dateStart: "2024-08-02T12:00:00.000+02:00",
        dateEnd: "2024-08-02T12:45:00.000+02:00",
        id: "1e62fbcd-123e-40ba-b9ec-467e810abed6",
      },
    ],
  },
  {
    event:
      "Warsztat: dziecko + zabawa= ważna sprawa\nFundacja Play Therapy for Poland",
    place: "Namiot Warsztatowy ASP",
    kind: "Warsztat",
    description:
      "Celem warsztatu jest doświadczenie uczestników: co to znaczy dostrajać się do dziecka, aby relacja dorosły- dziecko była dla dziecka budująca, wzmacniająca poczucie wartości i poczucie sprawczości dziecka. \nBędziesz bawił/ bawiła się grupach roboczych 6-8 osobowych oraz w parach . \nPodczas warsztatu dowiesz się o jakie warunki możesz zadbać, aby zabawa była dla dziecka rozwojowa. Dowiesz się więc czym jest w relacji z  dzieckiem:\n1. Uważność i ważność\n2. Dostrojenie się do siebie i dzielenie się sobą\n3. Bezpieczeństwo i bezcelowość \nPo warsztatach będziesz mógł/będziesz mogła docenić siebie, zobaczyć własną wartość, bo dla dziecka w zabawie relacja z dorosłym jest dużo ważniejsza niż zabawki, którymi się bawicie.\nWarsztat będzie opierał się na ćwiczeniach kreatywnych z wykorzystaniem papieru, farb oraz instrumentów muzycznych.\nWarsztat poprowadzi Nina Ambroziak- terapeutka, superwizorka i trenerka Play Therapy.\nSerdecznie zapraszamy dorosłych oraz dzieci.",
    id: "48a07ee4-7908-4fac-8851-8b18d8e26316",
    instances: [
      {
        dateStart: "2024-07-31T13:00:00.000+02:00",
        dateEnd: "2024-07-31T14:00:00.000+02:00",
        id: "12a50f48-9202-46f5-860e-8271ab89c0b4",
      },
    ],
  },
  {
    event:
      "Arteterapia/Rękodzieło\nBody&Mind Edukacja Rozwój Aktywność Marzena Gajlewicz",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Odkryj radość tworzenia i zrelaksuj się podczas zajęć, które wprowadzą Cię w świat sztuki.\nPodczas warsztatów nauczysz się podstaw szydełkowania oraz technik tworzenia pięknych, kolorowych "łapaczy marzeń". Wszystkie stworzone przez Ciebie dzieła możesz zabrać do domu, aby cieszyć się nimi na co dzień lub podarować bliskim.\nDołącz do nas, by rozwijać swoje umiejętności manualne, wyrazić siebie poprzez sztukę i doświadczyć terapeutycznego działania rękodzieła. Czekamy na Ciebie w inspirującej i przyjaznej atmosferze, gdzie każdy znajdzie coś dla siebie!',
    id: "a343de77-1a0f-473d-a7ad-157ba017b1a3",
    instances: [
      {
        dateStart: "2024-07-31T13:00:00.000+02:00",
        dateEnd: "2024-07-31T14:00:00.000+02:00",
        id: "fc0add22-35cd-4eb8-9e80-64fa9b215a71",
      },
      {
        dateStart: "2024-08-01T13:00:00.000+02:00",
        dateEnd: "2024-08-01T14:00:00.000+02:00",
        id: "5a2501d0-4ef4-4dc5-a443-224176104e08",
      },
      {
        dateStart: "2024-08-02T13:00:00.000+02:00",
        dateEnd: "2024-08-02T14:00:00.000+02:00",
        id: "0b1fbe54-ab43-42e5-aad6-815015a92718",
      },
      {
        dateStart: "2024-08-03T13:00:00.000+02:00",
        dateEnd: "2024-08-03T14:00:00.000+02:00",
        id: "364a5e54-cc6f-41db-96e0-6a08529f81aa",
      },
    ],
  },
  {
    event:
      "Warsztaty Wyplatania Łapaczy Snów “Goń marzenia, łap sny”\nStowarzyszenie MAYE",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy do Wioski Beztroskiej, gdzie zrobisz swój własny ekologiczny łapacz snów! To wyjątkowa i osobista pamiątka z festiwalu!",
    id: "4d80811a-0867-47c2-a02d-fbe5a9c73757",
    instances: [
      {
        dateStart: "2024-07-31T13:00:00.000+02:00",
        dateEnd: "2024-07-31T15:00:00.000+02:00",
        id: "e67c3318-8f8d-404f-b519-2904bad59fbb",
      },
      {
        dateStart: "2024-08-01T13:00:00.000+02:00",
        dateEnd: "2024-08-01T15:00:00.000+02:00",
        id: "f7d26023-8e56-4d38-979e-c6b7ab73ee52",
      },
      {
        dateStart: "2024-08-02T13:00:00.000+02:00",
        dateEnd: "2024-08-02T15:00:00.000+02:00",
        id: "c207c51d-62d1-48e2-ad1c-6e134556065c",
      },
      {
        dateStart: "2024-08-03T13:00:00.000+02:00",
        dateEnd: "2024-08-03T15:00:00.000+02:00",
        id: "7c9c56b5-7e80-4923-b4c0-f24d922ef84b",
      },
    ],
  },
  {
    event: "Odpowiedzialność karna nieletnich\nKrajowa Rada Kuratorów",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Warsztaty "Odpowiedzialność karna nieletnich" to godzinne spotkanie, które ma na celu przybliżenie uczestnikom zagadnień związanych z odpowiedzialnością karną osób niepełnoletnich. Uczestnicy dowiedzą się, w jakich okolicznościach nieletni mogą być pociągnięci do odpowiedzialności karnej, jakie przepisy regulują te kwestie, oraz jakie sankcje mogą być stosowane wobec nieletnich sprawców przestępstw. Program warsztatów obejmuje omówienie systemu sądownictwa dla nieletnich, różnic między postępowaniem karnym wobec dorosłych a nieletnich, a także dostępnych środków wychowawczych i resocjalizacyjnych. Poprzez interaktywne ćwiczenia i analizę rzeczywistych przypadków, uczestnicy zyskają praktyczną wiedzę na temat procedur i konsekwencji prawnych związanych z odpowiedzialnością karną nieletnich, co pozwoli im lepiej zrozumieć ten istotny aspekt prawa karnego. Warsztaty są przeznaczone dla osób zainteresowanych tematyką prawa, edukatorów, rodziców oraz wszystkich, którzy chcą zwiększyć swoją świadomość na temat prawnych aspektów zachowań nieletnich.',
    id: "59850804-3117-4dc5-a91c-9bbccaf6ccd8",
    instances: [
      {
        dateStart: "2024-07-31T13:00:00.000+02:00",
        dateEnd: "2024-07-31T14:00:00.000+02:00",
        id: "981340a8-8fe4-442a-8818-90c4b0b04647",
      },
      {
        dateStart: "2024-08-02T14:00:00.000+02:00",
        dateEnd: "2024-08-02T15:00:00.000+02:00",
        id: "d429f478-a1a0-424e-ad1e-ca95825cbf3f",
      },
    ],
  },
  {
    event: "Warsztaty Automasażu - wyluzuj swoje ciało\nStowarzyszenie MAYE",
    place: "Strefa Działań Twórczych ASP",
    kind: "Warsztat",
    description:
      "Kto z nas nie odczuwa stresu? Nie pozwól, aby stres kontrolował Ciebie - Ty naucz się kontrolować stres! Proste techniki relaksacji i automasażu pomogą Ci pozbyć się stresu zarówno na platformie fizycznej, emocjonalnej i mentalnej.",
    id: "c33f8cda-56b0-448c-98f4-6ed3b743f3c5",
    instances: [
      {
        dateStart: "2024-07-31T13:00:00.000+02:00",
        dateEnd: "2024-07-31T14:00:00.000+02:00",
        id: "cb685aaa-2279-4b83-8daf-8890d176eed0",
      },
    ],
  },
  {
    event: "Śladami Andrzeja: Warsztaty Kryminalistyczne\nFundacja BioEdukacji",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy na wyjątkowe warsztaty naukowe o tematyce kryminalistyki. Jeśli kiedykolwiek marzyłeś o wcieleniu się w rolę detektywa znanego z najlepszych powieści kryminalnych, to jest to okazja do rozwikłania jednej z największych zagadek festiwalu: gdzie jest Andrzej i dlaczego ukradł buty?\nPodczas tych warsztatów uczestnicy będą mieli okazję stanąć przed naukowym wyzwaniem: rozwiązać tajemniczą zagadkę kryminalną. Zaczniemy od przeszukania miejsca zbrodni, gdzie każdy szczegół może okazać się kluczowy. Zadaniem uczestników będzie zebranie wszelkich dostępnych dowodów – od odcisków palców, przez próbki DNA, aż po ślady pozostawione przez złodzieja. Kolejnym etapem będzie analiza zgromadzonych dowodów. W naszym polowym laboratorium wspólnie przebadamy zebrane próbki. To jednak nie wszystko. W trakcie warsztatów uczestnicy będą mieli również możliwość przeprowadzenia rozmów z podejrzanymi. Wspólną pracą, polowi detektywi będą musieli ułożyć wszystkie elementy układanki i wytypować osobę odpowiedzialną za kradzież butów z miejsca zbrodni.\nDołącz do nas i odkryj tajniki kryminalistyki zdobywając, wiedzę teoretyczną oraz praktyczne umiejętności, a co najważniejsze poznaj prawdę o Andrzeju.",
    id: "b426e6f8-fba6-4e20-ab47-d337bac0190a",
    instances: [
      {
        dateStart: "2024-07-31T13:00:00.000+02:00",
        dateEnd: "2024-07-31T15:00:00.000+02:00",
        id: "28acc118-13eb-478a-a51f-84b210e7547f",
      },
      {
        dateStart: "2024-08-01T13:00:00.000+02:00",
        dateEnd: "2024-08-01T15:00:00.000+02:00",
        id: "958cf279-cd8d-4009-a0ba-e2180205cf74",
      },
      {
        dateStart: "2024-08-02T13:00:00.000+02:00",
        dateEnd: "2024-08-02T15:00:00.000+02:00",
        id: "7c69be9c-f5f6-48a1-bd2c-e6579790a515",
      },
      {
        dateStart: "2024-08-03T13:00:00.000+02:00",
        dateEnd: "2024-08-03T15:00:00.000+02:00",
        id: "7a50d692-1eac-4def-a45c-8e4787d4df75",
      },
    ],
  },
  {
    event: "#szukamyzaginionegomiliona\nFundacja Michała Figurskiego Najsłodsi",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "#szukamyzaginionegomiliona\n\nObecnie dane statystyczne mówią o około 2,3 miliona osób chorujących na cukrzycę w Polsce,\na szacuje się, że ich rzeczywista liczba wynosi nawet 3,5 miliona.\n\nChcemy znaleźć MILION osób, które nie wiedzą, że chorują na cukrzycę, dlatego przyjdź do nas, pokaż środkowy palec i zobacz czy jesteś słodki_a w normie.\nPokażemy Wam też jak podać glukagon w nagłej sytuacji spadku cukru! \n\nPodczas Festiwalu będziemy nadawać cukrzycy nowy, przyjazny, czasami wręcz rock’n’rollowy wizerunek, z którym identyfikować się będą młodzi pacjenci i ich otoczenie. Pokażemy jak podać glukagon osobie, której spadnie cukier, odpowiemy na wszystkie Wasze pytanie związane z cukrzycą, które przychodzą Wam do głowy i obalimy mity cukrzycowe.\n\nChodźcie do nas!",
    id: "ad996eae-cb72-41bd-a6dc-c37d6494c074",
    instances: [
      {
        dateStart: "2024-07-31T13:00:00.000+02:00",
        dateEnd: "2024-07-31T18:00:00.000+02:00",
        id: "521abe50-691a-433f-b834-ae96850b2d64",
      },
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "fbe0c083-d206-4ebf-86e2-0429e6965bd4",
      },
      {
        dateStart: "2024-08-02T11:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "cd52be0f-1daf-4b8c-bf92-104034657b2b",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T14:00:00.000+02:00",
        id: "653aeed3-b865-4615-ae6a-c288fc6caad0",
      },
    ],
  },
  {
    event: "Taniec StreetDacne\nStowarzyszenie MONAR",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description: "Warsztaty taneczne dla każdego i na każdym poziomie :)",
    id: "45716065-5e29-4165-a922-85a871c217d5",
    instances: [
      {
        dateStart: "2024-07-31T13:00:00.000+02:00",
        dateEnd: "2024-07-31T13:50:00.000+02:00",
        id: "72a543f7-d058-4b31-9e2e-90220efb61bc",
      },
      {
        dateStart: "2024-08-01T13:00:00.000+02:00",
        dateEnd: "2024-08-01T13:50:00.000+02:00",
        id: "78d6ad8a-df91-487e-843a-9a3ae35a543a",
      },
      {
        dateStart: "2024-08-02T13:00:00.000+02:00",
        dateEnd: "2024-08-02T13:50:00.000+02:00",
        id: "e337d032-5e17-4e57-8125-240d2b1863c0",
      },
      {
        dateStart: "2024-08-03T13:00:00.000+02:00",
        dateEnd: "2024-08-03T13:50:00.000+02:00",
        id: "4f79e838-06b0-430c-9b4f-13cb66b6e37d",
      },
    ],
  },
  {
    event:
      "Prawda o Spirali: Sztuka Rzucania Piłką w Futbolu Amerykańskim z Warsaw Sirens\nStowarzyszenie Kobiecej Drużyny Futbolu Amerykańskiego - Klub Sportowy Warsaw Sirens",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Chcesz zrozumieć, jak rzucić idealną spiralę? Warsztaty "Prawda o Spirali: Sztuka Rzucania Piłką w Futbolu Amerykańskim" są dla Ciebie! Z nami poznasz tajniki prawidłowej techniki rzutu futbolowego, która jest kluczowym elementem gry. Podczas warsztatów dysponujemy specjalnym sprzętem - bramką i piłkami futbolowymi, które pozwolą Ci na praktyczne zrozumienie i doskonalenie techniki. Doświadczone zawodniczki z naszego zespołu pomogą Ci opanować technikę rzucania, podpowiedzą, na co zwrócić uwagę i jak najefektywniej trenować. Przyjdź i spróbuj swoich sił w rzucaniu futbolówką.',
    id: "b5e53715-a111-46fa-be22-83cd5ca11136",
    instances: [
      {
        dateStart: "2024-07-31T13:00:00.000+02:00",
        dateEnd: "2024-07-31T14:00:00.000+02:00",
        id: "b8e13128-694e-4e7d-9814-687521d5b336",
      },
      {
        dateStart: "2024-08-01T15:00:00.000+02:00",
        dateEnd: "2024-08-01T16:00:00.000+02:00",
        id: "36b43895-a608-4eb1-8586-420dd899ec03",
      },
      {
        dateStart: "2024-08-02T11:00:00.000+02:00",
        dateEnd: "2024-08-02T12:00:00.000+02:00",
        id: "8315f610-e8f8-406e-b66c-62f7d7c06f25",
      },
      {
        dateStart: "2024-08-03T13:00:00.000+02:00",
        dateEnd: "2024-08-03T14:00:00.000+02:00",
        id: "28d7d70a-482d-4c56-a2ee-c74b339afdc6",
      },
    ],
  },
  {
    event: "MOC naszych Mistrzów - Mobilery\nFundacja Złotowianka",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Przyjdź, zobacz i daj się zaskoczyć! Interaktywne pokazy jazdy na mobilerach – trójkołowych rowerach bez pedałów, które zmieniają świat sportu dla osób z niepełnosprawnością. Dołącz do naszych mistrzów, poznaj tajniki ich technik jazdy i sam przetestuj ten niesamowity sprzęt.",
    id: "a5d40f09-fd29-48f7-89b0-fe2f62669f05",
    instances: [
      {
        dateStart: "2024-07-31T13:00:00.000+02:00",
        dateEnd: "2024-07-31T16:00:00.000+02:00",
        id: "88f06a1a-e1dd-4ee0-b941-3741238c3f91",
      },
      {
        dateStart: "2024-08-01T12:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "efc1b2be-c22a-4f33-a32a-f690b7a59f3b",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "17ce1ee9-0df7-4c0b-a157-90dd74e46e2b",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "fad13b4e-ac14-4c4c-8b2c-ea8c0b4a59f5",
      },
    ],
  },
  {
    event:
      "3 min challenge\nUniwersyetet Artystyczny im. Magdaleny Abakanowicz w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Dołącz do wyjątkowych warsztatów rysunkowych, gdzie kreatywność spotyka się z zabawą! Dla dzieci i dorosłych – każda osoba uczestnicząca ma 3 minuty na stworzenie swojego unikalnego rysunku, po czym zamienia się kartkami z osobą obok, tworząc w ten sposób niepowtarzalne dzieła sztuki, które łączą różnorodne style i perspektywy. Powstałe dzieła to efekt spontanicznej współpracy i niezwykłych połączeń kreatywnych umysłów. Przyjdź, doświadcz, i zobacz, co może powstać w magicznych 3 minutach!",
    id: "ec22b9d4-3610-4eb1-a859-d9b175545df3",
    instances: [
      {
        dateStart: "2024-07-31T13:30:00.000+02:00",
        dateEnd: "2024-07-31T15:30:00.000+02:00",
        id: "c214243d-c273-41b1-825d-2c36df2d7cbe",
      },
      {
        dateStart: "2024-08-01T13:30:00.000+02:00",
        dateEnd: "2024-08-01T15:00:00.000+02:00",
        id: "446fbfa0-e291-42e7-8cb1-5ac227598010",
      },
    ],
  },
  {
    event:
      "Stereotypy karmiące przemoc i jak im przeciwdziałać\nFundacja Feminoteka",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Jakie słowa i zachowania wspierają i utrwalają przemoc? Co możemy zrobić, aby nie wzmacniać toksycznych zachowań? Czy nasze komunikaty należą do pozytywnych czy wręcz przeciwnie, choć chcemy dobrze?",
    id: "ec4bbe66-20ac-4ea5-aec2-8e67ffe8d331",
    instances: [
      {
        dateStart: "2024-07-31T13:30:00.000+02:00",
        dateEnd: "2024-07-31T15:30:00.000+02:00",
        id: "5957e646-c64c-4975-b5f2-8dcf01a8e6a1",
      },
    ],
  },
  {
    event:
      "Analiza osobowościowa. Odkryj swoją wewnętrzną siłę - warsztaty\nStowarzyszenie MAYE",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Każdy z nas ma mocniejsze i słabsze strony. Ponieważ nasze osobowością są rożne - nasze moce są rownież różne. Warto je odkryć! Na tych warsztatach dowiesz się jak odkryć swoją indywidualną, wewnętrzną moc! Zapraszamy do Wioski Beztroskiej!",
    id: "0287cbbf-4ae3-4572-81ac-38b289313c69",
    instances: [
      {
        dateStart: "2024-07-31T13:30:00.000+02:00",
        dateEnd: "2024-07-31T14:20:00.000+02:00",
        id: "5585c55b-b99b-4f19-8ed6-154dde9d32aa",
      },
      {
        dateStart: "2024-08-01T13:30:00.000+02:00",
        dateEnd: "2024-08-01T14:20:00.000+02:00",
        id: "f8dc1069-a51c-4c02-943e-2dc4e6b8691d",
      },
      {
        dateStart: "2024-08-02T13:30:00.000+02:00",
        dateEnd: "2024-08-02T14:20:00.000+02:00",
        id: "14823f5b-1ec8-4711-8ca0-ca0a61ff34a8",
      },
      {
        dateStart: "2024-08-03T13:30:00.000+02:00",
        dateEnd: "2024-08-03T14:20:00.000+02:00",
        id: "17d3d976-6bee-48b1-a9ab-a64125e72d6f",
      },
    ],
  },
  {
    event:
      "Gdzie uciekają Twoje pieniądze? Warsztaty z zarządzania i planowania budżetu domowego przy uwzględnieniu budowania zaplecza finansowego.\nCelina Wojciechowska Finanse i Ubezpieczenia",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Zapraszamy na warsztaty pt. "Gdzie uciekają Twoje pieniądze? Warsztaty z zarządzania i planowania budżetu domowego przy uwzględnieniu budowania zaplecza finansowego". Warsztaty te skierowane są do wszystkich, którzy chcą lepiej zarządzać swoimi finansami, zidentyfikować niepotrzebne wydatki oraz skutecznie planować budżet domowy, aby zapewnić sobie stabilność finansową.\n\nCele warsztatów:\n1. Identyfikacja i eliminacja zbędnych wydatków:\nPomoc uczestnikom w zidentyfikowaniu, gdzie "uciekają" ich pieniądze oraz jak eliminować niepotrzebne koszty.\n2. Skuteczne zarządzanie budżetem domowym: \nNauka tworzenia i zarządzania budżetem domowym, który wspiera cele finansowe uczestników.\n3. Budowanie zaplecza finansowego: \nPrzekazanie praktycznych wskazówek dotyczących zapewnienia finansowej stabilności i bezpieczeństwa.\n\nProgram warsztatów:\n1. Wprowadzenie do zarządzania finansami osobistymi:\nKrótkie omówienie podstawowych zasad zarządzania finansami osobistymi.\nZnaczenie świadomego podejścia do wydatków i oszczędności.\n\n2.Analiza wydatków:\nPraktyczne ćwiczenia na temat śledzenia i analizy wydatków.\n\n3.Tworzenie budżetu domowego:\nJak stworzyć realistyczny i efektywny budżet domowy.\nRozmowa o priorytetach finansowych i jak je uwzględniać w budżecie.\n\n4.Oszczędzanie i budowanie zaplecza finansowego:\nStrategia oszczędzania na krótkoterminowe i długoterminowe cele.\nTworzenie funduszu awaryjnego i jego rola w zapewnieniu stabilności finansowej.\n\n5. Planowanie finansowe na przyszłość:\nZnaczenie planowania finansowego w kontekście długoterminowych celów, takich jak edukacja dzieci, emerytura czy zakup nieruchomości.\n\n6. Ćwiczenia i symulacje:\nPraktyczne ćwiczenia i symulacje, które pomogą uczestnikom zastosować zdobytą wiedzę w realnych sytuacjach.\nAnaliza różnych scenariuszy finansowych i podejmowanie decyzji.\n\n7. Podsumowanie i pytania:\nPodsumowanie kluczowych wniosków z warsztatów.\nSesja pytań i odpowiedzi, aby rozwiać wszelkie wątpliwości uczestników i omówić ich indywidualne sytuacje.\n\nKorzyści dla uczestników:\n1.Praktyczne umiejętności zarządzania budżetem domowym: \nUczestnicy nauczą się, jak efektywnie planować i zarządzać swoimi finansami, aby osiągnąć większą kontrolę nad swoimi wydatkami.\n2. Świadomość finansowa: \nZdobycie wiedzy na temat identyfikacji zbędnych wydatków i budowania oszczędności.\n3. Stabilność finansowa: \nPraktyczne porady dotyczące oszczędzania i inwestowania oraz bezpieczeństwa finansowego, które pomogą uczestnikom zbudować stabilne zaplecze finansowe.',
    id: "36bf8ace-3aeb-46cc-9036-e260100dbf26",
    instances: [
      {
        dateStart: "2024-07-31T13:30:00.000+02:00",
        dateEnd: "2024-07-31T15:00:00.000+02:00",
        id: "28430f81-2c08-4653-8e59-fb625ec749f3",
      },
      {
        dateStart: "2024-08-01T13:30:00.000+02:00",
        dateEnd: "2024-08-01T15:00:00.000+02:00",
        id: "666048fe-ccac-4b15-af04-f1c2174e2a59",
      },
      {
        dateStart: "2024-08-02T13:30:00.000+02:00",
        dateEnd: "2024-08-02T15:00:00.000+02:00",
        id: "4a3199d6-6edc-4f60-b989-a4096e4822cc",
      },
      {
        dateStart: "2024-08-03T13:30:00.000+02:00",
        dateEnd: "2024-08-03T15:00:00.000+02:00",
        id: "3485e0c9-7a5d-4cae-a47d-393bd777ad72",
      },
    ],
  },
  {
    event: "Trening funkcji poznawczych\nFundacja Rozwoju Społecznego SPINACZ",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Ludzki mózg to genialny instrument pozwalający na odbieranie, przetwarzanie i generowanie bodźców. Mózg działa podobnie jak mięśnie i ciało. Jeśli systematycznie pobudzamy go do wysiłku, pracuje sprawnie i cieszy się dobrą kondycją również w okresie późnej dorosłości. Warsztaty koncentrować się będą na treningu funkcji poznawczych, które w największym stopniu ulegają osłabieniu z wiekiem – czyli uwadze, koncentracji, zapamiętywaniu oraz funkcjach językowych. Podczas warsztatów zaprezentowane zostaną proste ćwiczenia pamięciowe oraz stymulujące obie półkule mózgu, które można wykonywać z dziadkami wspierając ich sprawność.",
    id: "844c925d-4ce3-422c-8ee0-1e826b60b887",
    instances: [
      {
        dateStart: "2024-07-31T13:30:00.000+02:00",
        dateEnd: "2024-07-31T14:00:00.000+02:00",
        id: "5e0ac66c-b1f2-4aa6-a408-f9e88a14e08d",
      },
      {
        dateStart: "2024-08-01T15:30:00.000+02:00",
        dateEnd: "2024-08-01T16:30:00.000+02:00",
        id: "c7b32153-388b-4278-8b4f-b107a734c2b7",
      },
      {
        dateStart: "2024-08-02T18:00:00.000+02:00",
        dateEnd: "2024-08-02T19:00:00.000+02:00",
        id: "6789f321-0752-408e-ad2e-0b355d79f61d",
      },
      {
        dateStart: "2024-08-03T11:00:00.000+02:00",
        dateEnd: "2024-08-03T12:30:00.000+02:00",
        id: "e043b0f9-f745-425b-b3a4-248f6f575cfb",
      },
    ],
  },
  {
    event:
      "Można inaczej - pokonywanie barier\nFundacja Avalon Bezpośrednia Pomoc Niepełnosprawnym",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Niepełnosprawność nie ogranicza! Czasem jednak trzeba nauczyć się sposobów na pokonywanie barier i radzenie sobie w różnych życiowych sytuacjach. Do skorzystania z aktywności zapraszamy uczestników Festiwalu, którzy pod okiem fizjoterapeutów z Fundacji Avalon chcieliby poznać inną perspektywę radzenia sobie z codziennością, w sposób zgoła odmienny niż ten, w jaki radzi sobie sam. Gwarantujemy emocje, które zostaną w głowie i sercu na dłużej.",
    id: "d90c1879-af30-4ede-88c8-0981d9706394",
    instances: [
      {
        dateStart: "2024-07-31T13:30:00.000+02:00",
        dateEnd: "2024-07-31T15:00:00.000+02:00",
        id: "9e15cb97-65aa-435e-a6aa-ec1242c4d19c",
      },
      {
        dateStart: "2024-08-01T13:30:00.000+02:00",
        dateEnd: "2024-08-01T15:00:00.000+02:00",
        id: "c2549cc1-ce56-4122-b515-8fa1a078d756",
      },
      {
        dateStart: "2024-08-02T15:00:00.000+02:00",
        dateEnd: "2024-08-02T16:00:00.000+02:00",
        id: "d3389af9-40e1-4f53-b382-eb4043b50843",
      },
    ],
  },
  {
    event:
      "„Wolność słowa a naruszenie dóbr osobistych w publicznych wypowiedziach”\nIzba Adwokacka w Warszawie",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "- Gdzie granice publicznej dyskusji w demokratycznym społeczeństwie.\n- Kiedy i jak można bronić się przed publicznymi wypowiedziami naruszającymi naszą godność lub mającymi wywołać do nas niechęć.\n- Czy osoby publiczne muszą mieć grubszą skórę. Co wolno publicznie powiedzieć o nielubianym polityku, a kiedy możemy spodziewać się, że zostaniemy z powodu naszych wypowiedzi pozwani. Co nam wtedy grozi.\n- SLAPP – pozwy mające tłumić publiczną dyskusję. Jak się bronić przed pozwami mającymi tłumić wolność słowa i dyskusję w ważnych sprawach publicznych.",
    id: "166d803f-01e6-49b9-b4f9-e5e6aed0f7ea",
    instances: [
      {
        dateStart: "2024-07-31T14:00:00.000+02:00",
        dateEnd: "2024-07-31T15:00:00.000+02:00",
        id: "3ab74389-1a9e-4144-809f-94cb65b5c247",
      },
    ],
  },
  {
    event: "Warsztaty wiązania węzłów\nFUNDACJA HACKERSPACE KRAKÓW",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      '"O tym że znajomość węzłów jest przydatna chyba nikogo nie trzeba przekonywać. Na pewno wielu z Was zdarzyło się zawiązać węzeł który po chwili się rozwiązał, albo było go bardzo trudno potem rozwiązać. Na tych warsztatach nauczycie się podstawowych węzłów żeglarskich i innych które są przydatne w codziennym życiu a także mogą uratować Wam życie.\nZapraszamy zarówno dzieci jak i dorosłych."',
    id: "3099c760-4339-4846-baea-b879b556166a",
    instances: [
      {
        dateStart: "2024-07-31T14:00:00.000+02:00",
        dateEnd: "2024-07-31T15:00:00.000+02:00",
        id: "8f35f34d-c5b5-4a5e-9c48-b96bf411a329",
      },
      {
        dateStart: "2024-08-03T12:00:00.000+02:00",
        dateEnd: "2024-08-03T13:00:00.000+02:00",
        id: "9cd5c071-53df-4731-824b-bd9e930633f2",
      },
    ],
  },
  {
    event: "Mądre i zrównoważone pomaganie Afryce\nTHINGS HAPPEN",
    place: "Strefa Działań Twórczych ASP",
    kind: "Warsztat",
    description:
      'Warsztat “Mądre i zrównoważone pomaganie Afryce” to spotkanie, na którym nauczymy się, jak skutecznie pomagać w Afryce. Omówimy, jak unikać błędów w niesieniu pomocy, jak działać, żeby "równość" nie była tylko hasłem, ale rzeczywistością, oraz jak sprawić, by nasza pomoc przynosiła realne i długoterminowe korzyści.\n\nPodczas warsztatu poruszymy również temat tożsamości i różnic rasowych w kontekście afrykańskim. Zastanowimy się, co to znaczy być czarnym w Afryce, z jakimi wyzwaniami i stereotypami mierzą się lokalni mieszkańcy, oraz jak historia kolonializmu i współczesne nierówności wpływają na ich życie codzienne. Z drugiej strony, przyjrzymy się, jak postrzegani są biali w Afryce, jakie role i oczekiwania są im przypisywane, oraz jakie mogą napotkać wyzwania i uprzedzenia. Zrozumienie tych różnic jest kluczowe, aby nasza pomoc była szanowana i efektywna, oraz aby budować mosty porozumienia i prawdziwej współpracy międzykulturowej.',
    id: "e858c4b8-3b30-417d-aeed-3fc835aa0c15",
    instances: [
      {
        dateStart: "2024-07-31T14:00:00.000+02:00",
        dateEnd: "2024-07-31T15:00:00.000+02:00",
        id: "0e4519e8-28b5-4322-af2c-8a1abce3dfc8",
      },
    ],
  },
  {
    event: "BeatBox\nStowarzyszenie MONAR",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Podczas warsztatów nauczycie się jak tworzyć muzykę za pomocą aparatu mowy.\nWarsztaty poprowadzi utytułowany zawodnik mistrzostw europy oraz członek zespołu Audiofeels Piotr "Bobby" Jarosz',
    id: "70bfacc0-12cd-4c29-af79-d9162ea796b7",
    instances: [
      {
        dateStart: "2024-07-31T14:00:00.000+02:00",
        dateEnd: "2024-07-31T15:00:00.000+02:00",
        id: "e0f47d9c-3a21-43be-93d5-86542c036958",
      },
      {
        dateStart: "2024-08-01T14:00:00.000+02:00",
        dateEnd: "2024-08-01T15:00:00.000+02:00",
        id: "0aa323ca-5451-4b7c-95d4-26586e3b40f8",
      },
      {
        dateStart: "2024-08-02T14:00:00.000+02:00",
        dateEnd: "2024-08-02T15:00:00.000+02:00",
        id: "a7bec36b-042c-498f-977e-0abc572295ba",
      },
      {
        dateStart: "2024-08-03T14:00:00.000+02:00",
        dateEnd: "2024-08-03T15:00:00.000+02:00",
        id: "8bcd4904-07b4-4bc5-97c0-6f7c2de784b0",
      },
    ],
  },
  {
    event:
      "EKO znaki towarowe i loga - czy serio są EKO?\nPolska izba rzeczników patentowych",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Jako rzecznicy patentowi - specjaliści od znaków towarowych zachęcamy do udziału w warsztatach o ekologicznych oznaczeniach produktów. Powiemy czy można swoje własne produkty oznaczyć BIO, EKO, ORGANIC czy VEGAN i co to oznacza, a także czy można dowolnie posługiwać się znanymi oznaczeniami ekologicznymi np. zielonego listka nawiązującego do produktów vege lub vegan. Przede wszystkim powiemy jak reagować na greenwashing czyli bardzo częste próby podszywania się pod produkty ekologiczne lub wegańskie, ale w rzeczywistości nie spełniające warunków jakościowych. Zdradzimy co ma do tego UOKiK, Urząd Patentowy i dlaczego warto nasz EKO biznes skonsultować z rzecznikiem patentowym oraz na jakim etapie.\nTe zajęcia to WARSZTATY - gadamy, pokazujemy i dyskutujemy. Liczymy na Wasze opinie, historie i doświadczenia oraz luźną wymianę myśli!",
    id: "50befd80-1fd4-41c4-9e07-2610735a2ba5",
    instances: [
      {
        dateStart: "2024-07-31T14:00:00.000+02:00",
        dateEnd: "2024-07-31T15:00:00.000+02:00",
        id: "7c56dd79-f1d1-41fc-8c9b-464046f3bbdb",
      },
    ],
  },
  {
    event:
      "Kocie Inspiracje Zawodowe\nBody&Mind Edukacja Rozwój Aktywność Marzena Gajlewicz",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy młodzież i dorosłych do udziału w wyjątkowych warsztatach metodą strumieniową. Zajęcia oferują cztery stacje o różnym stopniu trudności, z możliwością wyboru aktywności. Warsztaty obejmują obszary związane ze ścieżką zawodową, karierą, rynkiem pracy oraz własnymi predyspozycjami, oparte na autorskich materiałach Kreatywnego Doradcy Ścieżki Kariery Anny Sarczyńskiej.\nPodczas warsztatów uczestnicy będą pracować z różnorodnymi materiałami, w tym wizualnymi, pod opieką mentorską. Będą mieli okazję do ćwiczeń, refleksji nad własnymi cechami i kompetencjami, planowania i zarządzania czasem, oraz zapoznania się z znaczeniem kompetencji miękkich. Warsztaty obejmują również ćwiczenia z zakresu asertywności oraz możliwość wykorzystania autorskich kolorowanek związanych z rozwojem zawodowym. Zachęcamy do rozmów i dyskusji w tematyce ćwiczeń.",
    id: "75c81067-dae8-4cb0-b178-fb6d49da62bf",
    instances: [
      {
        dateStart: "2024-07-31T14:00:00.000+02:00",
        dateEnd: "2024-07-31T15:00:00.000+02:00",
        id: "d4369804-2596-4298-8f14-d2960f05e9e0",
      },
      {
        dateStart: "2024-08-01T14:00:00.000+02:00",
        dateEnd: "2024-08-01T15:00:00.000+02:00",
        id: "44ce3edd-3e20-48d9-9276-0ee4a8999144",
      },
      {
        dateStart: "2024-08-02T14:00:00.000+02:00",
        dateEnd: "2024-08-02T15:00:00.000+02:00",
        id: "cd32af46-1daf-4377-8943-149dbb5abef0",
      },
      {
        dateStart: "2024-08-03T14:00:00.000+02:00",
        dateEnd: "2024-08-03T15:00:00.000+02:00",
        id: "d459321f-7f95-4024-bcba-86b2c430d2f8",
      },
    ],
  },
  {
    event:
      "KIEDY TO SIĘ STAŁO? PRZEKROCZENIE MAGICZNEJ GRANICY\nFundacja Biuro Służby Krajowej Anonimowych Alkoholików w Polsce",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Warsztat pt. "Kiedy to się stało? Przekroczenie magicznej granicy"- będzie dotyczył uchwycenia momentu, w którym człowiek zaczyna identyfikować się jako alkoholik. Każdy z członków wspólnoty zadał sobie kiedyś tytułowe pytanie. Jako, że AA nie zajmuje się diagnozowaniem, podjęliśmy ten temat, aby powstała przestrzeń do dzielenia się własnymi doświadczeniami, które być może udzielą odpowiedzi osobom zainteresowanym.',
    id: "b6eb6a5a-ec1e-4afb-a102-c9324cb53f23",
    instances: [
      {
        dateStart: "2024-07-31T14:00:00.000+02:00",
        dateEnd: "2024-07-31T15:00:00.000+02:00",
        id: "594cfb36-1907-4885-b143-2650a9730490",
      },
    ],
  },
  {
    event:
      "Rzecz o przemocy domowej – dla kobiet (i nie tylko)\nKrajowa Rada Kuratorów",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Warsztaty „Rzecz o przemocy domowej – dla kobiet (i nie tylko)”, to godzinne spotkanie poświęcone przedstawieniu zagadnień związanych z przemocą a w szczególności koncentrujące się wokół problemu przemocy domowej. Uczestnicy warsztatów poznają i rozprawią się  z najczęstszymi stereotypami dot. przemocy domowej. Metodą prawda/fałsz poznają podstawowe pojęcia dot. szeroko rozumianej przemocy a szczególnie przemocy domowej, pozwalające na jej rozpoznanie. Uzyskają informacje na temat ochrony prawnej przed przemocą oraz wskazówki gdzie uzyskać pomoc. Nie zabraknie czasu na dyskusję oraz rozmowy indywidualne z uczestnikami. Chętni otrzymają również poradniki dotyczące rozwiązywania najczęstszych problemów związanych ze stosowaniem przemocy domowej.",
    id: "625f9747-cafe-4902-869c-56468d44574f",
    instances: [
      {
        dateStart: "2024-07-31T14:00:00.000+02:00",
        dateEnd: "2024-07-31T15:00:00.000+02:00",
        id: "62347f1b-9cd5-4418-a7fa-ea7525cb095f",
      },
      {
        dateStart: "2024-08-01T19:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "80f97e96-9942-469f-9cb1-db7035825f62",
      },
      {
        dateStart: "2024-08-02T18:00:00.000+02:00",
        dateEnd: "2024-08-02T19:00:00.000+02:00",
        id: "23154650-c14f-4168-89a4-6441a49fa2d5",
      },
    ],
  },
  {
    event:
      'Rozprawa "Sprawa o tranzycję"\nStowarzyszenie Sędziów Polskich  "Iustitia"',
    place: "Namiot Warsztatowy ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy na ławę publiczności w symulacji rozprawy o uzgodnienie płci. To doświadczenie pozwoli:\n- poznać złożoność procesu sądowego dotyczącego tranzycji,\n- zdobyć wiedzę na temat argumentów prawnych, medycznych i społecznych prezentowanych w takich sprawach,\n- rozwinąć umiejętności argumentacji i perswazji.\nSymulacja będzie prowadzona przez doświadczonych prawników i ekspertów w dziedzinie praw człowieka, którzy zapewnią realistyczny przebieg rozprawy. Po rozprawie uczestnicy będą mieli szansę wziąć udział w dyskusji.",
    id: "5149f50e-fc2f-469f-b914-87c062f1783c",
    instances: [
      {
        dateStart: "2024-07-31T14:00:00.000+02:00",
        dateEnd: "2024-07-31T15:00:00.000+02:00",
        id: "4dca892e-ec6e-412d-8fa2-a2d32f30f52a",
      },
    ],
  },
  {
    event: "O'gry\nMiejska Biblioteka Publiczna im. Galla Anonima",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Stworzymy prawdziwe miejsce rozgrywek gier planszowych, które wciągną w swój świat z pewnością nie jednego miłośnika planszówek. Posiadamy prawdziwe hity gier fabularnych, familijnych, przygodowych a także gry w wersji plenerowej - XXL dla dzieci. To wszystko oczywiście pod okiem czujnych instruktorów gier.",
    id: "ec1eec4a-3f37-48a9-85b4-039e590a09dd",
    instances: [
      {
        dateStart: "2024-07-31T14:00:00.000+02:00",
        dateEnd: "2024-07-31T17:00:00.000+02:00",
        id: "d95de85d-d9af-44fa-b708-3dc04f91690a",
      },
      {
        dateStart: "2024-08-01T14:00:00.000+02:00",
        dateEnd: "2024-08-01T17:00:00.000+02:00",
        id: "8e1e95ab-a4f9-40c3-9b8c-13745c8ac9b0",
      },
      {
        dateStart: "2024-08-02T14:00:00.000+02:00",
        dateEnd: "2024-08-02T17:00:00.000+02:00",
        id: "e8137cce-925c-4327-a484-ba9c6189ef79",
      },
      {
        dateStart: "2024-08-03T14:00:00.000+02:00",
        dateEnd: "2024-08-03T17:00:00.000+02:00",
        id: "02c7f606-a01c-4f99-8b85-2ac1daf203ca",
      },
    ],
  },
  {
    event: "Nietypowe wykroczenia\nOkręgowa Izba Radców Prawnych w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Warsztat dotyczyć będzie omówienia wybranych wykroczeń znanych polskiemu prawu, które z pozoru stanowią normalne zachowania, za które jednak można zostać ukaranym. Podczas warsztatu oprócz teoretycznego przytoczenia najbardziej nietypowych przykładów wykroczeń uregulowanych w przepisach prawa omówione zostaną także ciekawe sytuacje z życia, które zakończyły się wręczeniem sprawcy mandatu bądź wymierzeniu mu innej kary.",
    id: "a1076d9c-7814-427e-81f9-ea33c3fba354",
    instances: [
      {
        dateStart: "2024-07-31T14:00:00.000+02:00",
        dateEnd: "2024-07-31T14:55:00.000+02:00",
        id: "b9341698-1fbe-441f-bbba-d3b5db397742",
      },
    ],
  },
  {
    event: "Prezentacja-Jak stworzyć dobre CV?\nCisco Systems Sp. z o.o.",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Jak stworzyć dobre CV? Na co zwracają uwagę rekruterzy? Podczas naszej sesji dostaniesz pakiet praktycznych wskazówek, które pomogą Ci w znalezieniu wymarzonej pracy.",
    id: "e8751e3a-30f1-45ae-9786-42757cf613f3",
    instances: [
      {
        dateStart: "2024-07-31T14:00:00.000+02:00",
        dateEnd: "2024-07-31T14:45:00.000+02:00",
        id: "c3d4812b-6041-49e6-8051-4b483451a289",
      },
      {
        dateStart: "2024-08-01T14:00:00.000+02:00",
        dateEnd: "2024-08-01T14:45:00.000+02:00",
        id: "e8115c39-683f-43db-9dcd-2ed014f5da9f",
      },
      {
        dateStart: "2024-08-02T13:00:00.000+02:00",
        dateEnd: "2024-08-02T13:45:00.000+02:00",
        id: "aac59d10-33fb-4a88-8590-ec5b5a3d4cd8",
      },
      {
        dateStart: "2024-08-03T12:00:00.000+02:00",
        dateEnd: "2024-08-03T12:45:00.000+02:00",
        id: "1dd45423-8c84-4c15-bb03-7022ee7d97bb",
      },
    ],
  },
  {
    event:
      "Wolność słowa a naruszenie dóbr osobistych w publicznych wypowiedziach\nStowarzyszenie Prokuratorów Lex Super Omnia",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "- Gdzie granice publicznej dyskusji w demokratycznym społeczeństwie.\n- Kiedy i jak można bronić się przed publicznymi wypowiedziami naruszającymi naszą godność lub mającymi wywołać do nas niechęć.\n- Czy osoby publiczne muszą mieć grubszą skórę. Co wolno publicznie powiedzieć o nielubianym polityku, a kiedy możemy spodziewać się, że zostaniemy z powodu naszych wypowiedzi pozwani. Co nam wtedy grozi.\n- SLAPP – pozwy mające tłumić publiczną dyskusję. Jak się bronić przed pozwami mającymi tłumić wolność słowa i dyskusję w ważnych sprawach publicznych.",
    id: "c8af4138-7bb3-437a-b3bf-de5f9bce380c",
    instances: [
      {
        dateStart: "2024-07-31T14:00:00.000+02:00",
        dateEnd: "2024-07-31T15:00:00.000+02:00",
        id: "48acd390-804d-40f9-85a0-7bcc50b67380",
      },
    ],
  },
  {
    event: 'Ucieczka z Bazy "Europa-4"\nPolskie Towarzystwo Astrobiologiczne',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy na Naukowy Escape Room! Będzie to pełna zagadek przygoda dla starszych i młodszych odkrywców. Baza jest zagrożona i trzeba się jak najszybciej udać do kapsuły ratunkowej. Droga ewakuacyjna została jednak zablokowana. Żeby dostać się do kapsuły trzeba będzie wykazać się bystrością umysłu godną astronauty! W czasie tych warsztatów stawicie czoła problemom technicznym i nie raz trzeba będzie ruszyć głową aby sprostać zadaniom które znajdziecie we wskazówkach. Zdążycie na czas?",
    id: "fbf174af-6930-4582-a1e2-ec2b0ef22142",
    instances: [
      {
        dateStart: "2024-07-31T14:00:00.000+02:00",
        dateEnd: "2024-07-31T16:00:00.000+02:00",
        id: "58277c22-8f63-4de4-9f12-ceb8635a5152",
      },
      {
        dateStart: "2024-08-02T15:00:00.000+02:00",
        dateEnd: "2024-08-02T17:00:00.000+02:00",
        id: "6542b413-0ac8-440d-8469-d288802e4de6",
      },
      {
        dateStart: "2024-08-03T11:00:00.000+02:00",
        dateEnd: "2024-08-03T13:00:00.000+02:00",
        id: "9e714303-ea40-4d3d-b2d8-c61205c638b9",
      },
    ],
  },
  {
    event:
      "Dyżur  terapeutki TSR (Terapia Skoncentrowana na rozwiązaniach)\nOgólnopolski Strajk Kobiet",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Przedmiotem TSR, jej zainteresowanie nie  przeszłością, a raczej teraźniejszością i przyszłością. O tyle zajmuje się historią życia osoby w potrzebie , o ile można z niej odczytać mocne strony osoby, cenne doświadczenia i sposoby radzenia sobie z wcześniejszymi kryzysami.",
    id: "e02b634c-5be4-493d-a317-58c0658e0f19",
    instances: [
      {
        dateStart: "2024-07-31T14:00:00.000+02:00",
        dateEnd: "2024-07-31T16:00:00.000+02:00",
        id: "50f5f630-31a3-450d-b872-03de5ef958d4",
      },
      {
        dateStart: "2024-08-02T14:00:00.000+02:00",
        dateEnd: "2024-08-02T16:00:00.000+02:00",
        id: "acc7e86a-3f6d-43d6-8a83-f59d5c509343",
      },
      {
        dateStart: "2024-08-03T14:00:00.000+02:00",
        dateEnd: "2024-08-03T16:00:00.000+02:00",
        id: "4558991f-76ba-4f0e-aadb-ec832b3cc303",
      },
    ],
  },
  {
    event:
      'Happening rzeźbiarski Brygady Pigmaliona oraz akcja malarska "Obrazy pisane przez innych" Piotra C. Kowalskiego\nBrygada Pigmaliona oraz Piotr C. Kowalski',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Brygada Pigmaliona to grupa zrzeszająca miłośników rzeźby. Nasze działania  polegają na rzeźbieniu monumentalnych – pomnikowych realizacji na żywo. Kreowane są najczęściej w przestrzeni miejskiej i mają charakter happeningowy. Autorem i inicjatorem działań jest Wiesław Koronowski, kierujący grupą, która na oczach publiczności jak i przy jej udziale realizuje pełnowymiarową rzeźbę.\n\nAkcja na tegorocznym festiwalu pt. “Romeo i Superbohaterka” obejmuje wolnostojącą kompozycję rzeźbiarską dwóch postaci oraz dwustronną planszę - po jednej stronie publiczność zyska możliwość ingerencji w powstającą płaskorzeźbę. Po drugiej stronie realizacji odbędzie się akcja Piotra C. Kowalskiego z cyklu „ŻYWA NATURA” pod tytułem “Obrazy pisane przez innych” obejmujących malowanie na blejtramach,  o formacie 205 x 60 cm przy czynnym udziale publiczności.  Do tej pory (od 1995 roku), Piotr C. Kowalski wielokrotnie ustawiał płótna w przestrzeni publicznej jak i miejscach swoich wystaw indywidualnych z których powstawały obrazy za pośrednictwem obecności osób trzecich.\n\nChcemy zaktywizować publiczność oraz jej reakcje przenieść na plastyczny język malarstwa i rzeźby. W zależności od preferencji i chęci uczestników zapewnimy podstawowe narzędzia i pomoc techniczną w pracy z farbami i gliną. Udział w wydarzeniu ma mieć charakter ciągły i spontaniczny. Już sama rzeźba i obraz pod wpływem warunków atmosferycznych mogą ulegać stopniowej destrukcji i kolejnym naprawom oraz przekształceniom na które może mieć wpływ przypadkowy odbiorca.",
    id: "772b805a-a3c4-453b-b030-c207d06edd7f",
    instances: [
      {
        dateStart: "2024-07-31T15:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "190e4d40-e2ae-45e1-bade-9f8d89225a68",
      },
    ],
  },
  {
    event:
      "Spotkania z inżynierami - ciekawe eksperymenty i pokazy\nPolitechnika Gdańska",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Koła Naukowe to serce każdej uczelni, w naszym namiocie będziecie mogli spotkać przyszłych i już tytułowanych inżynierów i zobaczyć czym się zajmują na co dzień. Nie zabraknie pokazów i eksperymentów, które w założeniu powinny Was zachęcić do poznawania tajemnic przedmiotów ścisłych i technicznych. Każdy z nas będzie mógł Wam opowiedzieć o tym czym dla niego/niej jest inżynieria, jakie kierunki rozwoju oraz nauki można odkrywać na PG. Przyjdź i porozmawiaj z nami! Będziemy dla Was otwartą książką, i nie ma głupich ani nieodpowiednich pytań!",
    id: "e2022c46-8639-4a4f-a194-af6c9df3eadf",
    instances: [
      {
        dateStart: "2024-07-31T15:00:00.000+02:00",
        dateEnd: "2024-07-31T18:00:00.000+02:00",
        id: "151ea4ff-6512-430b-acda-fd17c7a561c2",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "94fa4143-0308-4b0e-813f-2d4cf785f2f3",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "c6db45a2-19d6-485e-863e-83ad290a567b",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T15:00:00.000+02:00",
        id: "c23ee416-f8be-4add-8503-e073a977bacd",
      },
    ],
  },
  {
    event: 'Warsztaty "Szkoła dla rodziców"\nStowarzyszenie MONAR',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Szkoła dla Rodziców to program spotkań dla każdego, kto szuka sposobu na nawiązanie głębszych i cieplejszych relacji z dziećmi lub wychowankami.\n\nJego głównym celem jest wspieranie rodziców i wychowawców w radzeniu sobie w codziennych kontaktach z dziećmi i młodzieżą. Nauka umiejętności lepszego porozumiewania się, refleksja nad własną postawą wychowawczą, wymiana doświadczeń, to małe kroki ku głębszej relacji, dającej zadowolenie, poczucie wzajemnej bliskości. To także nauka dialogu i kształtowanie więzi opartych na wzajemnym szacunku.\n\nGłówne motto Szkoły dla Rodziców brzmi: Wychowywać to kochać i wymagać.\n\nUcząc umiejętności otwartego porozumiewania się w rodzinie program jednocześnie przyczynia się do budowania silnej więzi między rodzicami a dziećmi, co (zgodnie z wynikami badań J. D. Hawkinsa) sprawia, że jest on także programem profilaktycznym.\n\nProgram w dużej części bazuje na cyklu książek A. Faber i E. Mazlish pt. „Jak mówić, żeby dzieci nas słuchały. Jak słuchać, żeby dzieci do nas mówiły", „Rodzeństwo bez rywalizacji. Jak pomóc własnym dzieciom żyć w zgodzie, żeby samemu żyć z godnością", „Wyzwoleni rodzice, wyzwolone dzieci. Twoja droga do szczęśliwej rodziny", „Jak mówić, żeby dzieci się uczyły w domu i w szkole", „Jak mówić do nastolatków, żeby nas słuchały. Jak słuchać, żeby z nami rozmawiały" \n\nSzkoła dla Rodziców uczy nie tyle „metod" co budowania relacji w duchu podmiotowości i dialogu.\nSzkoła dla Rodziców jest programem profilaktyki uniwersalnej ukierunkowany na przeciwdziałanie zachowaniom problemowym dzieci i młodzieży oraz podnoszenie kompetencji wychowawczych rodziców. Adresowanym do dorosłych.\n\nTEMATYKA ZAJĘĆ:\n\n  wyrażanie oczekiwań i ograniczeń tak, aby były przez dziecko respektowane,\n  rozpoznawanie, wyrażanie i akceptowanie uczuć,\n  aktywne, wspierające słuchanie,\n  motywowanie dziecka do współdziałania,\n  modyfikowanie niepożądanych lub nieodpowiednich zachowań dziecka,\n  uwalnianie dzieci od grania narzuconych ról w domu i szkole,\n  wspieranie procesu usamodzielniania się dziecka,\n  budowanie realnego poczucia własnej wartości dziecka,\n  konstruktywne rozwiązywanie konfliktów.',
    id: "e3726e13-a387-433d-87bd-c2f8decf7322",
    instances: [
      {
        dateStart: "2024-07-31T15:00:00.000+02:00",
        dateEnd: "2024-07-31T16:30:00.000+02:00",
        id: "404680ec-3aaa-49f2-8fbb-b689fd0af351",
      },
      {
        dateStart: "2024-08-01T09:00:00.000+02:00",
        dateEnd: "2024-08-01T11:00:00.000+02:00",
        id: "3967f5a3-9f1a-4b52-b209-2c7c5a72d3f9",
      },
      {
        dateStart: "2024-08-02T09:00:00.000+02:00",
        dateEnd: "2024-08-02T11:00:00.000+02:00",
        id: "f0e0d36b-1565-45ae-aabd-e6197e1ad2d5",
      },
      {
        dateStart: "2024-08-03T09:00:00.000+02:00",
        dateEnd: "2024-08-03T11:00:00.000+02:00",
        id: "c1da2650-7fb5-4338-a5e9-4f0e4b03af32",
      },
    ],
  },
  {
    event:
      "Warsztat savoir vivre wobec osób z niepełnosprawnościami\nFundacja Avalon Bezpośrednia Pomoc Niepełnosprawnym",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Na warsztatach na wstępie opowiemy o codzienności osób z niepełnosprawnościami w Polsce. Poruszymy kwestie dostosowań budynków, transportu miejskiego i innych sfer życia. Jak możemy pomóc? Jak nie krytykować i nie sprawiać przykrości? Co robić, kiedy spotkamy na ulicy osobę z niepełnosprawnością? Jak zachowywać się wobec niej w miejscu pracy? Wszystkich odpowiedzi udzielimy podczas warsztatu, na który już teraz serdecznie zapraszamy. Warsztat poprowadzą specjalistki Fundacji Avalon, które na co dzień przybliżają ten temat osobom pełnosprawnym.",
    id: "7250800d-60d8-43b8-96fd-cd9a90fe887b",
    instances: [
      {
        dateStart: "2024-07-31T15:00:00.000+02:00",
        dateEnd: "2024-07-31T16:30:00.000+02:00",
        id: "39584632-d31d-40b3-8fc5-fde7219a88c0",
      },
    ],
  },
  {
    event:
      'Warsztaty "W drodze do.." dookoła Polski na piechotę. 3568km.\nMilena Witecka-Sznajder',
    place: "Strefa Działań Twórczych ASP",
    kind: "Warsztat",
    description:
      'Na podstawie książki o wędrówce dookoła Polski pieszo, zapraszamy na inspirujące warsztaty, które pomogą Ci odkryć piękno naszego kraju i wzmocnią Twoją pasję do podróży.\nWarsztaty będą obejmować:\n•\tPrezentację multimedialną z trasy dookoła Polski: Odkryj wraz z nami 14 Parków Narodowych, urokliwe zakątki, nieoczywiste miejsca i zobacz, jak Polska zachwyca różnorodnością krajobrazów i przyrody.\n•\tRozmowę o pasji i realizacji marzeń: Jak narodził się pomysł na pieszą wędrówkę dookoła Polski? Ile wysiłku i pracy wymagało zrealizowanie tego projektu? Jak pokonać trudności i podtrzymać motywację w dążeniu do celu?\n•\tPrzygotowanie do pieszej wędrówki: Dowiedz się, jak zaplanować trasę, wybrać odpowiednie wyposażenie i przygotować się fizycznie i mentalnie do długiej wyprawy.\n•\tSztuka czerpania radości z podróży: Odkryj, jak odnaleźć piękno w codzienności, nawet w chwilach zmęczenia i wyzwań.\n•\tEkologia w podróży: Jak odpowiedzialnie podróżować, nie pozostawiając śmieci w naturze i szanując środowisko.\n•\tPowrót do domu po przygodzie: Jak odnaleźć się w codziennym życiu po tak ekstremalnym doświadczeniu, jakim była piesza wędrówka dookoła Polski.\n•\tSpotkanie autorskie: Zapytaj autorów książki o ich doświadczenia, przygody i refleksje z trasy.\nWarsztaty są idealne dla:\n•\tMiłośników podróży i pieszych wędrówek\n•\tOsób pragnących odkryć piękno Polski\n•\tSzukających inspiracji do realizacji własnych pasji\n•\tZainteresowanych tematyką rozwoju osobistego i pokonywania wyzwań\n•\tWszystkich, którzy chcą czerpać radość z życia i doświadczać nowych rzeczy\nWarsztaty "W drodze do..." to nie tylko okazja do poznania Polski, ale także do odkrycia w sobie siły, pasji i chęci do realizacji marzeń.',
    id: "b27f61a2-c03f-471f-bbcd-9bf91a3efa55",
    instances: [
      {
        dateStart: "2024-07-31T15:00:00.000+02:00",
        dateEnd: "2024-07-31T16:00:00.000+02:00",
        id: "a4b55857-3894-45d8-b75b-d1984ab90e36",
      },
    ],
  },
  {
    event:
      "Dlaczego ludzie migrują? - warsztat\nFundacja Inicjatywa Dom Otwarty",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "W czasie warsztatu porozmawiamy o powodach, dla których miliony ludzi na świecie decyduje się opuszczać swoje domy i jakie wyzwania się w tym wiążą. Skupimy się na migracjach przymusowych między innymi po to, żeby uświadomić sobie jak możemy pomagać m.in. uchodźcom i odpowiedzieć sobie na pytanie czy sami jesteśmy gotowi na integrację z nowymi mieszkańcami naszego kraju.",
    id: "60d3d094-d05b-46a1-ab68-f24e06e884b9",
    instances: [
      {
        dateStart: "2024-07-31T15:00:00.000+02:00",
        dateEnd: "2024-07-31T16:00:00.000+02:00",
        id: "6f8a77de-9513-41fe-8d8e-2d270f3a637e",
      },
      {
        dateStart: "2024-08-02T15:00:00.000+02:00",
        dateEnd: "2024-08-02T16:00:00.000+02:00",
        id: "c8af7a5f-4b39-4453-ad4c-bb386610325f",
      },
    ],
  },
  {
    event:
      "Z głową w chmurach - jak uczyć się samodzielnie?\nFundacja Szkoła w Chmurze",
    place: "Namiot Warsztatowy ASP",
    kind: "Warsztat",
    description:
      "W ramach warsztatu osoby uczestniczące poznają skuteczne techniki przydatne w procesie samodzielnej nauki. Będą także mogły podzielić się swoimi sprawdzonymi sposobami na naukę. Warsztat stworzy także okazję do zidentyfikowania własnych mocnych stron pomocnych w realizacji celów i postanowień (nie tylko tych edukacyjnych!).  \nWarsztat dedykowany jest szczególnie młodzieży oraz chętnym dorosłym. Poprowadzony będzie przez  doświadczoną osobę trenerską.",
    id: "a0d20e85-b378-4455-afbd-7d501b54fbe9",
    instances: [
      {
        dateStart: "2024-07-31T15:00:00.000+02:00",
        dateEnd: "2024-07-31T17:00:00.000+02:00",
        id: "104a5c41-91f9-443e-b79d-ad571612234b",
      },
    ],
  },
  {
    event:
      "Tatuaże z henny - darmowe malowanie słowiańskich wzorów na ciele.\nWioska Słowiańska",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Podczas tych zajęć nadarzy się okazja, aby ozdobić swoje ciało tradycyjnymi słowiańskimi wzorami wykonanymi henną. Warsztaty pozwalają połączyć naukę z zabawą, oferując unikalne, historycznie inspirowane wzory. Tatuaże z henny są darmowe, co sprawia, że każdy może doświadczyć piękna tej sztuki zdobienia ciała.",
    id: "66fdb057-0b46-401f-8676-29dca8cd43bf",
    instances: [
      {
        dateStart: "2024-07-31T15:00:00.000+02:00",
        dateEnd: "2024-07-31T16:00:00.000+02:00",
        id: "d406ed85-425c-4e72-a2a7-4ff612b0de14",
      },
      {
        dateStart: "2024-08-01T15:00:00.000+02:00",
        dateEnd: "2024-08-01T16:00:00.000+02:00",
        id: "17230c8b-5117-45c0-bf08-9c683ba65602",
      },
      {
        dateStart: "2024-08-02T15:00:00.000+02:00",
        dateEnd: "2024-08-02T16:00:00.000+02:00",
        id: "8dc8c30d-cb70-4478-ba3d-b878d7265a1c",
      },
      {
        dateStart: "2024-08-03T15:00:00.000+02:00",
        dateEnd: "2024-08-03T16:00:00.000+02:00",
        id: "318f6e5f-cdd5-4dd8-9c51-aba465c25c56",
      },
    ],
  },
  {
    event:
      "Futbol Amerykański na Pełnym Kontakcie: Tacklowanie z Warsaw Sirens\nStowarzyszenie Kobiecej Drużyny Futbolu Amerykańskiego - Klub Sportowy Warsaw Sirens",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Chcesz poczuć prawdziwą siłę futbolu amerykańskiego? Na tych warsztatach odkryjesz jak bezpiecznie i skutecznie wykonać twz. “tackle”. Z pomocą specjalnego wałka do tacklowania, pokażemy Ci techniki, które pomogą Ci zdominować boisko. Przyjdź i odkryj swoją siłę!",
    id: "ebdec868-475e-4d36-9821-a6216fa74eaa",
    instances: [
      {
        dateStart: "2024-07-31T15:00:00.000+02:00",
        dateEnd: "2024-07-31T16:00:00.000+02:00",
        id: "2eff9581-165c-4158-869f-868d3b53893b",
      },
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T12:00:00.000+02:00",
        id: "1cea679f-5bc3-4412-9d34-8e38fbe4c0e0",
      },
      {
        dateStart: "2024-08-02T13:00:00.000+02:00",
        dateEnd: "2024-08-02T14:00:00.000+02:00",
        id: "0f4dffd1-f837-4340-9d20-af79c3c3e6f7",
      },
      {
        dateStart: "2024-08-03T15:00:00.000+02:00",
        dateEnd: "2024-08-03T16:00:00.000+02:00",
        id: "9b016c9e-a5b7-448a-9255-1c434894d596",
      },
    ],
  },
  {
    event:
      "Prezentacja-Zrozumieć Cyberbezpieczeństwo: Wskazówki dla Całej Rodziny\nCisco Systems Sp. z o.o.",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Czy wiesz, jak chronić siebie i swoich bliskich w cyfrowym świecie? Ta prezentacja odkrywa tajniki cyberbezpieczeństwa, oferując praktyczne porady dla każdej rodziny. Dowiesz się, jak zabezpieczyć swoje urządzenia, unikać cyberzagrożeń i chronić prywatność online. Pokażemy, jak uczyć dzieci bezpiecznego korzystania z internetu. Dołącz do nas i bądź krok przed cyberprzestępcami!",
    id: "6b0ce1fd-c934-4526-98c3-aa3b7fe95c5f",
    instances: [
      {
        dateStart: "2024-07-31T15:00:00.000+02:00",
        dateEnd: "2024-07-31T15:45:00.000+02:00",
        id: "d0612496-2256-4da2-8adb-7f708fb1bcfa",
      },
      {
        dateStart: "2024-08-02T14:00:00.000+02:00",
        dateEnd: "2024-08-02T14:45:00.000+02:00",
        id: "6383f93d-778d-49e3-9dcd-34f86af949c9",
      },
      {
        dateStart: "2024-08-03T13:00:00.000+02:00",
        dateEnd: "2024-08-03T13:45:00.000+02:00",
        id: "c5ed146b-bf68-433c-9312-6e0e50433c22",
      },
    ],
  },
  {
    event: "Co łączy związek w Dwuczynnikowej Teorii Herzberga\nToastmasters",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Czyli o tym co łączy, co musi być a co dobrze by było w relacji byście żyli długo i szczęśliwie. Wykład interaktywny poprowadzi Stanisław Kalicki Coach związków i relacji. Uczy technik tworzenia szczęśliwego życia w związku. Prowadzi warsztaty "Moc Pary dla Pary". Kanclerz Fundacji Już Pomagam, vice prezesem Fundacji Zdrowia ESCO, współzałożycielem Stowarzyszenia na rzecz pomocy dzieciom z chorobami nowotworowymi Pomóż dziecku wyzdrowieć, Stowarzyszenia Krewaktywni.',
    id: "30df2d83-b9c2-4798-a75b-07c62da359d7",
    instances: [
      {
        dateStart: "2024-07-31T15:00:00.000+02:00",
        dateEnd: "2024-07-31T16:00:00.000+02:00",
        id: "fff984b1-76a2-4dc4-b7b0-992a5067d2d3",
      },
    ],
  },
  {
    event:
      "Warsztaty Twórczości: Malowanie Swoich Potrzeb\nBody&Mind Edukacja Rozwój Aktywność Marzena Gajlewicz",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Dołącz do naszych warsztatów, aby wizualnie wyrazić swoje emocje i potrzeby, tworząc unikalne dzieła na chuście za pomocą farb akrylowych i medium. Możesz korzystać z przygotowanych szablonów lub malować według własnych pomysłów. Warsztaty odbywają się w przyjaznej, luźnej formie, co pozwala na swobodną twórczość w określonym czasie, a swoje prace możesz zabrać do domu i praktycznie wykorzystać. Zapewniamy wszystkie materiały oraz wsparcie prowadzących. Zajęcia łączą swobodę twórczą z elementami arteterapii, umożliwiając głębokie doświadczenie barw i emocji w inspirującej atmosferze.",
    id: "65935f6b-4194-48b8-9384-e55fde9794bf",
    instances: [
      {
        dateStart: "2024-07-31T15:00:00.000+02:00",
        dateEnd: "2024-07-31T17:00:00.000+02:00",
        id: "68514b9b-a3fc-4b4d-ab34-4f6abb937b72",
      },
      {
        dateStart: "2024-08-01T15:00:00.000+02:00",
        dateEnd: "2024-08-01T17:00:00.000+02:00",
        id: "75a7f429-6073-4d0a-b6ff-8ded6406d275",
      },
      {
        dateStart: "2024-08-02T15:00:00.000+02:00",
        dateEnd: "2024-08-02T17:00:00.000+02:00",
        id: "3c5f51e8-07cd-490d-888c-029dc7af519c",
      },
      {
        dateStart: "2024-08-03T15:00:00.000+02:00",
        dateEnd: "2024-08-03T17:00:00.000+02:00",
        id: "8deb4b0f-3544-4def-9a5d-66a49b063656",
      },
    ],
  },
  {
    event:
      'Naucz się w protesty  + "Jeden/jedna z dziesięciu" Konkurs wiedzy o historii Ogólnopolskiego Strajku  Kobiet oraz o prawach obywatelskich.\nOgólnopolski Strajk Kobiet',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Rozmowa o rodzajach zgromadzeń publicznych i czynnościach, które należy wykonać, aby zorganizować legalnie zgromadzenie publiczne. Jak poradzić sobie w przypadkach sytuacji drażliwych na wydarzeniach ulicznych. Po dyskusji wprowadzenie do gry konkursu "Jeden/jedna z dziesięciu"- Jest to konkurs wiedzy o historii Ogólnopolskiego Strajku Kobiet oraz o prawach obywatelskich i zgromadzeniach. Nagrodą są wyjątkowe gadżety od My Voice My Choice ❣️',
    id: "1598a140-5102-4dd6-b8b6-1e2f429e9b43",
    instances: [
      {
        dateStart: "2024-07-31T15:00:00.000+02:00",
        dateEnd: "2024-07-31T16:00:00.000+02:00",
        id: "997ede09-7f72-4cf1-a4de-a393733e5116",
      },
      {
        dateStart: "2024-08-03T15:30:00.000+02:00",
        dateEnd: "2024-08-03T16:30:00.000+02:00",
        id: "d5a4fd91-1ebc-422f-ba7e-6d2cfdb07ea1",
      },
    ],
  },
  {
    event: "Rodzicielstwo bez presji.\nProjekt The Presja- Fundacja Z Wyboru",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "„Nie nadaję się do tego”, „Co robię nie tak?”, „ Jestem beznadziejnym rodzicem” „Mam dość” - jeśli masz takie myśli ten warsztat jest dla Ciebie! Podczas spotkania porozmawiamy o tym, czym jest rodzicielstwo i jakie niesie ze sobą wyzwania. Ćwiczenia, które przygotowałyśmy pozwolą Ci spojrzeć z wielu perspektyw na rolę rodzica. Pomogą Ci radzić sobie z myślami, które bywają natrętne i oskarżające. Chcemy byś doświadczył_a tutaj zrozumienia, akceptacji, a także inspiracji rodzicielskiej!\n\nadresaci: rodzice\nprowadzące: Anna Maus i Dorota Burzyńska- psychopedagożka i psycholożka",
    id: "c898298e-bfa6-44bf-9bac-dc5a7e8bb7d3",
    instances: [
      {
        dateStart: "2024-07-31T15:00:00.000+02:00",
        dateEnd: "2024-07-31T17:00:00.000+02:00",
        id: "d54a8f53-1777-4a30-9839-521d05d6d4a4",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T11:00:00.000+02:00",
        id: "23c204d4-3b3a-4363-bc92-c70d2d742fa8",
      },
    ],
  },
  {
    event:
      "Warsztaty zaplecione w wianki - upleć sobie wianek!\nStowarzyszenie MAYE",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Niektórzy z natury plotą trzy po trzy, my zaś z natury pleciemy wianki. Szumiące trawy, polne kwiaty czy dziko rosnące zioła przerabiamy na kolorowe sploty i mamy  przy tym dziki ubaw. Chcesz być na czasie? Samoobsługowa produkcja wianków codziennie.",
    id: "24934c90-ea50-47cb-80ec-31f75d83726c",
    instances: [
      {
        dateStart: "2024-07-31T15:00:00.000+02:00",
        dateEnd: "2024-07-31T15:50:00.000+02:00",
        id: "0f3c5167-6270-4437-a73e-eae3f62e67fe",
      },
      {
        dateStart: "2024-07-31T16:00:00.000+02:00",
        dateEnd: "2024-07-31T16:50:00.000+02:00",
        id: "d9c5b0dd-d19e-494f-99b4-73accd1c8862",
      },
      {
        dateStart: "2024-08-01T15:00:00.000+02:00",
        dateEnd: "2024-08-01T15:50:00.000+02:00",
        id: "f7f3083e-036a-4768-9440-513fd26001ae",
      },
      {
        dateStart: "2024-08-01T16:00:00.000+02:00",
        dateEnd: "2024-08-01T16:50:00.000+02:00",
        id: "2fc29519-2b30-4953-9d8c-a2f7936e5024",
      },
      {
        dateStart: "2024-08-02T15:00:00.000+02:00",
        dateEnd: "2024-08-02T15:50:00.000+02:00",
        id: "ea7ad12b-7305-41c4-b5b4-41ac98c3d511",
      },
      {
        dateStart: "2024-08-02T16:00:00.000+02:00",
        dateEnd: "2024-08-02T16:50:00.000+02:00",
        id: "93d0d902-acd7-41aa-984b-4b7b58e6cf5e",
      },
      {
        dateStart: "2024-08-03T15:00:00.000+02:00",
        dateEnd: "2024-08-03T15:50:00.000+02:00",
        id: "25486e50-1f21-43c1-a99c-f4755add22a5",
      },
      {
        dateStart: "2024-08-03T16:00:00.000+02:00",
        dateEnd: "2024-08-03T16:50:00.000+02:00",
        id: "23be072b-040a-4897-8e20-616a3b963d4b",
      },
    ],
  },
  {
    event:
      "Zarządzanie stresem i emocjami. Spotkanie z terapeutą i trenerem mentalnym Magdą Cieślą\nStowarzyszenie MAYE",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Kto z nas nie odczuwa stresu? Stres towarzyszy nam na każdym kroku. Poznaj więc proste techniki, które pomogą Ci wyciszyć się, zrelaksować i poradzić sobie ze stresem życia codziennego, który nas spotyka w różnych sytuacjach życiowych. Nie pozwól, aby stres kontrolował Ciebie - Ty naucz się kontrolować stres! Warsztaty poprowadzi Magdalena Cieśla - certyfikowana terapeutka i trenerka mentalna.",
    id: "0f463668-293d-4c58-a6f0-e77e6a124a69",
    instances: [
      {
        dateStart: "2024-07-31T15:00:00.000+02:00",
        dateEnd: "2024-07-31T16:00:00.000+02:00",
        id: "a92a8121-8658-45d8-920e-a858067b5959",
      },
      {
        dateStart: "2024-08-01T15:00:00.000+02:00",
        dateEnd: "2024-08-01T16:00:00.000+02:00",
        id: "3e79d90b-8f92-4b33-a3d6-beae2e6022e9",
      },
      {
        dateStart: "2024-08-02T15:00:00.000+02:00",
        dateEnd: "2024-08-02T16:00:00.000+02:00",
        id: "a573788c-1c16-4e4d-b907-84522b10cf32",
      },
      {
        dateStart: "2024-08-03T15:00:00.000+02:00",
        dateEnd: "2024-08-03T16:00:00.000+02:00",
        id: "06d9fce1-73f5-4fb6-8d87-36cd4bdeaa74",
      },
    ],
  },
  {
    event: "Techniki relaksacyjne - Joga Nidra\nStowarzyszenie MAYE",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy na głęboki relaks w Wiosce Beztroskiej! Techniki relaksacyjne - Joga Nidra pomogą Ci rozluźnić całe ciało i uspokoić umysł. To niezapomniane doświadczenie prowadzonej przez instruktora relaksacji pomoże Ci odpocząć i zregenerować się przed kolejnymi festiwalowymi atrakcjami!",
    id: "1ee9d73b-5e5b-4e55-9567-3eb3365b790e",
    instances: [
      {
        dateStart: "2024-07-31T15:00:00.000+02:00",
        dateEnd: "2024-07-31T16:00:00.000+02:00",
        id: "6b764839-c45c-49a8-826b-ef14e9dcb05f",
      },
      {
        dateStart: "2024-08-01T15:00:00.000+02:00",
        dateEnd: "2024-08-01T16:00:00.000+02:00",
        id: "678bc6a3-d882-4409-ac82-b368faae6679",
      },
      {
        dateStart: "2024-08-02T15:00:00.000+02:00",
        dateEnd: "2024-08-02T16:00:00.000+02:00",
        id: "c5389d63-0440-463d-af21-e4fab39c1f1c",
      },
      {
        dateStart: "2024-08-03T15:00:00.000+02:00",
        dateEnd: "2024-08-03T16:00:00.000+02:00",
        id: "4e9da09a-57e8-47a6-bae6-e314fc48e075",
      },
    ],
  },
  {
    event:
      "Kiedy wyrok można odpracować - o karze ograniczenia wolności.\nKrajowa Rada Kuratorów",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Kara ograniczenia wolności jest coraz częściej orzekanym rodzajem kar. Opowiemy Ci czego spodziewać się, jeżeli grozi Ci skazanie na karę ograniczenia wolności. Wyjaśnimy jak ją prawidłowo odbyć i jakie masz prawa i możliwości podczas jej wykonywania. Pomożemy znaleźć Ci wsparcie jeśli podstawą Twoich problemów jest uzależnienie.",
    id: "33a77631-976b-4273-9c56-6954506e2074",
    instances: [
      {
        dateStart: "2024-07-31T15:00:00.000+02:00",
        dateEnd: "2024-07-31T16:00:00.000+02:00",
        id: "0dbad848-ce6b-4a4a-91bc-0f2a9ca66bb4",
      },
      {
        dateStart: "2024-08-01T17:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "5b0ad291-02e2-4d38-b8ff-06d4984a3ded",
      },
      {
        dateStart: "2024-08-03T14:00:00.000+02:00",
        dateEnd: "2024-08-03T15:00:00.000+02:00",
        id: "3d53e265-2cd6-4a5d-87ed-01c95dee90bd",
      },
    ],
  },
  {
    event: "Gry i zabawy oraz quiz o prawie\nIzba Adwokacka w Warszawie",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "W interakcji z gośćmi zgromadzonymi w namiocie będziemy popularyzować wiedzę o prawie karnym, cywilnym i administracyjnym. Quiz przeprowadzony zostanie przez adwokatkę o prokuratorkę w formie zadania pytań. Za trafne odpowiedzi przewidziane są drobne upominki.",
    id: "1a448b20-ac4d-41ec-a35e-6f5598648d8b",
    instances: [
      {
        dateStart: "2024-07-31T15:15:00.000+02:00",
        dateEnd: "2024-07-31T16:15:00.000+02:00",
        id: "e39f6639-7045-44af-b212-b58f1c092731",
      },
    ],
  },
  {
    event:
      "Gry i zabawy oraz quiz o prawie\nStowarzyszenie Prokuratorów Lex Super Omnia",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "W interakcji z gośćmi zgromadzonymi w namiocie będziemy popularyzować wiedzę o prawie karnym, cywilnym i administracyjnym. Quiz przeprowadzony zostanie przez adwokatkę i prokuratorkę w formie zadawania pytań. Za trafne odpowiedzi przewidziane są drobne upominki.",
    id: "b3eaab9b-52eb-4569-bc5d-5e5392d22406",
    instances: [
      {
        dateStart: "2024-07-31T15:15:00.000+02:00",
        dateEnd: "2024-07-31T16:15:00.000+02:00",
        id: "a6978c02-8269-48d5-b7f4-942f9533e268",
      },
    ],
  },
  {
    event:
      "Zdobienie koszulek wzorami ludowymi\nFundacja Rozwoju Społecznego SPINACZ",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Odlotowe warsztaty dla wszystkich. Podczas warsztatów każdy z uczestników stworzy swoją unikatową i wyjątkową koszulkę ze wzorem ludowym swojego regionu. Wystarczy na białej koszulce wymalować coś extra! Z pomocą przyjdą również szablony, wzory i oczywiście animatorki, które z wielką przyjemnością pomogą w tworzeniu oryginalnych regionalnych koszulek. Taką koszulkę należy później zaprasować i gotowe! Można cieszyć się swoją wyjątkową koszulką. Przyjdź z własną jasną koszulką i pokaż wszystkim, z którego regionu Polski jesteś.",
    id: "cc515539-434b-46db-bcfb-a38ce7f86ccf",
    instances: [
      {
        dateStart: "2024-07-31T15:30:00.000+02:00",
        dateEnd: "2024-07-31T17:00:00.000+02:00",
        id: "17736a75-9aa9-45fd-866b-e283150c9b98",
      },
      {
        dateStart: "2024-08-01T13:30:00.000+02:00",
        dateEnd: "2024-08-01T14:30:00.000+02:00",
        id: "2c246aff-0bf0-4385-b44a-b40f60948fc1",
      },
      {
        dateStart: "2024-08-02T11:00:00.000+02:00",
        dateEnd: "2024-08-02T12:30:00.000+02:00",
        id: "8e39cf32-e49c-4811-82b5-f946a5e7835d",
      },
      {
        dateStart: "2024-08-03T18:00:00.000+02:00",
        dateEnd: "2024-08-03T19:00:00.000+02:00",
        id: "fe13b357-bd85-40ad-9246-3b8438f56902",
      },
    ],
  },
  {
    event: 'Warsztaty "Razem wbrew stereotypom"\nFundacja eFkropka',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Warsztat przeciwdziałający dyskryminacji osób chorujących psychicznie. Szkolenie skierowane jest do wszystkich, którzy mogą mieć kontakt z osobami po kryzysie psychicznym.",
    id: "0f450a62-5586-49aa-9511-9f00e6e1e114",
    instances: [
      {
        dateStart: "2024-07-31T16:00:00.000+02:00",
        dateEnd: "2024-07-31T18:00:00.000+02:00",
        id: "aa765f57-0401-4138-b68a-cf1d43880305",
      },
      {
        dateStart: "2024-08-01T15:00:00.000+02:00",
        dateEnd: "2024-08-01T17:00:00.000+02:00",
        id: "d8d57360-c0ab-444c-a12d-e5c2f9c014f5",
      },
    ],
  },
  {
    event:
      "PRAWO I ŻYCIE NA UCHODŹCTWIE W POLSCE\nStowarzyszenie Amnesty International",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy do namiotu Amnesty na rozmowę z ekspertką na temat prawnej i społecznej sytuacji osób żyjących na uchodźctwie w Polsce.",
    id: "cba10643-ed12-4f00-a596-bd4013ac4f55",
    instances: [
      {
        dateStart: "2024-07-31T16:00:00.000+02:00",
        dateEnd: "2024-07-31T17:00:00.000+02:00",
        id: "795dc98a-c009-413c-bcdf-5cb9de50bfae",
      },
    ],
  },
  {
    event: "Medytacja wybaczania i oczyszczania emocji\nStowarzyszenie MAYE",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Medytacja Wybaczania pomaga oczyścić nasze serce z negatywnych emocji, żalu, złości i nienawiści. Pomaga wybaczyć, cokolwiek leży nam na "wątrobie", uwolnić się od tego i poczuć się lepiej! Zapraszamy do Wioski Beztroskiej na to wyjątkowe doświadczenie uwolnienia naszego serca.',
    id: "892e6e77-fbde-4902-ac6b-664352a9be0c",
    instances: [
      {
        dateStart: "2024-07-31T16:00:00.000+02:00",
        dateEnd: "2024-07-31T16:30:00.000+02:00",
        id: "8b81a5ab-7b6c-4829-a513-d6dc05938f6a",
      },
      {
        dateStart: "2024-07-31T17:00:00.000+02:00",
        dateEnd: "2024-07-31T17:30:00.000+02:00",
        id: "813273f9-371d-4255-ae67-2736e32a4783",
      },
      {
        dateStart: "2024-08-01T16:00:00.000+02:00",
        dateEnd: "2024-08-01T16:30:00.000+02:00",
        id: "23c318af-47d1-4698-b98a-69aef46a6349",
      },
      {
        dateStart: "2024-08-01T17:00:00.000+02:00",
        dateEnd: "2024-08-01T17:30:00.000+02:00",
        id: "6e04f380-54e9-41a4-b5b8-d0b59845acc0",
      },
      {
        dateStart: "2024-08-02T16:00:00.000+02:00",
        dateEnd: "2024-08-02T16:30:00.000+02:00",
        id: "184d1c8d-fd27-4c4f-a067-900ceb888cfe",
      },
      {
        dateStart: "2024-08-02T17:00:00.000+02:00",
        dateEnd: "2024-08-02T17:30:00.000+02:00",
        id: "2b81c8d9-05cf-4d70-b116-10453546a40b",
      },
      {
        dateStart: "2024-08-03T16:00:00.000+02:00",
        dateEnd: "2024-08-03T16:30:00.000+02:00",
        id: "5783a863-9f46-414d-a9ff-a89c1fac171e",
      },
      {
        dateStart: "2024-08-03T17:00:00.000+02:00",
        dateEnd: "2024-08-03T17:30:00.000+02:00",
        id: "e7427987-ebce-45ba-8c9b-56f2ac7dc00a",
      },
    ],
  },
  {
    event:
      "Budowanie pewności siebie i niezależności finansowej kobiet\nCelina Wojciechowska Finanse i Ubezpieczenia",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Z pasji do wspierania kobiet w osiąganiu ich celów finansowych, zapraszamy serdecznie na warsztaty pt. "Budowanie pewności siebie i niezależności finansowej kobiet".  Warsztaty są skierowane do kobiet, które pragną zdobyć wiedzę i umiejętności potrzebne do zarządzania swoimi finansami, zwiększenia pewności siebie oraz osiągnięcia niezależności finansowej.\n\nCele warsztatów:\n1. Zwiększenie pewności siebie w zarządzaniu finansami\nPomoc uczestniczkom w zdobyciu pewności siebie i umiejętności, które pozwolą im skutecznie zarządzać swoimi finansami.\n2. Edukacja finansowa\nPrzekazanie praktycznej wiedzy na temat budżetowania, oszczędzania, inwestowania i planowania finansowego.\n3. Wzmocnienie niezależności finansowej: \nWyposażenie uczestniczek w narzędzia i strategie, które pomogą im osiągnąć niezależność finansową.\n\nProgram warsztatów:\n1. Wprowadzenie i inspiracja:\nKrótkie wprowadzenie na temat znaczenia pewności siebie i niezależności finansowej dla kobiet.\nInspirujące historie kobiet, które osiągnęły sukces finansowy.\n\n2. Samopoznanie i pewność siebie:\nĆwiczenia na budowanie pewności siebie i samoświadomości.\nOmówienie barier psychologicznych i społecznych, które mogą wpływać na pewność siebie w zarządzaniu finansami.\n\n3.Podstawy zarządzania finansami:\nWprowadzenie do podstawowych pojęć finansowych: dochody, wydatki, oszczędności, inwestycje.\nĆwiczenia praktyczne dotyczące śledzenia wydatków i tworzenia budżetu domowego.\n\n4. Oszczędzanie i inwestowanie:\nPraktyczne porady dotyczące skutecznego oszczędzania na różne cele finansowe.\nWprowadzenie do inwestowania, omówienie różnych form inwestycji i ich korzyści.\n\n5.Planowanie finansowe na przyszłość:\nTworzenie planów finansowych na krótko- i długoterminowe cele.\nStrategia budowania funduszu awaryjnego i zabezpieczenia przyszłości.\n\n6.Narzędzia i technologie finansowe:\nPrzegląd narzędzi i aplikacji, które mogą pomóc w zarządzaniu finansami osobistymi.\nPraktyczne ćwiczenia z wykorzystaniem tych narzędzi.\n\n7.Networking i wsparcie społeczności:\nZnaczenie budowania sieci wsparcia i wymiany doświadczeń z innymi kobietami.\nĆwiczenia integracyjne i sesje networkingowe.\n\nPodsumowanie i pytania:\nPodsumowanie najważniejszych wniosków z warsztatów.\nSesja pytań i odpowiedzi, aby rozwiać wszelkie wątpliwości uczestniczek i omówić ich indywidualne sytuacje.\n\nKorzyści dla uczestniczek:\n1. Większa pewność siebie: \nUczestniczki zdobędą pewność siebie w zarządzaniu swoimi finansami i podejmowaniu decyzji finansowych.\n2. Praktyczna wiedza finansowa: \nUczestniczki nauczą się, jak efektywnie zarządzać budżetem, oszczędzać i inwestować, aby osiągnąć swoje cele finansowe.\n3. Niezależność finansowa: \nWarsztaty wyposażą uczestniczki w narzędzia i strategie, które pomogą im osiągnąć finansową niezależność i stabilność.\n4. Wsparcie społeczności: \nUczestniczki będą miały możliwość nawiązania kontaktów i wymiany doświadczeń z innymi kobietami, co wzmocni ich sieć wsparcia.',
    id: "ba2b0879-6456-4611-8c9c-991f7bb091d8",
    instances: [
      {
        dateStart: "2024-07-31T16:00:00.000+02:00",
        dateEnd: "2024-07-31T17:30:00.000+02:00",
        id: "6bf4b3ac-5a12-4e81-8805-4ffeb738f35f",
      },
      {
        dateStart: "2024-08-01T16:00:00.000+02:00",
        dateEnd: "2024-08-01T17:30:00.000+02:00",
        id: "78efe0d2-4b39-4f8c-a0a5-820cc6fdfae3",
      },
      {
        dateStart: "2024-08-02T16:00:00.000+02:00",
        dateEnd: "2024-08-02T17:30:00.000+02:00",
        id: "6c2a7194-9552-4e6f-8a21-73dcde9464b9",
      },
      {
        dateStart: "2024-08-03T16:00:00.000+02:00",
        dateEnd: "2024-08-03T17:30:00.000+02:00",
        id: "2a86f512-2dfa-4d80-9850-63211a0e8c5a",
      },
    ],
  },
  {
    event: "Barrier Buster\nPolski Związek Głuchych Oddział Łódzki",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "BarrierBuster to edukacyjna gra symulująca cztery rodzaje niepełnosprawności.\nGra oparta jest na 5 bazach/punktach, z których 4 stanowią symulację różnych rodzajów niepełnosprawności.\nPodczas gry uczestnik otrzymuje kartę i wykonuje cztery zadania, symulujące niepełnosprawność wzroku, słuchu, kończyn górnych i kończyn dolnych. Po zakończeniu zadań każda osoba otrzymuje upominek. Gra powadzona jest między innymi przez osoby z niepełnosprawnościami.",
    id: "a6ee50ed-8b77-46ec-9071-a8d64f034b65",
    instances: [
      {
        dateStart: "2024-07-31T16:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "a9d9ac71-7fcb-414b-8515-c4ed9443d819",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "6dcda696-8dc9-48d9-8648-717b55df33e7",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "34fd49f1-d818-4f47-9203-354b1c900b9c",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T14:00:00.000+02:00",
        id: "fbb83494-ae6e-42a3-b97a-ad8bbb5d961c",
      },
    ],
  },
  {
    event: "Warsztaty lutowania\nFUNDACJA HACKERSPACE KRAKÓW",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      '"Na tych warsztatach zdobędziesz umiejętność lutowania, tak przydatną w przypadku złośliwości rzeczy martwych. Często awaria któregoś z otaczających nas wszystkich przedmiotów elektronicznych polega na popsuciu się jednej części elektronicznej, którą wystarczy wymienić. Pod okiem naszych ekspertów zbudujesz prosty układ elektroniczny, który przy okazji będzie świetnym gadżetem festiwalowym. A w przyszłości być może naprawisz swoje popsute urządzenie.\nZapraszamy zarówno dzieci jak i dorosłych."',
    id: "35321256-4261-4e14-952b-00c3790bfb1d",
    instances: [
      {
        dateStart: "2024-07-31T16:00:00.000+02:00",
        dateEnd: "2024-07-31T17:30:00.000+02:00",
        id: "a4b5cb0f-f769-4283-a4a5-a2e4e2c9b16f",
      },
      {
        dateStart: "2024-08-02T16:00:00.000+02:00",
        dateEnd: "2024-08-02T17:30:00.000+02:00",
        id: "c5b5872b-b6b1-4f6c-a5d3-5be0bb9ce912",
      },
    ],
  },
  {
    event:
      'Jak być przyjacielem przyjaciela w żałobie?\nStowarzyszenie Medyczne Hospicjum dla Dzieci Dolnego Śląska "Formuła Dobra"',
    place: "Strefa Działań Twórczych ASP",
    kind: "Warsztat",
    description:
      "Pracując w hospicjum często spotykamy się z osobami w żałobie. Zauważamy ogromną potrzebę szerzenia wiedzy na temat wspierania osób po stracie. Rodzina i przyjaciele osób w żałobie często chcą służyć pomocą w tym trudnym czasie, jednak nie zawsze potrafią być takim wsparciem, jakiego potrzebuje dana osoba. Spektakl teatralny pt. „Zapowiada się ładny dzień” poprzedzający właściwą część warsztatu, ma unaocznić odbiorcom świat przeżyć i potrzeb osoby w żałobie oraz wskazać ważną rolę otoczenia. Po spektaklu zaplanowaliśmy moderowaną przez pracowników hospicjum, doświadczonych w pracy \nz osobami w żałobie, dyskusja. Publiczność będzie zaproszona do udziału w dyskusji, dla której punktem wyjścia będą m. in. następujące pytania: \n- Jakie są potrzeby osoby w żałobie?\n- Jaka może być rola bliskich osoby w żałobie?\n- Jakie trudności możemy napotkać wspierając osoby w żałobie? Co może być szczególnie trudne w tym procesie?\n- Jak długo powinna trwać żałoba i wsparcie w żałobie?\n- Czy osoba w żałobie powinna zachowywać się „jakoś”? ( W kontekście stereotypów dotyczących przeżywania żałoby).\n- Rozmawiać czy nie rozmawiać o zmarłym?\n- Czy żałobę przeżywamy tylko po śmierci bliskich? (O nieuprawnionych żałobach.)\nNa zakończenie warsztatu uczestnicy otrzymaj zaproszenie na kolejne spotkanie z nami, które będzie jednocześnie formą ankiety zawierającej pytania, na które odpowiedzi zostaną udzielone właśnie podczas kolejnego warsztatu.",
    id: "ef46a6f0-fba2-428b-8e1d-d6d2266ddc69",
    instances: [
      {
        dateStart: "2024-07-31T16:00:00.000+02:00",
        dateEnd: "2024-07-31T17:00:00.000+02:00",
        id: "8a1a2fb3-a0f5-4ee9-9364-9cdceab99814",
      },
    ],
  },
  {
    event: "Not_Q&A_riusz – co notuje notariusz?\nIzba Notarialna w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "W panelu o tym: do jakich czynności prawnych wymagany jest udział notariusza, czy można podpisać dowolną umowę w formie aktu notarialnego, dlaczego notariusze są potrzebni, czy można od notariusza otrzymać informację o wymaganych dokumentach do czynności, testament w formie aktu notarialnego, czy notariusz może złożyć wniosek do sądu wieczystoksięgowego, kto ustala stawki taksy notarialnej i gdzie to sprawdzić, czy notariusz może przyjechać na miejsce czy działa tylko w swojej kancelarii, jakie podatki pobiera od nas rejent, jakie są najrzadsze czynności notariusza, czy notariusz ma oficjalny strój, jak znaleźć notariusza.",
    id: "6a45bd10-fd91-4eac-bc57-a5d25d298fc1",
    instances: [
      {
        dateStart: "2024-07-31T16:00:00.000+02:00",
        dateEnd: "2024-07-31T16:55:00.000+02:00",
        id: "6cd0bc13-7855-4042-85c0-a92a0c2580c2",
      },
    ],
  },
  {
    event:
      "Weź udział w spocie/sesji do kampanii #CzasNaZakaz\nStowarzyszenie Otwarte Klatki",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Napisz z nami dobre zakończenie - weź udział w spocie/sesji do kampanii, którą opublikujemy jesienią #CzasNaZakaz",
    id: "d6012ce6-93cb-49fb-ba5b-02a52bbd3385",
    instances: [
      {
        dateStart: "2024-07-31T16:00:00.000+02:00",
        dateEnd: "2024-07-31T18:00:00.000+02:00",
        id: "51995c19-5f0e-4d45-be26-a8c79eec946c",
      },
      {
        dateStart: "2024-08-01T16:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "692a0251-a1f3-4ff6-b59d-a756c95bd5ec",
      },
      {
        dateStart: "2024-08-02T16:30:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "05e2971f-75c6-44dc-9b4a-7bce9e3a6b9b",
      },
      {
        dateStart: "2024-08-03T14:00:00.000+02:00",
        dateEnd: "2024-08-03T15:00:00.000+02:00",
        id: "a5a9318b-acd6-485c-9a90-0c5ffe3a7268",
      },
    ],
  },
  {
    event:
      "Prezentacja-Zdalna Harmonia: Praca, Życie i Technologia\nCisco Systems Sp. z o.o.",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy na inspirującą sesję dyskusyjną, gdzie wspólnie zastanowimy się nad przyszłością pracy zdalnej, wyzwaniami które przed nią stoją i możliwościami które przed nami otwiera. W ciągu 30 minut przedstawimy fascynujące fakty dotyczące pracy zdalnej oraz praktyczne przykłady, które pomogą Ci wykorzystać ten model pracy jako szansę na bardziej zintegrowane życie – z samym sobą, otoczeniem i społecznością.",
    id: "890a5f96-0a04-4ff5-a231-214bd2929532",
    instances: [
      {
        dateStart: "2024-07-31T16:00:00.000+02:00",
        dateEnd: "2024-07-31T16:45:00.000+02:00",
        id: "f99fe7d9-125d-4f16-9af8-ed3577096cff",
      },
      {
        dateStart: "2024-08-03T14:00:00.000+02:00",
        dateEnd: "2024-08-03T14:45:00.000+02:00",
        id: "7c85be80-e3b2-4580-9ebe-dbc6e610dec9",
      },
    ],
  },
  {
    event:
      "Halo policja? Proszę przyjechać na fejsbuka! Aktywność w sieci, a konflikt z prawem.\nKrajowa Rada Kuratorów",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Warsztaty "Halo policja? Proszę przyjechać na fejsbuka! Aktywność w sieci, a konflikt z prawem" to godzinne spotkanie poświęcone omówieniu prawnych aspektów aktywności w internecie. Uczestnicy dowiedzą się, jakie działania online mogą prowadzić do konfliktu z prawem oraz jakie konsekwencje mogą z tego wynikać. Program warsztatów obejmuje omówienie takich tematów jak mowa nienawiści, cyberprzemoc, naruszenie prywatności oraz ochrona danych osobowych. Poprzez interaktywne ćwiczenia i case studies, uczestnicy nauczą się, jak unikać ryzykownych zachowań w sieci i jak świadomie korzystać z mediów społecznościowych, aby nie naruszać obowiązujących przepisów prawnych. Warsztaty oferują praktyczne wskazówki i strategie, które pomogą w bezpiecznym poruszaniu się w cyfrowym świecie.',
    id: "aabad8c9-dadd-4504-9a6c-6f1cbb5e19ab",
    instances: [
      {
        dateStart: "2024-07-31T16:00:00.000+02:00",
        dateEnd: "2024-07-31T17:00:00.000+02:00",
        id: "4a820afb-5dbd-4b66-aa6f-502a5a9d4554",
      },
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T12:00:00.000+02:00",
        id: "00c5fe43-994d-4193-84e8-4495bc2e494f",
      },
      {
        dateStart: "2024-08-02T13:00:00.000+02:00",
        dateEnd: "2024-08-02T14:00:00.000+02:00",
        id: "ba2a6a69-f9fc-4d27-8bb6-f99744718ac4",
      },
    ],
  },
  {
    event: "Sześcian Prawdy\nAnonymous for the Voiceless",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Sześcian Prawdy to uliczna kampania informacyjna, która w usystematyzowany sposób angażuje przechodniów w rozmowę na temat praw zwierząt i weganizmu. Wykorzystujemy nagrania przedstawiające standardowe praktyki stosowane w hodowli zwierząt, wyświetlane na ekranach, aby ukazać prawdę o hodowli i wykorzystywaniu zwierząt. Większość ludzi finansuje okrucieństwo wbrew wyznawanym przez siebie wartościom moralnym i do tych ludzi chcemy trafić z naszym przekazem - można wyeliminować krzywdzenie zwierząt ze swojego życia.",
    id: "6e444b64-07d4-4b4c-ad44-e3b6b0948536",
    instances: [
      {
        dateStart: "2024-07-31T16:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "ffbd3dc0-6925-41bb-9544-14b94a74fadd",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T13:00:00.000+02:00",
        id: "b63ba937-c91b-4065-865b-3964098dfe5a",
      },
      {
        dateStart: "2024-08-01T16:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "56c454ed-f29b-4bc7-b679-beea06319c39",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T13:00:00.000+02:00",
        id: "102aad7c-d553-4ca2-8945-d91652d7c848",
      },
      {
        dateStart: "2024-08-02T16:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "4057d5a0-25ff-4407-a8f0-209306dca97b",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T13:00:00.000+02:00",
        id: "247a9ec0-c92a-4c0f-b525-553a70982475",
      },
    ],
  },
  {
    event: "Ścianka wspinaczkowa CAMP\nPolish Outdoor Group",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Zapraszamy do Himalayan Camp wszystkich miłośników wspinaczki. Zarówno tych, którzy już nieźle "łoją w ścianie" (i chcą podtrenować do zawodów!), ale także tych, którzy chcą spróbować swoich sił we wspinaczce po raz pierwszy. Mamy dla Was ścianę wspinaczkową, sprzęt asekuracyjny oraz profesjonalne wsparcie naszych instruktorów.',
    id: "8d0bf7d8-b2a4-4e58-b326-dedf3a63a1c3",
    instances: [
      {
        dateStart: "2024-07-31T16:00:00.000+02:00",
        dateEnd: "2024-07-31T19:00:00.000+02:00",
        id: "797d1c45-aec8-4a8f-8967-df8fb0ae13f1",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T14:00:00.000+02:00",
        id: "cac625be-a1ae-4cef-9b10-1b4d05d707e7",
      },
      {
        dateStart: "2024-08-01T15:00:00.000+02:00",
        dateEnd: "2024-08-01T19:00:00.000+02:00",
        id: "b2d172a9-204f-4539-a3a2-ab2943f464de",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T14:00:00.000+02:00",
        id: "4e421f67-4168-417b-bc5c-aaf7f358f4c7",
      },
      {
        dateStart: "2024-08-02T15:00:00.000+02:00",
        dateEnd: "2024-08-02T16:00:00.000+02:00",
        id: "e9a06ea6-206d-4e3e-9670-0f522d0e510d",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T14:00:00.000+02:00",
        id: "11f640c5-5659-483d-8fd2-7f84a8fc023d",
      },
      {
        dateStart: "2024-08-03T15:00:00.000+02:00",
        dateEnd: "2024-08-03T19:00:00.000+02:00",
        id: "65d1a7d4-72c4-4a66-a243-f53f6668b33d",
      },
    ],
  },
  {
    event: "Slackline\nPolish Outdoor Group",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy na slackline - tu możesz poprawić swoją równowagę i wzmocnić mięśnie! Spróbuj swoich sił na linie, napinanej na niewielkiej wysokości. Nie ma lepszego sposobu na poprawę koordynacji i koncentracji niż trening na slack'u!",
    id: "724f18f1-0b7b-4849-b177-1dc990908bb0",
    instances: [
      {
        dateStart: "2024-07-31T16:00:00.000+02:00",
        dateEnd: "2024-07-31T18:00:00.000+02:00",
        id: "64c46606-be80-4eff-b32a-329d75f2211f",
      },
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T19:00:00.000+02:00",
        id: "2a38ca5c-3ced-470b-bc24-9d142668323b",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T19:00:00.000+02:00",
        id: "ab03465d-86c9-467d-a694-e06d830a8433",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T13:00:00.000+02:00",
        id: "80012460-e572-4996-851f-124019898369",
      },
      {
        dateStart: "2024-08-03T15:00:00.000+02:00",
        dateEnd: "2024-08-03T19:00:00.000+02:00",
        id: "e7b35651-1a43-42f6-a082-6314f344acfa",
      },
    ],
  },
  {
    event:
      "Warsztat „Twoje życie - Twój wybór - obalamy mity nt. HIV/AIDS”\nTOWARZYSTWO ROZWOJU RODZINY ODDZIAŁ W ZIELONEJ GÓRZE",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Warsztat pt. „Twoje życie - Twój wybór - obalamy mity nt. HIV/AIDS” dotyczy zagadnień z zakresu medycznych i psychospołecznych aspektów epidemii HIV/AIDS. Uczestnicy będą mogli uzyskać wiedzę na temat problematyki HIV/AIDS i innych chorób przenoszonych droga płciową (STI). Obalane będą mity i stereotypy dotyczące HIV/AIDS/STI. Ponadto podejmowane będą kwestie związane z szacowaniem ryzyka, ryzykownymi zachowaniami w kontekście HIV/AIDS/STI. Omawiane będą również metody profilaktyki, idea poradnictwa okołotestowego a także możliwości wykonania anonimowych i bezpłatnych testów w kierunku HIV czy pomocy i wsparcia dla osób, których omawiane kwestie mogą dotyczyć.",
    id: "9c0ee0f0-6611-4a0b-8f18-f717d2c93069",
    instances: [
      {
        dateStart: "2024-07-31T16:00:00.000+02:00",
        dateEnd: "2024-07-31T17:00:00.000+02:00",
        id: "55f4d3c4-58a1-4ec3-abdf-19c235eb5a7f",
      },
      {
        dateStart: "2024-08-01T16:00:00.000+02:00",
        dateEnd: "2024-08-01T17:00:00.000+02:00",
        id: "40f25c42-8c7b-4757-9075-020ff2d3ae72",
      },
      {
        dateStart: "2024-08-02T16:00:00.000+02:00",
        dateEnd: "2024-08-02T17:00:00.000+02:00",
        id: "39f2ab94-fba7-458d-826f-89e4062c11ae",
      },
      {
        dateStart: "2024-08-03T16:00:00.000+02:00",
        dateEnd: "2024-08-03T17:00:00.000+02:00",
        id: "153e0fce-5cf3-4657-acd4-c668a4cbfcac",
      },
    ],
  },
  {
    event:
      "Face Fitness naturalne rytuały dla pięknej twarzy\nStowarzyszenie MAYE",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Jeśli chcesz zachować swoje piękno jak najdłużej, skorzystaj z okazji aby nauczyć się ćwiczeń Face Fitness! Naturalne rytuały dla pięknej twarzy pomogą Ci  zachować naturalne piękno i zdrowy wygląd!",
    id: "5b4edd85-6164-41b7-93ae-ea0d1edb63ff",
    instances: [
      {
        dateStart: "2024-07-31T16:00:00.000+02:00",
        dateEnd: "2024-07-31T17:00:00.000+02:00",
        id: "0ad65cef-4a95-4001-8bc6-7458bbc88768",
      },
      {
        dateStart: "2024-08-01T16:00:00.000+02:00",
        dateEnd: "2024-08-01T17:00:00.000+02:00",
        id: "5bf128ce-6375-4e27-9881-5dbb5166ff18",
      },
      {
        dateStart: "2024-08-02T16:00:00.000+02:00",
        dateEnd: "2024-08-02T17:00:00.000+02:00",
        id: "7e4cdac3-2b76-4574-8a21-b4fb38cad390",
      },
      {
        dateStart: "2024-08-03T16:00:00.000+02:00",
        dateEnd: "2024-08-03T17:00:00.000+02:00",
        id: "0c1785d6-c42d-4deb-83bc-5a58f81ce448",
      },
    ],
  },
  {
    event:
      "Not_Q&A_riusz – co notuje notariusz?\nOkręgowa Izba Radców Prawnych w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "W panelu o tym: do jakich czynności prawnych wymagany jest udział notariusza, czy można podpisać dowolną umowę w formie aktu notarialnego, dlaczego notariusze są potrzebni, czy można od notariusza otrzymać informację o wymaganych dokumentach do czynności, testament w formie aktu notarialnego, czy notariusz może złożyć wniosek do sądu wieczystoksięgowego, kto ustala stawki taksy notarialnej i gdzie to sprawdzić, czy notariusz może przyjechać na miejsce czy działa tylko w swojej kancelarii, jakie podatki pobiera od nas rejent, jakie są najrzadsze czynności notariusza, czy notariusz ma oficjalny strój, jak znaleźć notariusza",
    id: "009cbaed-07e4-4cbe-82cd-e758bbf4e1e0",
    instances: [
      {
        dateStart: "2024-07-31T16:00:00.000+02:00",
        dateEnd: "2024-07-31T16:55:00.000+02:00",
        id: "7ffdca67-a428-48ab-845b-e233b8deda93",
      },
    ],
  },
  {
    event:
      "„Twoje prawa, nasza sprawa” – prawa człowieka\nBiuro Rzecznika Praw Obywatelskich",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "„Twoje prawa, nasza sprawa” – prawa człowieka. Zajęcia prowadzone na bazie wydanej przez BRPO publikacji i na podstawie spraw, jakie są zgłaszane do Rzecznika Praw Obywatelskich. Warsztat wiedzy obywatelskiej i wszelkich działań na rzecz praw człowieka",
    id: "a14c51e8-b4b0-457f-976b-df4699c8006e",
    instances: [
      {
        dateStart: "2024-07-31T16:00:00.000+02:00",
        dateEnd: "2024-07-31T17:00:00.000+02:00",
        id: "a270006e-0441-4332-be74-9b866a1460ee",
      },
    ],
  },
  {
    event:
      "Malujemy torby pod hasłem “Sztuka. Szacunek. Szaleństwo!”\nUniwersyetet Artystyczny im. Magdaleny Abakanowicz w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Pod okiem osób artystycznych zobaczysz, jak stworzyć unikalne wzory i jak przekształcić zwykłą torbę w prawdziwe dzieło sztuki. Warsztaty promują wartości szacunku i współpracy. Wspólnie będziemy tworzyć w atmosferze akceptacji i wsparcia, gdzie każdy pomysł jest cenny. Otwórz się na nieskrępowaną kreatywność! Dajemy przestrzeń na eksperymentowanie z kolorami, formami i stylami. \n\nNaszym materiałem będą torby, które każda osoba będzie mogła zabrać ze sobą.",
    id: "f01d989c-34c5-44be-b1d1-3dde769391a3",
    instances: [
      {
        dateStart: "2024-07-31T16:00:00.000+02:00",
        dateEnd: "2024-07-31T18:30:00.000+02:00",
        id: "19531d5f-bf7c-44a5-936e-639f5e1e762e",
      },
    ],
  },
  {
    event:
      "Tor przeszkód - Niewidzialny Świat\nFundacja Avalon Bezpośrednia Pomoc Niepełnosprawnym",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy do poznania perspektywy osoby niewidomej i pokonania toru przeszkód stworzonego, aby pokazać z jakimi wyzwaniami w życiu codziennym zmaga się osoba niewidząca. Jak wielkim wyzwaniem może okazać się przejście przez próg, ubranie się czy nalanie kubka wody. Pokonanie toru, ze wsparciem fizjoterapeuty z Fundacji Avalon, uświadomi uczestnikowi, jak ważne jest w wykonaniu prostych czynności to, by ludzie wokół swoim zachowaniem i z powodu nieświadomości nie ograniczali możliwości osoby z niepełnosprawnością. Serdecznie zapraszamy!",
    id: "e035e38f-b99b-4027-8b53-4bef45cabc39",
    instances: [
      {
        dateStart: "2024-07-31T16:30:00.000+02:00",
        dateEnd: "2024-07-31T19:30:00.000+02:00",
        id: "df6bf455-3504-487a-b329-b12b7e3286e3",
      },
      {
        dateStart: "2024-08-01T10:30:00.000+02:00",
        dateEnd: "2024-08-01T13:30:00.000+02:00",
        id: "e71d8384-434f-4e66-b3a5-46854a76e521",
      },
      {
        dateStart: "2024-08-02T17:30:00.000+02:00",
        dateEnd: "2024-08-02T19:30:00.000+02:00",
        id: "8a34b599-46ef-42d4-8392-0196b918691b",
      },
      {
        dateStart: "2024-08-03T10:30:00.000+02:00",
        dateEnd: "2024-08-03T13:30:00.000+02:00",
        id: "db6320a7-b164-4ee1-a80f-730a7488644b",
      },
    ],
  },
  {
    event: "Sound Healing. Warsztaty terapii dźwiękiem.\nStowarzyszenie MAYE",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Dźwięk ma niezwykłą siłę i może dać nam wewnętrzny komfort i poczucie bezpieczeństwa, a nawet mieć działanie lecznicze. Zapraszamy do Wioski Beztroskiej na wyjątkowe zajęcia Sound Healing, czyli warsztaty terapii dźwiękiem.",
    id: "8310924d-bc32-404f-ba3d-cbbd5b110ade",
    instances: [
      {
        dateStart: "2024-07-31T16:30:00.000+02:00",
        dateEnd: "2024-07-31T17:00:00.000+02:00",
        id: "6ab9aa0e-f84d-47a0-ab85-e84d62097ae9",
      },
      {
        dateStart: "2024-08-01T16:30:00.000+02:00",
        dateEnd: "2024-08-01T17:00:00.000+02:00",
        id: "680feaff-5563-43e9-be21-399ea8d1ea82",
      },
      {
        dateStart: "2024-08-02T16:30:00.000+02:00",
        dateEnd: "2024-08-02T17:00:00.000+02:00",
        id: "2ca74475-e4b2-4cbf-9e87-5fb3be77a974",
      },
      {
        dateStart: "2024-08-03T16:30:00.000+02:00",
        dateEnd: "2024-08-03T17:00:00.000+02:00",
        id: "73226d77-f1ba-4d11-b184-c329496c5396",
      },
    ],
  },
  {
    event: "Koło fortuny – przepytaj prawnika\nIzba Adwokacka w Warszawie",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Warsztat ten jest skierowany do uczestników festiwalu, którzy chcą dowiedzieć się jak wygląda wykonywanie zawodu adwokata, prokuratora, sędziego. W trakcie warsztatu adwokaci, prokuratorzy i sędziowie spotkają się w formule otwartej rozmowy z uczestnikami festiwalu. Festiwalowicze będą mieli możliwość zadania pytań prawnikom i bezpośredniego spotkania z nimi. Prawnicy chętnie opowiedzą o tym jak wygląda droga dojścia do każdego z zawodów, a także o tajnikach każdego z nich, ich plusach i minusach. Podzielą się z uczestnikami festiwalu swoimi doświadczeniami zawodowymi, a także tymi dotyczącymi wpływu życia zawodowego na życie prywatne, trudnościami z tym związanymi. W proponowanej formule warsztatu prawnicy udowodnią również możliwość, że mimo tego, iż na co dzień występują zazwyczaj po różnych stronach sporu, przyjaźnie pomiędzy wszystkimi tymi zawodami są możliwe. Ponadto, będzie to doskonała okazja do tego, aby uczestnicy festiwalu przekonali się, że wykonując ww. zawody, prawnicy starają się być blisko ludzi, że każda sprawa to realna historia i każda z nich jest ważna.",
    id: "c226fcd8-4880-4c3a-9046-70e86a324283",
    instances: [
      {
        dateStart: "2024-07-31T16:30:00.000+02:00",
        dateEnd: "2024-07-31T17:30:00.000+02:00",
        id: "91a58354-29e7-4a30-b0ce-48d769440170",
      },
      {
        dateStart: "2024-08-01T16:00:00.000+02:00",
        dateEnd: "2024-08-01T17:00:00.000+02:00",
        id: "5b702670-39fc-4b1c-8efc-232cba0d8f0a",
      },
      {
        dateStart: "2024-08-03T15:30:00.000+02:00",
        dateEnd: "2024-08-03T16:30:00.000+02:00",
        id: "a3d48c8e-8c85-4614-95da-cc4ee05f75b9",
      },
    ],
  },
  {
    event:
      "Koło fortuny - przepytaj prawnika\nStowarzyszenie Prokuratorów Lex Super Omnia",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Warsztat ten jest skierowany do uczestników festiwalu, którzy chcą dowiedzieć się jak wygląda wykonywanie zawodu adwokata, prokuratora, sędziego. W trakcie warsztatu adwokaci, prokuratorzy i sędziowie spotkają się w formule otwartej rozmowy z uczestnikami festiwalu. Festiwalowicze będą mieli możliwość zadania pytań prawnikom i bezpośredniego spotkania z nimi. Prawnicy chętnie opowiedzą o tym jak wygląda droga dojścia do każdego z zawodów, a także o tajnikach każdego z nich, ich plusach i minusach. Podzielą się z uczestnikami festiwalu swoimi doświadczeniami zawodowymi, a także tymi dotyczącymi wpływu życia zawodowego na życie prywatne, trudnościami z tym związanymi. W proponowanej formule warsztatu prawnicy udowodnią również możliwość, że mimo tego, iż na co dzień występują zazwyczaj po różnych stronach sporu, przyjaźnie pomiędzy wszystkimi tymi zawodami są możliwe. Ponadto, będzie to doskonała okazja do tego, aby uczestnicy festiwalu przekonali się, że wykonując ww. zawody, prawnicy starają się być blisko ludzi, że każda sprawa to realna historia i każda z nich jest ważna.",
    id: "bbb1cfe8-0191-4cc0-93bf-c85061b31d68",
    instances: [
      {
        dateStart: "2024-07-31T16:30:00.000+02:00",
        dateEnd: "2024-07-31T17:30:00.000+02:00",
        id: "5f54ca0f-ed6d-4648-bd8c-5d72582ff3e5",
      },
      {
        dateStart: "2024-08-01T16:00:00.000+02:00",
        dateEnd: "2024-08-01T17:00:00.000+02:00",
        id: "4b258c69-ebbb-4440-b1e8-9853ae8edfe0",
      },
      {
        dateStart: "2024-08-03T15:30:00.000+02:00",
        dateEnd: "2024-08-03T16:30:00.000+02:00",
        id: "fd76dcd8-e982-4977-8d15-ca2e93967a05",
      },
    ],
  },
  {
    event: "Kurator - a po co to komu?\nKrajowa Rada Kuratorów",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Warsztaty „Kurator – a po co to komu?”, to godzinne spotkanie poświęcone roli służby kuratorskiej we współczesnym społeczeństwie. Uczestnicy warsztatów otrzymają  odpowiedzi na najczęściej zadawane pytania dotyczące kuratorów sądowych. Omówione zostaną prawa i obowiązki kuratora sądowego oraz cele, do których dąży.  Nie zabraknie również „historii z terenu” oraz czasu na dyskusję i indywidualne rozmowy. Uczestnicy otrzymają praktyczne wskazówki, które pomogą w przypadku konieczności współpracy z kuratorem sądowym.",
    id: "f6726dbd-fefe-4875-b3ea-f94ff868b391",
    instances: [
      {
        dateStart: "2024-07-31T17:00:00.000+02:00",
        dateEnd: "2024-07-31T18:00:00.000+02:00",
        id: "be684293-e3d0-48fa-b5f6-3d4b2ea45639",
      },
      {
        dateStart: "2024-08-02T16:00:00.000+02:00",
        dateEnd: "2024-08-02T17:00:00.000+02:00",
        id: "4085b221-f429-4805-8723-12e6b55a92cb",
      },
    ],
  },
  {
    event: "Gimnastyka Mózgu\nStowarzyszenie MAYE",
    place: "Strefa Działań Twórczych ASP",
    kind: "Warsztat",
    description:
      "Gimnastyka Mózgu to zajęcia ruchowe mające na celu koordynację półkul mózgowych i ogólną poprawę działania mózgu. Na tych warsztatach nauczysz się prostych ćwiczeń, które spokojnie możesz stosować w domu i w ten sposób codziennie trenować swój mózg!",
    id: "528ad6fa-82a3-42f1-b8d5-21c8194ec306",
    instances: [
      {
        dateStart: "2024-07-31T17:00:00.000+02:00",
        dateEnd: "2024-07-31T18:00:00.000+02:00",
        id: "02a5ef17-513e-4d74-b178-cf6ae27bd276",
      },
    ],
  },
  {
    event:
      "Warsztaty dla par budowania relacji – Mosty, mury, a może coś jeszcze\nToastmasters",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Dla par, które mają dobrą relację będzie to przyjemna i pouczająca randka. Dla par w kryzysie refleksja budująca dobrą relację. Oprócz tego, że dowiesz się, zobaczysz, poczujesz jak ważna jest komunikacja poznacie kilka sposobów jak radzić sobie z trudnymi tematami. A ze strony Toastmasters będzie można się  przyjrzeć temu czego nie wiedziałem, że nie umiem, a teraz nawet nie wiem, że umiem dzięki Toastmasters w prowadzeniu szkoleń, warsztatów czy wykładów. Weźcie ze sobą karimatę i coś do pisania. Wykład interaktywny poprowadzi Stanisław Kalicki Coach związków i relacji. Uczy technik tworzenia szczęśliwego życia w związku. Prowadzi warsztaty "Moc Pary dla Pary". Kanclerz Fundacji Już Pomagam, vice prezesem Fundacji Zdrowia ESCO, współzałożycielem Stowarzyszenia na rzecz pomocy dzieciom z chorobami nowotworowymi Pomóż dziecku wyzdrowieć, Stowarzyszenia Krewaktywni.',
    id: "03ad8d1c-7f9d-4a5b-91af-68060804e40b",
    instances: [
      {
        dateStart: "2024-07-31T17:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "f1c846b2-b70f-4985-a451-1915358fc17b",
      },
    ],
  },
  {
    event:
      "Ciało i Umysł\nBody&Mind Edukacja Rozwój Aktywność Marzena Gajlewicz",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy na wyjątkowe zajęcia, które łączą wykłady, dyskusje i zabawę. Naszym celem jest dostarczenie uczestnikom narzędzi do świadomej pracy nad sobą. Poznasz techniki neurogimnastyki, które wspierają samodoskonalenie i rozwijanie wewnątrzsterowności.\nZainspiruj się, zdobywając nowe umiejętności i rozwijając świadome podejście do swojego życia. Dołącz do nas i odkryj, jak skutecznie pracować nad sobą!",
    id: "e699d345-d4d9-48b6-9dec-f0cea922df0a",
    instances: [
      {
        dateStart: "2024-07-31T17:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "57ad2985-37e2-4b26-b737-93ca2eed83c4",
      },
      {
        dateStart: "2024-08-01T17:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "9ad52c39-9ad1-48e8-923c-c6a9810b1239",
      },
      {
        dateStart: "2024-08-02T17:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "223d178d-b5b2-45b0-8f37-27fe2966e1ce",
      },
      {
        dateStart: "2024-08-03T17:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "e77e8061-c572-40d1-a568-951f17119cf7",
      },
    ],
  },
  {
    event:
      "Warsztaty Stone Art - malowanie osobistej mandali na kamyczkach\nStowarzyszenie MAYE",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "W Wiosce Beztroskiej możesz stworzyć swój unikatowy, osobisty design mandali na kamyczkach, która będzie wyjątkową pamiątką z Pol and Rock Festival. Warsztaty są organizowane przez Stowarzyszenie MAYE.",
    id: "919b56d1-f042-4d4c-b19b-49bd0063dc95",
    instances: [
      {
        dateStart: "2024-07-31T17:00:00.000+02:00",
        dateEnd: "2024-07-31T18:30:00.000+02:00",
        id: "3f25879b-f296-47b2-9afa-debe4e7bc4ac",
      },
      {
        dateStart: "2024-08-01T17:00:00.000+02:00",
        dateEnd: "2024-08-01T18:30:00.000+02:00",
        id: "78c15ca1-a663-4fa1-a66e-e06c5653e01e",
      },
      {
        dateStart: "2024-08-02T17:00:00.000+02:00",
        dateEnd: "2024-08-02T18:30:00.000+02:00",
        id: "b366c15c-9d01-4558-a498-d191bde1e85e",
      },
      {
        dateStart: "2024-08-03T17:00:00.000+02:00",
        dateEnd: "2024-08-03T18:30:00.000+02:00",
        id: "3517640d-6698-4533-ae06-875d3888bc9c",
      },
    ],
  },
  {
    event: 'Spektakl "Marzenie Nataszy"\nFundacja Banina',
    place: "Namiot Warsztatowy ASP",
    kind: "Warsztat",
    description:
      "Spektakl oparty jest na tekście dramatopisarki Jarosławy Pulinowicz. Monodram opowiada o świecie współczesnych nastolatków i ogromnej potrzebie miłości. Stanowi punkt wyjścia do rozmowy o kwestiach istotnych w wychowaniu młodych ludzi. Bohaterka – Natasza mieszka w domu dziecka, a chociaż jest nastolatką, już uważa się za dorosłą. Z jednej strony jest twarda i uważa, że potrafi poradzić sobie w życiu, a z drugiej - tak, jak wiele dziewczyn w jej wieku, marzy o wielkiej miłości, o księciu na białym koniu, który podejdzie i powie jej: „Natasza - jesteś najfajniejszą dziewczyną na Ziemi, wyjdź za mnie!”. Tylko jak Natasza z bidula ma rozpoznać miłość? Ona, której nikt nigdy nie przytulił, nie pocałował, nie pogłaskał po głowie, nie wziął z czułością za rękę, za nic nie pochwalił i nie powiedział, że ma piękne oczy? Czy można się dziwić, że myli miłość z troską, z sympatią, ze współczuciem czy litością? I że za wszelką cenę, nie przebierając w środkach, używając metod, jakie zna z „bidulowego” i osiedlowego życia, chcąc zatrzymać przy sobie to, co jest jej drogie? \nWystępuje: Kamila Kucharczak \nReżyseria: Alicja Stankiewicz \nOpieka pedagogiczna: Bartłomiej Miernik \nChoreografia: Marta Rolska",
    id: "ac7f3c73-4427-41cf-9b5f-c752db13c88c",
    instances: [
      {
        dateStart: "2024-07-31T17:00:00.000+02:00",
        dateEnd: "2024-07-31T19:00:00.000+02:00",
        id: "18b8b7c6-eea1-4ec4-bff5-1d0964b3e9d2",
      },
    ],
  },
  {
    event: "Taniec intuicyjny\nStowarzyszenie MAYE",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Intuicyjny taniec zawierający w sobie pozycja i ruchy zaczerpnięte z Hatha jogi, jest to też taniec spontaniczny i bardzo osobisty. Warto spróbować, wyrazić emocje, a jednocześnie odprężyć się i oddać swoje ciało muzyce i tańcowi!",
    id: "847ba72e-9e93-493e-9bc2-4ce0d8411995",
    instances: [
      {
        dateStart: "2024-07-31T17:10:00.000+02:00",
        dateEnd: "2024-07-31T18:00:00.000+02:00",
        id: "83f45340-adcd-497e-bd61-54b97e630e1b",
      },
      {
        dateStart: "2024-08-01T17:10:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "a4dcc792-0cbe-4850-81e6-01de33c25844",
      },
      {
        dateStart: "2024-08-02T17:10:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "40938799-ea0f-41ef-9b3d-e30d7b5b48f9",
      },
      {
        dateStart: "2024-08-03T17:10:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "65398f1f-3f4a-4dc4-adf1-bdbeaebeef94",
      },
    ],
  },
  {
    event:
      "“Bycie (w ruchu) bez presji”\nProjekt The Presja- Fundacja Z Wyboru",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Warsztat ma na celu zbudowanie Twojej świadomości w zakresie gestu, ruchu, przestrzeni, dynamiki ciała, interakcji. Zaproszę Cię do odkrycia jaki jest Twój ruch regeneracyjny, energia z ciała czy powody do nadawania ruchu. Jak się do tego przygotować? Po prostu przyjdź i zaciekaw się...\n\nadresaci: dorośli\nprowadząca: Martyna Nowak - psycholożka",
    id: "369768b7-4f15-41e9-9e8b-2f00ced90a46",
    instances: [
      {
        dateStart: "2024-07-31T17:30:00.000+02:00",
        dateEnd: "2024-07-31T19:30:00.000+02:00",
        id: "41ab14ea-29cb-42c4-a070-35e77813af0f",
      },
      {
        dateStart: "2024-08-01T12:30:00.000+02:00",
        dateEnd: "2024-08-01T14:30:00.000+02:00",
        id: "24f1b751-2736-4774-80c0-bb5f2d6a1419",
      },
      {
        dateStart: "2024-08-03T15:00:00.000+02:00",
        dateEnd: "2024-08-03T17:00:00.000+02:00",
        id: "e890407e-bc63-46e4-bb71-590d596c95e1",
      },
    ],
  },
  {
    event:
      "Spróbowałeś? I co dalej? - prezentacja programu profilaktycznego Fred Goes Net\nKrajowa Rada Kuratorów",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Program wczesnej interwencji skierowany do osób w wieku 13-19 lat, które eksperymentują lub używają szkodliwie substancji psychoaktywnych (narkotyki, alkohol, tzw. dopalacze) i doświadczają związanych z tym problemów.  Program nie jest przeznaczony dla osób używających heroiny lub  uzależnionych od narkotyków. Program ma formę krótkich warsztatów prowadzonych z wykorzystaniem podejścia dialogu motywującego.",
    id: "3d7499f7-20cc-43cd-98f9-0ada505578ff",
    instances: [
      {
        dateStart: "2024-07-31T18:00:00.000+02:00",
        dateEnd: "2024-07-31T19:00:00.000+02:00",
        id: "3dae2b50-f8d9-4c4a-aa3f-d555ca1d956e",
      },
      {
        dateStart: "2024-08-01T15:00:00.000+02:00",
        dateEnd: "2024-08-01T16:00:00.000+02:00",
        id: "88f3934c-cbd4-4967-a828-021447cfd410",
      },
      {
        dateStart: "2024-08-02T11:00:00.000+02:00",
        dateEnd: "2024-08-02T12:00:00.000+02:00",
        id: "c39df894-00d6-4155-aedb-c64fdfb67605",
      },
      {
        dateStart: "2024-08-03T13:00:00.000+02:00",
        dateEnd: "2024-08-03T14:00:00.000+02:00",
        id: "e93e8e0f-2dae-4e57-8841-d81cceef8e72",
      },
    ],
  },
  {
    event: "Jaka to melodia?\nFundacja Rozwoju Społecznego SPINACZ",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Chcesz sprawdzić swoją znajomość piosenek z lat 60., 70. i 80.? Zapraszamy na wyzwanie "Jaka to melodia?" gdzie drużyny będą rywalizować ze sobą zgadując tytuły i autorów kultowych piosenek z pokolenia naszych rodziców i dziadków. Przyjdź samemu lub weź ze sobą znajomych, a dobra zabawa jest gwarantowana!',
    id: "8ed66569-f4bb-4cf0-9be4-bcea0616855e",
    instances: [
      {
        dateStart: "2024-07-31T18:00:00.000+02:00",
        dateEnd: "2024-07-31T19:00:00.000+02:00",
        id: "4a5842bd-c2bb-4185-85ac-e509eb1236db",
      },
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T12:00:00.000+02:00",
        id: "c829c911-b340-4a25-906c-0f931d40219e",
      },
      {
        dateStart: "2024-08-02T15:30:00.000+02:00",
        dateEnd: "2024-08-02T16:30:00.000+02:00",
        id: "8e0a2a5b-b66c-4332-ac6b-b9bf1df676a3",
      },
      {
        dateStart: "2024-08-03T13:00:00.000+02:00",
        dateEnd: "2024-08-03T14:00:00.000+02:00",
        id: "621ae414-f87a-4ea8-ad70-d956361eee59",
      },
    ],
  },
  {
    event: "Pomalujmy o tym\nFundacja Feminoteka",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Brakuje Ci czasem słów, żeby coś wyrazić? A może słowa wydają się nieadekwatne? Czujesz, że czasem Twój głos nie jest słyszalny? Na warsztatach wykorzystamy farby jako medium do wyrażenia siebie i do rozmowy z drugą osobą. Jest to okazja do spojrzenia z innej perspektywy na swój styl komunikacyjny, wyrażania świadomej zgody lub odmowy, do wyznaczania granic i jednocześnie poszanowania autonomii innych, czyli budowania przestrzeni do zrównoważonego dialogu jako bazy do relacji wolnych od przemocy.",
    id: "2257f88b-a558-4bba-bd2f-0e8cdf375062",
    instances: [
      {
        dateStart: "2024-07-31T18:00:00.000+02:00",
        dateEnd: "2024-07-31T19:30:00.000+02:00",
        id: "fefc7da3-3fb6-41f7-a65f-fbec5379a756",
      },
    ],
  },
  {
    event:
      'Rozmowy o zachodzie słońca : "Pan i Pani swoich praw”\nStowarzyszenie Sędziów Polskich  "Iustitia"',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Poznasz różne perspektywy dotyczące równouprawnienia w pracy, edukacji, rodzinie i życiu społecznym. Usłyszysz historie i doświadczenia osób, które na co dzień mierzą się z wyzwaniami i korzyściami równouprawnienia. Wymienimy się pomysłami na to, jak możemy wspólnie budować bardziej sprawiedliwe i równe społeczeństwo. Zaproszeni eksperci oraz uczestnicy dyskusji podzielą się swoimi poglądami i wiedzą, tworząc przestrzeń do inspirującej wymiany myśli. Dołącz do nas i odkryj, jak być "Panem i Panią swoich praw" w dzisiejszym świecie!',
    id: "5682b60a-70f5-41c9-8615-507826e5ad1c",
    instances: [
      {
        dateStart: "2024-07-31T18:00:00.000+02:00",
        dateEnd: "2024-07-31T19:00:00.000+02:00",
        id: "aa22724c-522a-4151-ad67-81903fe71337",
      },
    ],
  },
  {
    event: "Dobranocka\nMiejska Biblioteka Publiczna im. Galla Anonima",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Spotkanie na koniec dnia dla najmłodszych z książeczką na dobranoc o tematyce wyciszającej, relaksacyjnej i dobrym, spokojnym śnie. \nDziałanie ma na celu promocję literatury dziecięcej.",
    id: "ad2c5108-6684-4e6c-8824-29d32c3b69f7",
    instances: [
      {
        dateStart: "2024-07-31T18:00:00.000+02:00",
        dateEnd: "2024-07-31T19:00:00.000+02:00",
        id: "99004447-2bcf-4c46-9eb7-231d2b5cd573",
      },
      {
        dateStart: "2024-08-01T18:00:00.000+02:00",
        dateEnd: "2024-08-01T19:00:00.000+02:00",
        id: "052996e6-d285-455d-bebe-52e4c272b3b1",
      },
      {
        dateStart: "2024-08-02T18:00:00.000+02:00",
        dateEnd: "2024-08-02T19:00:00.000+02:00",
        id: "559429b0-ee18-4b7d-a29d-01c474f5be74",
      },
      {
        dateStart: "2024-08-03T18:00:00.000+02:00",
        dateEnd: "2024-08-03T19:00:00.000+02:00",
        id: "3e78d764-322d-4420-932e-1a7a64852f8a",
      },
    ],
  },
  {
    event: "Drzewo Życia\nFundacja Drzewa Miejskie",
    place: "Strefa Działań Twórczych ASP",
    kind: "Warsztat",
    description:
      "Fundacja Drzewa Miejskie zaprasza na wykład dr. Wojciecha Zarzyckiego, ekologa i dendrologa. \nCo się stanie jeżeli drzew zabraknie? Jak powinniśmy kształtować miasta w czasach zmian klimatu? Kiedy posadzenie drzewa jest błędem? To tylko kilka z pytań, na które odpowiedź znajdziesz podczas wykładu.\nInteresujesz się przyrodą i problem zmian klimatu jest bliski Twemu sercu? A może nie masz o tym zielonego pojęcia i dasz się zaskoczyć i wciągnąć w temat? Tutaj każdy znajdzie coś dla siebie!",
    id: "10ea74a8-854e-4f08-b36a-aaabb0f1e972",
    instances: [
      {
        dateStart: "2024-07-31T18:00:00.000+02:00",
        dateEnd: "2024-07-31T19:00:00.000+02:00",
        id: "cfb1f0c8-8e10-4118-8bdb-b7112871099e",
      },
    ],
  },
  {
    event:
      "ROZMOWY W TOKU\nFundacja Biuro Służby Krajowej Anonimowych Alkoholików w Polsce",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "W naszym namiocie będzie stała skrzyneczka do której możecie wrzucać pytania i interesujące Was tematy dotyczące trzeźwienia i AA.  Rozmowy w tłoku - przestrzeń na luźne rozmowy i próbę odpowiedzi na Wasze zagadnienia.",
    id: "e18ff160-6412-4bf8-86d6-7393b0c7bb98",
    instances: [
      {
        dateStart: "2024-07-31T18:00:00.000+02:00",
        dateEnd: "2024-07-31T19:00:00.000+02:00",
        id: "e004a29c-b843-4e91-b786-998caf2c1a08",
      },
      {
        dateStart: "2024-08-01T16:00:00.000+02:00",
        dateEnd: "2024-08-01T17:00:00.000+02:00",
        id: "d39f0cba-c06a-405c-9096-c6076e141bbb",
      },
      {
        dateStart: "2024-08-02T16:00:00.000+02:00",
        dateEnd: "2024-08-02T17:00:00.000+02:00",
        id: "34e9e2eb-2d95-4037-b5e9-024e3c420d4d",
      },
      {
        dateStart: "2024-08-03T16:00:00.000+02:00",
        dateEnd: "2024-08-03T17:00:00.000+02:00",
        id: "6caec291-c2c0-4a63-9d18-3b5e914fcd95",
      },
    ],
  },
  {
    event: "Tańce integracyjne\nBiuro Rzecznika Praw Obywatelskich",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Tańce integracyjne – Nauka tańców opracowanych na podstawie figur i motywów tanecznych różnych narodów",
    id: "ca4bed37-6b64-4292-a236-67da788bdd1e",
    instances: [
      {
        dateStart: "2024-07-31T18:00:00.000+02:00",
        dateEnd: "2024-07-31T19:00:00.000+02:00",
        id: "1871cd3d-1b3e-4081-a94a-14780f437a17",
      },
      {
        dateStart: "2024-08-03T18:00:00.000+02:00",
        dateEnd: "2024-08-03T19:00:00.000+02:00",
        id: "cabf724b-8b8c-4962-88a9-cf30313ae650",
      },
    ],
  },
  {
    event:
      "Mantra Time klimatyczna przestrzeń wypełniona dźwiękami jogi.\nStowarzyszenie MAYE",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Mantra Time klimatyczna przestrzeń wypełniona dźwiękami jogi. Zapraszamy Cię do Wioski Beztroskiej, do klimatycznej przestrzeni, gdzie możesz śpiewać, tańczyć, grać na instrumentach lub po prostu zanurzyć się w dźwiękach mantr i cieszyć się tą magiczną chwilą.",
    id: "2d4e0aa6-645a-4e94-95fb-bc6c41cdf337",
    instances: [
      {
        dateStart: "2024-07-31T18:30:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "b229b977-69cf-464e-b550-7585f4aac114",
      },
      {
        dateStart: "2024-08-01T18:30:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "5da4cef2-9036-4a72-8a4c-68992e3b4c33",
      },
      {
        dateStart: "2024-08-02T18:30:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "d3946ae1-f24f-4d40-9e2e-7e1d6608fa90",
      },
      {
        dateStart: "2024-08-03T18:30:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "24bf10a5-6aa6-4eca-858d-d4be91aa6a73",
      },
    ],
  },
  {
    event:
      "Prawniczy ESCAPE Room\nKlinika Prawa Wydziału Prawa i Administracji Uniwersytetu Szczecińskiego",
    place: "Namiot Warsztatowy ASP",
    kind: "Warsztat",
    description:
      'Prawniczy Escape Room na PolandRock Festival! Przygotujcie się na niezwykłą przygodę, która przeniesie Was w świat prawa w najbardziej interaktywny i angażujący sposób. Zapraszamy Was na "Prawniczy Escape Room" organizowany w ramach akcji Porady Prawnej Brygady! \nX\nTo wydarzenie, które łączy edukację prawną z dynamiczną i zabawną formą escape roomu, z pewnością zostanie w Waszej pamięci na długo. \nX\nCo na Was czeka? W trakcie naszego spotkania wciągniemy Was w fascynującą historię festiwalowicza, który w swojej retrospekcji powraca do różnorodnych sytuacji ze swojego życia. Wspólnie zmierzymy się z codziennymi problemami prawnymi, jakie mogą spotkać każdego z nas. Waszym zadaniem będzie pomóc mu wydostać się z tych prawnych pułapek, niczym z pokoju zagadek! X\nDlaczego warto? \n* Interaktywność: To nie będą zwykłe warsztaty! Przez cały czas będziecie aktywnie uczestniczyć w rozwiązywaniu prawniczych zagadek, a w nagrodę za aktywność otrzymacie dedykowane gadżety \n* Praktyczna wiedza: Dowiecie się, jak radzić sobie z najczęstszymi problemami prawnymi w codziennym życiu. Nasza Prawna Brygada, składająca się z doświadczonych prawników, dostarczy Wam niezbędnych umiejętności, które od razu będziecie mogli zastosować w praktyce. \n* Sposób prowadzenia zajęć: Angażujące zajęcia, które pozwolą Wam lepiej zrozumieć, jak działa prawo i jak można je wykorzystać na swoją korzyść. To nie wszystko! Na warsztatach będziecie mogli przymierzyć togi prawnicze i poczuć się jak prawdziwi adwokaci czy sędziowie! \n\nX\nCzego się nauczycie?\n- Jak rozpoznawać i unikać najczęstszych pułapek prawnych. \n- Jak skutecznie korzystać z dostępnych środków ochrony prawnej. \n- Jakie prawa przysługują Wam na co dzień i jak je egzekwować. \n\nNasi eksperci są dla Was! Warsztaty będą prowadzone przez doświadczonych prawników, którzy z pasją dzielą się swoją wiedzą. Odpowiedzą na wszystkie Wasze pytania, rozwieją wątpliwości i pokażą, że prawo nie musi być skomplikowane. \n\nX\nW zeszłym roku zainteresowanie przerosło nasze oczekiwania! Nasz namiot ASP był wypełniony po brzegi, co pokazało, że bezpośrednie spotkania i edukacja prawna są kluczowe dla zwiększenia świadomości prawnej. Chcemy kontynuować ten sukces i ponownie dostarczyć Wam wartościowych i inspirujących doświadczeń. \n\nX\nUWAGA! Dla tych, którzy najbardziej zaangażują się w nasze warsztaty, przewidujemy fantastyczne festiwalowe gadżety! Dołączcie do nas w Strefie ASP! To serce edukacyjnych i inspirujących działań PolandRock Festival. Nasze warsztaty prawne idealnie wpisują się w tę atmosferę, oferując Wam możliwość zdobycia cennej wiedzy, która pomoże Wam w codziennych sytuacjach i zainspiruje do dalszego zgłębiania zagadnień prawnych. \n\nNie przegapcie tej wyjątkowej okazji! Zapraszamy serdecznie – z nami prawo stanie się jasne i przystępne dla każdego!',
    id: "a6caafe1-a485-4126-b3ff-1f9c64d837fd",
    instances: [
      {
        dateStart: "2024-07-31T19:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "a0e1b143-6b52-4755-975d-fceb20895fce",
      },
    ],
  },
  {
    event: "Czytanie baśni Słowiańskich\nWioska Słowiańska",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Czytanie baśni Słowiańskich zabierze uczestników w magiczny świat słowiańskich opowieści. Będziemy odkrywać bogactwo słowiańskiej mitologii i folkloru poprzez barwne i pouczające baśnie. Dzieci i dorośli będą mieli okazję posłuchać historii o odważnych bohaterach, tajemniczych stworzeniach i mądrości ludowej, które od wieków kształtowały wyobraźnię Słowian. Wspólne czytanie baśni stanie się okazją do nauki i refleksji nad wartościami, które przekazywane były z pokolenia na pokolenie.",
    id: "1312c2aa-7a89-4293-bbbe-84488aa30efe",
    instances: [
      {
        dateStart: "2024-07-31T19:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "6398c0c7-1687-4fb7-9dbc-abf4386d9f70",
      },
      {
        dateStart: "2024-08-01T19:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "3e94af87-42f0-4ca3-97ab-2c8ecb18d42f",
      },
      {
        dateStart: "2024-08-02T19:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "888a6ffb-70bf-45fe-844d-645d549db893",
      },
      {
        dateStart: "2024-08-03T19:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "1602f59e-b1e0-4997-a35d-8cabc5c9e5ce",
      },
    ],
  },
  {
    event: "Spotkanie z językiem migowym\nFundacja Rozwoju Edukacji Głuchych",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Spotkanie z językiem migowym to cykliczne warsztaty, podczas których uczestnicy będą mieli okazję poznać świat osób głuchych i nauczyć się kilku znaków języka migowego. Te krótkie spotkania to możliwość poznania całkiem nowej kultury Głuchych i zobaczenia świata przez pryzmat wizualno-przestrzennej komunikacji.",
    id: "058c78ca-2bba-4fc6-9c3f-ded3daafb590",
    instances: [
      {
        dateStart: "2024-07-31T19:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "a19d2a06-a746-4b4f-a72c-b05f122a19fb",
      },
      {
        dateStart: "2024-07-31T19:00:00.000+02:00",
        dateEnd: "2024-07-31T20:00:00.000+02:00",
        id: "3ff879cf-26fc-4c17-b4e9-4dfedf02079d",
      },
      {
        dateStart: "2024-08-01T15:00:00.000+02:00",
        dateEnd: "2024-08-01T16:00:00.000+02:00",
        id: "5996baaa-61ba-4129-8885-63c99c9f31b2",
      },
      {
        dateStart: "2024-08-02T15:00:00.000+02:00",
        dateEnd: "2024-08-02T16:00:00.000+02:00",
        id: "91aa6bca-18ae-4472-8f67-1f718d4e0e2f",
      },
      {
        dateStart: "2024-08-02T19:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "578d6645-d36f-4790-a6db-6c958ad37f1a",
      },
      {
        dateStart: "2024-08-03T14:00:00.000+02:00",
        dateEnd: "2024-08-03T15:00:00.000+02:00",
        id: "036e3eb0-3511-4912-8c12-2fbad80b11c4",
      },
    ],
  },
  {
    event: "Stand Up Polska",
    place: "Duży Namiot ASP",
    kind: "Kabaret",
    description:
      "Stand-up Polska to grupa artystów, dla których komedia na żywo jest nie tylko pracą, ale i pasją. Przekuwając swoje doświadczenia, przemyślenia i wątpliwości w występy sceniczne, bawią do łez publiczność w całej Polsce. Ich repertuar łączy w sobie czarny humor, absurd i niecodzienne odniesienia, a jednocześnie skłania do refleksji i pozwala spojrzeć na otaczający nas świat z nowej perspektywy.  \n \n  #kabaret",
    id: "31906aa6-7184-4027-a0f9-ed4c0e372baf",
    instances: [
      {
        dateStart: "2024-07-31T20:00:00.000+02:00",
        dateEnd: "2024-07-31T22:00:00.000+02:00",
        id: "53855e93-2b6e-4058-9efd-951bb7645570",
      },
    ],
  },
  {
    event: "NIE JESTEŚ SAMA (film)\nStowarzyszenie Amnesty International",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Zapraszamy do namiotu Amnesty na pokaz filmu "Nie jesteś sama". Jest to przejmująca historia codziennego życia i zmagań aktywistek ADT na przestrzeni ostatnich kilku lat. Bohaterki filmu, wśród nich Justyna Wydrzyńska i Natalia Broniarczyk, prowadzą od wielu lat heroiczną bezprzemocową akcję bezpośrednią w obronie prawa do aborcji. Justyna Wydrzyńska w 2023 roku stała się bohaterką Maratonu Pisania Listów, globalnej akcji prawnoczłowieczej Amnesty International. Aktywistki ADT będziemy gościć w naszym namiocie w sobotę 03.08.',
    id: "7cd7054d-7beb-4dec-b2d9-3cdfc0c25dda",
    instances: [
      {
        dateStart: "2024-07-31T21:00:00.000+02:00",
        dateEnd: "2024-07-31T22:30:00.000+02:00",
        id: "44b38fa0-245f-452f-9037-4a2830922625",
      },
    ],
  },
  {
    event: "Pokaz Filmu: Woodstock 69'",
    place: "Duży Namiot ASP",
    kind: "Film",
    description: "",
    id: "38abd1ad-5131-44f2-a755-822daa51a3e9",
    instances: [
      {
        dateStart: "2024-07-31T22:10:00.000+02:00",
        dateEnd: "2024-08-01T01:20:00.000+02:00",
        id: "51074229-541b-47a1-8e33-f318419bf0f5",
      },
    ],
  },
  {
    event: "Pokaz Filmu: Woodstock 94'",
    place: "Duży Namiot ASP",
    kind: "Film",
    description: "",
    id: "b9f2c661-c8db-4398-acb7-f74daef92917",
    instances: [
      {
        dateStart: "2024-08-01T02:00:00.000+02:00",
        dateEnd: "2024-08-01T03:40:00.000+02:00",
        id: "25d56281-82fa-459c-b60e-0ec365e4eae2",
      },
    ],
  },
  {
    event: "STREFA PLANETA CHILL - Poranna Yoga",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "19529c4a-d310-47ed-bb46-cf5b3aa343e2",
    instances: [
      {
        dateStart: "2024-08-01T09:00:00.000+02:00",
        dateEnd: "2024-08-01T10:00:00.000+02:00",
        id: "f978b4a2-6ffd-4585-9ab2-97a3f9dd09ec",
      },
      {
        dateStart: "2024-08-02T09:00:00.000+02:00",
        dateEnd: "2024-08-02T10:00:00.000+02:00",
        id: "0631b4e3-cc66-47ab-acda-6cabd082130f",
      },
      {
        dateStart: "2024-08-03T09:00:00.000+02:00",
        dateEnd: "2024-08-03T10:00:00.000+02:00",
        id: "f8956f8e-0a13-46bb-a80d-b2acdc48c3c7",
      },
    ],
  },
  {
    event:
      "Warsztaty mowy inkluzywnej\nMiędzynarodowe Stowarzyszenie Studentów Medycyny IFMSA-Poland",
    place: "Namiot Warsztatowy ASP",
    kind: "Warsztat",
    description:
      "Warsztaty mowy inkluzywnej przeprowadzone przez Trenerkę IFMSA-Poland w ramach Programu Stałego ds. Zdrowia i Praw Reprodukcyjnych, w tym HIV i AIDS (SCORA). Warsztaty będą interaktywną nauką, przeprowadzoną w formie gry, w której będzie można sprawdzić swoją wiedzę w temacie inkluzywności oraz nauczyć się nowych sformułowań i dowiedzieć ciekawostek na temat różnych grup mniejszościowych. Uczestnicy_czki będą mogli dołączyć w każdym momencie, ale zapraszamy do wzięcia udziału w całym szkoleniu oraz do zadawania pytań, bo to dzięki nim można się najwięcej nauczyć!",
    id: "c4c1092a-4d81-4d86-84d8-7a7697efc88d",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T11:00:00.000+02:00",
        id: "9624da2e-37b5-4f61-ad7e-76fb615e5380",
      },
    ],
  },
  {
    event:
      "STREFA PLANETA ZDROWIA - Wydawanie kart EKUZ, konsultacje dot. profilaktyki zdrowia\nNFZ",
    place: "Pomorze Zachodnie",
    kind: "Inne",
    description: "",
    id: "aa78bc31-f987-4ce9-94d1-bfda6b0e6ce3",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "b48aa32a-d8da-4c75-a1b4-5332c267d2ee",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "b89cb5e5-11fa-413c-b10c-47ed8fa8a761",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "f51d84e0-550b-42d3-b696-8c98826a9e0c",
      },
    ],
  },
  {
    event:
      "STREFA PLANETA SPORTU -  Gry plenerowe dla dużych i małych\nDecathlon",
    place: "Pomorze Zachodnie",
    kind: "Inne",
    description: "",
    id: "41a89417-7875-497b-851c-79d03f535edf",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "3991455c-45a6-4d4a-8c36-ba3a26b1fddb",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "6ca68d84-dbb3-4341-88fb-f14817973f18",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "b95dc409-550a-4331-820d-3424b10d5bab",
      },
    ],
  },
  {
    event:
      "STREFA PLANETA NORTH&ROCK - warsztaty „naprawiaj nie wyrzucaj”, dmuchaniec dla najmłodszych\nNorth.pl",
    place: "Pomorze Zachodnie",
    kind: "Inne",
    description: "",
    id: "d073af23-956d-4242-bec7-4e32242e89a1",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "4df68756-6f05-49d6-b1ed-1cc3ce8434b0",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "9516ce03-52e1-4778-8fbc-8a747970b3e1",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "9817300a-80b8-4199-86ab-ba12ceb4c2af",
      },
    ],
  },
  {
    event: "STREFA DZIECIĘCA GWIAZDA - Komety kwietne\nCZOK",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "942509c8-4daf-4c10-9561-848c33d88a27",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T11:00:00.000+02:00",
        id: "7e27464b-e786-4b74-97e4-653b37cd642e",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T11:00:00.000+02:00",
        id: "1b73d5f9-1de9-42a8-9269-4c79309dfac5",
      },
    ],
  },
  {
    event: "Strefa Bezpiecznego Internetu\nNASK - Państwowy Instytut Badawczy",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Pierwszego dnia Festiwalu w pawilonie NASK dowiesz się o najpopularniejszych metodach ataków na Twoją tożsamość, Twoje pieniądze i Twoje kontakty. Drugiego dnia będziemy rozmawiać o dezinformacji. Pokażemy przykłady fałszywych informacji, które rozchodzą się w sieci. Poznasz techniki manipulacji oraz sposoby, jak się przed nimi bronić. Podzielimy się również narzędziami do weryfikacji treści. Będziesz też mógł zagrać w grę Bad News Game stworzoną przez Uniwersytet w Cambridge. Dowiesz się, jak chronić pocztę elektroniczną, telefon oraz konto w banku. Podpowiemy również, gdzie zgłaszać podejrzane strony. Trzeciego dnia pawilon NASK stanie się strefą edukacji cyfrowej. Będziemy mówić o korzystaniu z mediów społecznościowych i uzależnieniu od internetu. Dowiesz się, co zrobić, aby czuć się dobrze, korzystając z nowoczesnych technologii. Przez wszystkie dni na dachu naszego pawilonu pokażemy nasz system do monitorowania jakości powietrza. Obok będziesz mógł zrobić sobie panoramiczne zdjęcia na tle pola festiwalowego.",
    id: "3d893b67-0273-4fa5-a6e2-7709a436dcb1",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "5188edd4-f863-476b-8277-df11d57ba466",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "d52a65a3-13d7-4023-9ffd-e006b4f40caf",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "d50b0076-c878-4b45-90c7-a5fa7b04ea03",
      },
    ],
  },
  {
    event: "Calluna Trip",
    place: "Duży Namiot ASP",
    kind: "Spotkanie",
    description:
      "Aga i Bartek Wrzosek – duet podróżników, kórzy porzucili swoje dotychczasowe życie, aby wyruszyć w podróż życia 50-letnim busem, Volkswagenem T2 z 1972 roku. Przez 10 miesięcy przemierzali Amerykę Północną, od Wielkich Jezior Kanady po kalifornijskie pustynie. Spotkanie z nimi otworzy tegoroczne spotkania ASP.  \n \n  #ASP",
    id: "755c8ac8-37fb-4eb1-b092-b227ff72c3ba",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T11:20:00.000+02:00",
        id: "82e147bf-b1ac-457d-b1b0-d523592765eb",
      },
    ],
  },
  {
    event:
      "STREFA PLANETA ZDROWIA - Co Ci leży na wątrobie? - badania profilaktyczne\nInvestmed",
    place: "Pomorze Zachodnie",
    kind: "Inne",
    description: "",
    id: "7f1ad86f-b21d-4b8d-b7fd-1a48833b6ba1",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "460cd8c0-86e2-4dbb-9073-bd917586ee65",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "b40bfe3d-3483-4f9a-9d27-027e3169694d",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "3f4582f3-c8e8-4c50-bf2c-187c1b56f570",
      },
    ],
  },
  {
    event:
      "Rejestracja potencjalnych Dawców szpiku - Fundacja DKMS\nFundacja DKMS",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Dlaczego Twoja rejestracja jest ważna? Na świecie co 27 sekund, a w Polsce co 40 minut jedna osoba dowiaduje się, że choruje na nowotwór krwi. Często jedyną szansą na wyleczenie jest przeszczepienie szpiku od niespokrewnionego Dawcy. O przeszczepieniu decyduje zgodność cech tkankowych, których jest ponad 13 000 i mogą występować w milionach kombinacji. To właśnie sprawia, że poszukiwania są tak trudne. Na całym świecie jest ponad 40 milionów potencjalnych Dawców szpiku, ale nadal nie wszyscy Pacjenci mogą liczyć na znalezienie zgodnego Dawcy. \n\nByć może to właśnie Ty uratujesz życie swojemu bliźniakowi genetycznemu! Współpraca Fundacji WOŚP i Fundacji DKMS dała drugą szansę na życie już blisko 140 osobom z całego świata! Chcesz dołączyć do grona osób, które dzieląc się cząstką siebie ofiarowały komuś drugie życie? Dołącz do nas! Jak to zrobić? Znajdź dla nas 10 minut :). Tyle wystarczy, aby połączyć Twoją miłość do muzyki z byciem do szpiku ...dobrym",
    id: "53df4667-ad00-4eac-87f5-6f38a0959c04",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "7676752c-5561-4ab9-9c41-a9d350ca2e9f",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "c5964964-cd14-4640-b748-030e66c02765",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T21:00:00.000+02:00",
        id: "b8ed6727-2b70-4c7c-8176-458dc9491060",
      },
    ],
  },
  {
    event: "Strefa CHILL OUT\nPolish Outdoor Group",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy na wygodne leżaczki, z których nie tylko dobrze widać ścianę wspinaczkową i świetnie się tu kibicuje na zawodach. Można także wziąć udział w twórczych warsztatach DIY, nauczyć się tworzenia festiwalowych wianków, wziąć udział w konkursach z nagrodami albo...zrelaksować się u masażysty:) Zajęcia odbywają się w trybie ciągłym. Codziennie coś nowego. Przyjdź i przekonaj się!",
    id: "4de035ad-0449-4b4b-a752-f736e2900650",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "5c9b8e11-c7cf-4b1f-9a9d-125e22207947",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "cbaadf6e-2a90-4966-b92a-ef8f7251b4ee",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "cc0080d4-5230-48b1-9a01-1428ab62f7d8",
      },
    ],
  },
  {
    event:
      "STOP ZABIJANIU CYWILI w GAZIE\nStowarzyszenie Amnesty International",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "W czwartek 01.08, skupimy się na sytuacji Palestynek i Palestyńczyków, polityce apartheidu rządu Izraela i metodycznie realizowanej katastrofie humanitarnej wymierzonej w cywili w Strefie Gazy. Przez cały dzień zachęcamy do podpisywania petycji, samodzielnego wykonania przypinki/badża poświęconego osobom w Gazie. Od godz. 11-13 zapraszamy na malowanie plakatów poświęconych Palestynkom i Palestyńczykom w Gazie i wzywających do zawieszenia broni. O godz. 13 – dialog o prawach człowieka w konfliktach zbrojnych (w kręgach porozmawiamy o katastrofie humanitarnej, o potrzebie międzynarodowej solidarności, i o szansach na rozejm).",
    id: "bfdc5b1c-316b-41c0-aee9-6872e90ad28f",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "99f4cfee-5c00-4dcc-9802-fda43f72661c",
      },
    ],
  },
  {
    event:
      "STREFA PLANETA ZDROWIA - Płuca po pandemii – badania profilaktyczne\nSzGiCHP Koszalin",
    place: "Pomorze Zachodnie",
    kind: "Inne",
    description: "",
    id: "bda7788d-9f09-4f61-91d3-5ebb96091dd9",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "8e9f1e7e-672e-473f-a97e-c7685fcb77c9",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "d9e94046-0b70-496b-aea3-199b4f10b365",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "0b2e56bf-0860-4037-9109-1f04a73c0a99",
      },
    ],
  },
  {
    event:
      "STREFA KONSTELACJA NAUKI - Wyścigi pojazdów solarnych, warsztaty, animacje z wykorzystaniem VR, kosmiczne roboty\nZachodniopomorski Uniwersytet Technologiczny",
    place: "Pomorze Zachodnie",
    kind: "Inne",
    description: "",
    id: "a2f1a45b-c1cc-444f-b3e6-6d93feb210a4",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "db3f5e6e-c3fb-4d77-a05b-3c22f6461663",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "f78dba5d-f230-4742-9b98-b13a71560071",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "6c8aca40-e5f6-4c2c-83f3-b4e518f068ad",
      },
    ],
  },
  {
    event:
      "Bezpłatna diagnostyka AZS i łuszczycy w DERMABUSIE\nAMICUS Fundacja Łuszczycy i ŁZS",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Serdecznie zapraszamy na wyjątkową akcję zdrowotną! Specjalista dermatolog będzie diagnozował pacjentów pod kątem AZS i łuszczycy, a w mobilnym punkcie infolinii PSOs będzie można uzyskać szczegółowe informacje o dostępnych ośrodkach, wsparciu oraz edukacji na temat leczenia i profilaktyki tych chorób.\n\nAkcję organizuje AMICUS Fundacja Łuszczycy i ŁZS. \n\nCo Oferujemy?\n\n- Diagnoza łuszczycy przez dermatologa: Osoby, u których zostanie potwierdzona diagnoza łuszczycy, otrzymają pełne wsparcie informacyjne oraz zostaną skierowane do odpowiednich ośrodków referencyjnych.\n- Konsultacje: Wszystkie konsultacje w ramach projektu DERMABUS są bezpłatne. Kwalifikacją na konsultacje zajmują się wolontariusze Fundacji AMICUS w dniu akcji.\n\nJak Skorzystać?\n\nAby skorzystać z konsultacji, wystarczy pojawić się na miejscu i zarejestrować się u naszych wolontariuszy. \n\nWięcej informacji na temat kolejnych terminów wyjazdów DERMABUSA można znaleźć na stronie www.dermabus.pl.\n\nSerdecznie zapraszamy!",
    id: "8ccb043a-3d27-4dd0-8c9b-1958b0300c34",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T13:00:00.000+02:00",
        id: "c59658c4-1214-4003-b3ae-b31ed5931895",
      },
      {
        dateStart: "2024-08-01T14:00:00.000+02:00",
        dateEnd: "2024-08-01T16:00:00.000+02:00",
        id: "d8446cc7-f861-47a8-8069-d45c938644da",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T13:00:00.000+02:00",
        id: "03d69846-0e50-4e18-8bb6-a85d2279f9d6",
      },
      {
        dateStart: "2024-08-02T14:00:00.000+02:00",
        dateEnd: "2024-08-02T16:00:00.000+02:00",
        id: "26b74671-a431-4b86-a524-e964e60007ce",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T13:00:00.000+02:00",
        id: "446cd1ff-d280-4f73-9c33-59833189d33a",
      },
    ],
  },
  {
    event: "Jak tanio podróżować?\nWyprawomaniak.pl",
    place: "Strefa Działań Twórczych ASP",
    kind: "Warsztat",
    description:
      "Wyprawomaniak.pl to portal dla ludzi, którzy chcą zwiedzać Polskę.  Za darmo udostępniamy opisy atrakcji turystycznych, które są ułożone w gotowy trasy. Warsztaty pokazujące jak tanio podróżować po Polsce z wykorzystaniem wyrawomaniak.pl  Pokażemy jak znaleźć miejsca warte odwiedzenia, jak szukać dzikich miejsc na biwak, czy gdzie nabrać wody oraz zrobić pranie. \nPodpowiemy jak w łatwy sposób przerobić Twoje auto na mini kampera. jak zaplanować budżet wyjazdu i na co zwracać uwagę.  podpowiemy jak szukać tanich lub darmowych atrakcji turystycznych",
    id: "c1073eeb-1f15-41a7-b785-ef60ef3bbd50",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T11:00:00.000+02:00",
        id: "bd9eb2e8-c2d7-4f2f-99be-1516fb151153",
      },
    ],
  },
  {
    event:
      "STREFA POZNAJ POMORZE ZACHODNIE - Informacja turystyczna i spotkania z historią",
    place: "Pomorze Zachodnie",
    kind: "Inne",
    description: "",
    id: "94c707a2-cb0f-4b47-95c1-9bdbbc85880c",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "27a013f7-b9bc-4a32-875e-13caf6b143f8",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "db9e971f-9a17-40e6-af5d-fa12b8c3ac87",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "5598905f-9c20-4336-839e-2b17a5acda2b",
      },
    ],
  },
  {
    event:
      "STREFA PLANETA SPORTU -  Piłkarski tor przeszkód\nPogoń Football School",
    place: "Pomorze Zachodnie",
    kind: "Inne",
    description: "",
    id: "8a33d79a-24a5-4d53-9c11-0766c9efd206",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "7727f378-7332-4a55-847d-bfeb3457a177",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "3a63ca84-e1ad-4bf2-8ba5-a4ac1bf07ad6",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "1627dd53-0b4c-452d-9bb2-e449a1265319",
      },
    ],
  },
  {
    event:
      "STREFA KOSMICZNA PRACOWNIA - Warsztaty malowania festiwalowych flag\nMBP Borne Sulinowo",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "b15b92b1-c9bb-476b-b311-aeda73c3f74b",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T13:00:00.000+02:00",
        id: "627973be-34ba-4c0a-a337-765af300de5b",
      },
    ],
  },
  {
    event:
      "Otyłość olbrzymia, czyli jak schudłam z NFZ 60 kilogramów - krok po kroku. Ty też to możesz zrobić.\nToastmasters",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Otyłość olbrzymia, czyli jak schudłam z NFZ 60 kilogramów - krok po kroku. Ty też to możesz zrobić.",
    id: "2ab59714-0035-4376-ad01-34f4fca2290a",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T11:00:00.000+02:00",
        id: "6413286e-5469-4c7a-97a3-b2e4c71984ba",
      },
    ],
  },
  {
    event: "Trening spokojnego oddechu\nSpółdzielnia Socjalna Nowe Horyzonty",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Podczas spotkań informacyjno-edukacyjnych zamierzamy: - przeprowadzić mini wykład na temat inhalacji, - poprowadzić trening oddechowy, - oferować test spirometryczny badający pojemność oddechową. - poprowadzić warsztaty o profilaktyce zdrowia i inhalacjach solankowych w kontekście wdrażanej przez nas innowacji, - przekazać podstawową wiedzę odnośnie naszej autorskiej innowacji opartej na budowie inhalatorium i wewnętrznych tężni. Innowacja opisuje nowatorskie metody wspierania zdrowia (inhalacje i treningi oddechowe dla osób po covid19 i innych zagrożonych schorzeniami płucnymi). Z pomocą inspirujących trenerów i materiałów warsztatowych zamierzamy zainteresować gości ASP tematyką zdrowia psychosomatycznego i terapii płucnej. W ramach naszych działań będziemy też oferować test spirometryczny badający pojemność oddechową płuc zainteresowanych osób. Całościowa koncepcja miniwykładu i warsztatów "NA ZDROWIE" dotyczy zrealizowanej z PCG Polska Sp. z o.o. innowacji łączącej społeczność gminną przy wspólnej budowie tężni. Po krótkim omówieniu TES, czyli Tężnii Energii Społecznej, kompleksowego modelu aktywizowania lokalnych zasobów (ludzkich i materialnych) bazując na integracji społecznej celem wdrażania nowoczesnej technologii do terapii płucnej i prowadzenie szeroko rozumianej profilaktyki zdrowia. Innymi słowy, TES polega na budowaniu siłami społecznymi z pomocą partnerskich organizacji (np. OPS i NGO) pajęczyny społecznego wsparcia celem szerzenia profilaktyki zdrowia. Cała koncepcja skupia się wokół wspólnego budowania tężni i inhalatorium. Innowacja społeczna „TES” jest rezultatem modelowej współpracy i wykorzystania lokalnego potencjału wielu podmiotów, które rozumiejąc główny problem i potrzebę lokalną, uruchomiły swoje zasoby, aby włączyć je w realizację tego unikalnego przedsięwzięcia. W tym konkretnym przypadku mamy do czynienia z inwestycją społeczną, która zmobilizowała różne środowiska, instytucje i organizacje do skoordynowanych działań.',
    id: "0f4fa3ab-435e-4941-b101-2ffe4b2da5a7",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T11:00:00.000+02:00",
        id: "e608ebe7-e2f2-490a-97c6-089a59c6898f",
      },
    ],
  },
  {
    event: "Zawodowe Tricki\nPolish Outdoor Group",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Stawiamy na rozwój! W specjalnej strefie, odbywać się będą spotkania z doradcami, którzy na co dzień profesjonalnie zajmują się…poszukiwaniem odpowiedzi na nurtujące wiele osób pytanie: co chcę, co mogę i co powinienem w życiu robić? A więc, pomagać będą odnaleźć się wszystkim tym, którzy poszukują własnej drogi rozwoju i potrzebują fachowego wsparcia! \nTakże osoby, które obecnie poszukują pracy, ale nie mogą na tym polu odnieść sukcesu, mogą skorzystać z takiej porady. Doradcy pomogą wskazać obszary do rozwoju, podpowiedzą jak skutecznie szukać interesującej pracy. Spotkania pozwolą wzmocnić pewność siebie i skorzystać z cennych porad dotyczących tego jak wybrać i kształtować swoją ścieżkę rozwoju.",
    id: "3ce0f971-d326-4e36-82a3-b9ce5fd099ed",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "aa4b5f5d-3254-4db5-8eba-b486016c30e8",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "a75197c7-e99a-468f-83e5-ab5b7a6ea469",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "daaf0697-5c15-4575-89e5-7e5581996e7f",
      },
    ],
  },
  {
    event: "Graffiti Jam\nMurall.Studio",
    place: "Pomorze Zachodnie",
    kind: "Inne",
    description: "",
    id: "0ed552ab-e196-4db2-9ef9-2eef1a064850",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "71dc974d-aa31-48dd-9ab9-be23276ab3cd",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "d1fea293-4b9e-4bb9-a7c9-878a828d828f",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T13:00:00.000+02:00",
        id: "a6bb4a6c-9e81-4b72-970e-7c65bacd3bbe",
      },
    ],
  },
  {
    event:
      "STREFA PLANETA ZDROWIA - Męskie zdrowie – badania profilaktyczne\nFizjosport",
    place: "Pomorze Zachodnie",
    kind: "Inne",
    description: "",
    id: "983ae436-2e3b-4440-b276-78e246b80340",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "513fbaca-1812-4367-8977-0cfeee65d557",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "ba18b073-1ddf-4ee6-9097-78c16a7af2d9",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "b7337b71-a322-4ca2-9bb6-571d608a378b",
      },
    ],
  },
  {
    event: "STREFA PLANETA SPORTU - Zumba\nDecathlon",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "8c1b8b34-a99c-422e-943b-e9be43e81be4",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T11:00:00.000+02:00",
        id: "74da27ef-583d-45e6-bf96-d36e7a8fb7a4",
      },
    ],
  },
  {
    event: "STRAGAN IDEI\nStowarzyszenie Kongres Kobiet",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Przez wszystkie dni na naszym stoisku będzie STRAGAN IDEI czyli stanowisko z materiałami i\nporadnikami Stowarzyszenia Kongresu Kobiet, Lubuskiego Stowarzyszenia Na Rzecz Kobiet BABA,\nFederacja na Rzecz Kobiet i Planowania Rodziny Federa, Femioteka i inne.",
    id: "f339e604-00bb-49a6-a618-e3e32a193ca6",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "29488b63-306c-4e78-bc8e-60c8aa0dc149",
      },
    ],
  },
  {
    event:
      "Warsztaty Malowania i Zdobienia Koszulek oraz Eco Toreb na Pol'and'Rock 2024\nGmina Czaplinek",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy wszystkich uczestników Pol'and'Rock 2024 do wzięcia udziału w kreatywnych warsztatach malowania i zdobienia koszulek oraz eco toreb! To wyjątkowa okazja, aby stworzyć unikalną pamiątkę z festiwalu, którą będzie można dumnie nosić na co dzień. Planuje użyć się 2000 sztuk koszulek i 2 000 sztuk toreb. Co Czeka na Uczestników?  Każdy uczestnik otrzyma białą koszulkę lub eco torbę, którą będzie mógł ozdobić według własnego projektu. Dostępne będą różnorodne materiały plastyczne, jak markery oraz farbki do tkanin.  Stworzony przez siebie przedmiot będzie niepowtarzalnym wspomnieniem z Pol'and'Rock 2024. \nDlaczego Warto Wziąć Udział?  Możliwość wyrażenia siebie poprzez własnoręcznie stworzony projekt. Pamiątka na lata: Koszulka lub torba ozdobiona własnym wzorem będzie wyjątkowym przypomnieniem o festiwalu. Eko i kreatywnie: Promowanie ekologicznych rozwiązań poprzez wykorzystanie eco toreb. Integracja i zabawa: Tworzenie w grupie sprzyja nawiązywaniu nowych znajomości i wspólnej zabawie. Dołącz do nas na Pol'and'Rock 2024 i stwórz niepowtarzalną pamiątkę, która będzie przypominać Ci o tym wyjątkowym wydarzeniu przez lata!",
    id: "e9fff952-e98f-4f95-9186-a0416a4fc838",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "50abbfc1-eecd-48e1-a352-52108e3a3ed5",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "2e7d633d-604a-4ac2-8846-3875ca7afecc",
      },
    ],
  },
  {
    event:
      "STREFA PLANETA ZDROWIA - analiza składu masy ciała, pomiar ciśnienia tętniczego krwi, warsztaty z narko- i alkogoglami\n(GIS WSSE)",
    place: "Pomorze Zachodnie",
    kind: "Inne",
    description: "",
    id: "151bcb16-2fa0-4bd2-bc2a-78aefeb4c1d0",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "bf4c4264-821a-46a3-a88d-d1e56e2253e5",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "ade86a48-85ea-484f-b872-daffa0720727",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "4de75eb0-13ba-4453-acc7-f650c4bf74af",
      },
    ],
  },
  {
    event:
      "STREFA KONSTELACJA NAUKI - Kamera szybkoklatkowa, robopies, energia słońca i wiatru\nPolitechnika Koszalińska",
    place: "Pomorze Zachodnie",
    kind: "Inne",
    description: "",
    id: "5adbeaad-b5f7-43c8-953c-0c0a099d11e6",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "421a9068-1181-496a-abc0-913ddf2d1458",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "25404ea5-b9bd-48fe-a6d4-5b85735b19cf",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "98d8501b-312f-4722-804b-213588c0c699",
      },
    ],
  },
  {
    event: "Czy to już czas na pomoc?\nProjekt The Presja- Fundacja Z Wyboru",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Uczestnicy warsztatu dowiedzą się na jakie znaki ostrzegawcze zwracać uwagę w swoim ciele. Poprzez ćwiczenia będą mogli nauczyć się rozpoznawać sygnały, jakie z nich płyną i o czym mogą „mówić”. Oprócz tego dowiedzą się, czego może doświadczać osoba w kryzysie oraz jak ją wspierać i jej towarzyszyć. Nasi prowadzący zapewnią Wam atmosferę sprzyjająca zadawaniu pytań, które często bywają trudne lub pozostają bez odpowiedzi.\n\nadresaci: dorośli\nprowadzący: Wojciech Wychowaniec i Marcin Pawelec- terapeuci w procesie certyfikacji",
    id: "38a33c53-8b73-4a6a-aa7d-87aff3dc7e1b",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T12:00:00.000+02:00",
        id: "2022a26f-8d30-4492-95b4-0f92b5de46b6",
      },
      {
        dateStart: "2024-08-02T15:00:00.000+02:00",
        dateEnd: "2024-08-02T17:00:00.000+02:00",
        id: "7758a081-42e8-4015-aafc-d316c6b8e631",
      },
    ],
  },
  {
    event: "Co to za rekwizyt?\nFundacja Banina",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "W naszych spektaklach często używamy dość dziwnych rzeczy, różowe buty z pomponami, wielki kartonowy dziób, ratunkowy koc termiczny czy brzuch księdza to te z normalniejszych... Ale do czego służyły? Jaką miały funkcję? To jest pytanie do was! Podczas festiwalu, pokażemy Wam 3 takie rekwizyty, będzie można je oglądać i zgadywać przez cały dzień działania ASP, o 10.00 następnego dnia ogłosimy, do czego przedmiot służył oraz kto z was miał rację. Jeśli ktoś zgadnie, niech się do nas zgłosi, przewidujemy dla tej osoby coś miłego :D",
    id: "f35da1e0-604f-48bd-9d44-38d6c613f57b",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T11:00:00.000+02:00",
        id: "213ef44c-fbbd-4d52-9793-457b947ee508",
      },
    ],
  },
  {
    event: "STREFA POZNAJ POMORZE ZACHODNIE - Rowerowe ładowanie telefonów",
    place: "Pomorze Zachodnie",
    kind: "Inne",
    description: "",
    id: "589de406-4e27-4e73-b37e-a941a0e0eabb",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "5dbfe902-f871-452f-a232-29b2eff3ea59",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "7709daac-cbf0-4704-9edf-321cc3e7e75c",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "6dd39bf8-a458-4cea-a098-f149a56a5e0b",
      },
    ],
  },
  {
    event:
      'Pokaz Szkolenia VR dla młodych sedziów\nStowarzyszenie Sędziów Polskich  "Iustitia"',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Pokaz szkolenia VR dla młodych sędziów,  Gogle VR przeniosą Cię na prawdziwą salę rozpraw i wcielisz się w rolę sędziego decydującego o losie trudnego świadka .Immersyjny świat szkolenia zapewni wrażenia prawdziwej sali rozpraw.",
    id: "b0859673-3151-4a6a-808f-3f3f7cb2b866",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T12:00:00.000+02:00",
        id: "01201f89-c7f2-477e-82b1-ab313f6d7303",
      },
    ],
  },
  {
    event: "Cosmo Photowalls\nParty Deco",
    place: "Pomorze Zachodnie",
    kind: "Inne",
    description: "",
    id: "1b026d43-3747-45a6-bebe-e928a8a5cfe9",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T23:59:00.000+02:00",
        id: "6833a300-ca96-45f8-be8a-e128760ee8cc",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T23:59:00.000+02:00",
        id: "8857394c-eb19-4a23-8cce-a6347152a3a6",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T23:59:00.000+02:00",
        id: "814e51a8-0098-48f0-8d6f-a9b3c8dec88e",
      },
    ],
  },
  {
    event:
      "STREFA PLANETA ZDROWIA - Sprawdź swoją tarczycę – badania profilaktyczne\nSPWSZ Arkońska",
    place: "Pomorze Zachodnie",
    kind: "Inne",
    description: "",
    id: "0e320876-5c70-4472-a877-ebe38ba5c947",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "4708c970-787f-43c6-9887-9d624a04c7a6",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "0674046e-2152-41f8-92e7-d31e4119f914",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "d53e1a7c-178e-4053-adef-3e2777b2bb78",
      },
    ],
  },
  {
    event:
      "STREFA KONSTELACJA NAUKI - animacje, warsztaty, spektrometr do oglądania widm\nUniwersytet Szczeciński",
    place: "Pomorze Zachodnie",
    kind: "Inne",
    description: "",
    id: "ce08f71c-4abc-495f-930c-6683f0bb965e",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "199660d5-13ab-4e77-9c46-235128f982b8",
      },
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "f26e98ff-431d-48d9-9c06-8e812e4fe61e",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "6b64c31e-4ef7-4ae7-bf29-26f20acc6c08",
      },
    ],
  },
  {
    event:
      "STREFA PLANETA WIEDZY -  Profilaktyka raka piersi - dlaczego dotyka coraz młodsze kobiety?\nZCO",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "8cb678ed-d4c0-4dff-8ed5-f67675126158",
    instances: [
      {
        dateStart: "2024-08-01T10:00:00.000+02:00",
        dateEnd: "2024-08-01T11:00:00.000+02:00",
        id: "a85fcb84-5c12-4889-8867-b79af67fca06",
      },
    ],
  },
  {
    event: "Przybijanie flag",
    place: "Inne",
    kind: "Inne",
    description:
      "Chcesz dorzucić swoją cegiełkę do wystroju Dużej Sceny? Przybij do niej swoją flagę!Zapraszamy 10:30 do wejścia od strony Strefy Allegro.",
    id: "ccd53995-bfaa-42b6-80b0-fb84e7214fc6",
    instances: [
      {
        dateStart: "2024-08-01T10:30:00.000+02:00",
        dateEnd: "2024-08-01T10:50:00.000+02:00",
        id: "0b061fb2-6b90-4065-baf0-ef94b0cbc48b",
      },
    ],
  },
  {
    event:
      "Czemu służy wolność zgromadzeń w państwie demokratycznym?\nStowarzyszenie Prokuratorów Lex Super Omnia",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "W trakcie warsztatu słuchacze dowiedzą się co oznacza wolność zgromadzeń, dlaczego wolność zgromadzeń jest taka ważna, jak wolna jest wolność zgromadzeń czy nastolatek ma prawo wziąć udział w zgromadzeniu publicznym, czy blokowanie pokojowych zgromadzeń przez Policję jest zgodne z podstawowymi prawami i wolnościami w państwie demokratycznym.",
    id: "b12318b8-f80a-4577-9e72-ca8ff9e79ca4",
    instances: [
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T12:00:00.000+02:00",
        id: "552132b2-d5bc-4013-b3a3-b42937f2bc54",
      },
    ],
  },
  {
    event: "Capoeira - sztuka walki połączona z tańcem\nCapoeira Polandrock",
    place: "Strefa Działań Twórczych ASP",
    kind: "Warsztat",
    description:
      "Witajcie serdecznie obecni i przyszli Capoeiristas z całej Polski!\n\nPolandrock zbliża się wielkimi krokami! Mamy ogromną radość poinformować Was, że tego roku po raz kolejny zorganizujemy dla Was warsztaty capoeira oraz mnóstwo godzin roda! Zaplanowana jest świetna zabawa oraz zajęcia przystosowane zarówno dla osób trenujących, jak i tych, które capoeiry spróbują po raz pierwszy. Nie może Was z nami zabraknąć! Zabierajcie dzieci, przyjaciół, partnerów, rodziców i nieznajomych i spotykamy się codziennie jak co roku w ASP",
    id: "fa3a7ec0-3641-45e2-adcf-065b7f9b9d3c",
    instances: [
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T12:00:00.000+02:00",
        id: "852f8b12-efe0-4c5f-8e53-7efc1ea551d2",
      },
    ],
  },
  {
    event:
      "STREFA PLANETA WIEDZY - Nowy sektor nowe możliwości – innowacyjne miejsca pracy w morskiej energetyce wiatrowej\nPSEW",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "bac1b644-aadc-44a5-a26f-47dcde908b89",
    instances: [
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T12:00:00.000+02:00",
        id: "8fe086a3-fbc0-4ea8-aac3-34eba1928e49",
      },
    ],
  },
  {
    event:
      "Czy burza budzi grozę? - etymologia nazw zjawisk pogodowych\nWioska Słowiańska",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zjawiska atmosferyczne od dawien dawna były nieodłączną częścią ludzkiego życia. Bardzo często determinowały wiele sytuacji życiowych, a także kwestii związanych z życiem i śmiercią. Ma to odzwierciedlenie w ich nazwach, które bardzo często nawiązują do odczuć jakie budziły one w ludziach. Dlaczego nazywamy dziś zjawiska pogodowe w określony sposób? Dlaczego deszcz jest deszczem, a burza burzą? Klucz tkwi w historii i podejściu do świata naszych przodków.",
    id: "a42a6e31-1ccd-46de-9a6b-2296a1d31a73",
    instances: [
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T12:00:00.000+02:00",
        id: "1b173eed-d856-4863-8284-35787672735d",
      },
    ],
  },
  {
    event: "Intro do własnych projektów\nStowarzyszenie Europe4Youth",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Podczas godzinnego warsztatu pokażemy młodym uczestnikom skąd można czerpać zasoby, przestrzenie i fundusze na realizowanie własnych inicjatyw społecznych, kulturalnych, czy w obszarze społeczeństwa obywatelskiego i jak sformułować poprawnie założenia projektowe. \nTo warsztat dla początkujących liderów młodzieżowych, którzy szukają możliwości działania i realizowania pasji społecznikowskiej lub osób, które po raz pierwszy będą mierzyły się z projektami społecznymi. \nZapisy na warsztaty będziemy prowadzić zarówno online, jak i od otwarcia ASP w formie papierowej na naszym stoisku informacyjnym. \nProgram warsztatów:\n- zapoznanie się uczestników,\n- wstęp do projektów społecznych,\n- przegląd programów dla młodzieży, z których młodzież może korzystać nie będąc organizacją, czy nie mając 18 lat,\n- jak sformułować założenia projektowe? potrzeby, cele, działania, jak dobrać metody?\n- dobranie programu do pomysłu i spisanie dalszych kroków,\n- Q&A: wyzwania i korzyści.\nPo warsztatach możliwa jest indywidualna konsultacja własnych pomysłów z prowadzącymi. \nWarsztat w języku polskim.",
    id: "3e2f1ebf-296e-4620-8957-ee6c05ddd1bc",
    instances: [
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T12:00:00.000+02:00",
        id: "ad755629-384d-4b9f-b8e0-46a32fad2fbb",
      },
      {
        dateStart: "2024-08-02T11:00:00.000+02:00",
        dateEnd: "2024-08-02T12:00:00.000+02:00",
        id: "27dc33fe-ad3e-422a-a7a6-a7b7943eba02",
      },
      {
        dateStart: "2024-08-03T11:00:00.000+02:00",
        dateEnd: "2024-08-03T12:00:00.000+02:00",
        id: "f69b0b84-9396-436b-ba9e-44d81d199aa8",
      },
    ],
  },
  {
    event: "STREFA OBSERWATORIUM - Konsultacje o profilaktyce raka piersi\nZCO",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "5ec893a0-5563-4701-87b9-c368d5413ece",
    instances: [
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T11:30:00.000+02:00",
        id: "26d6122b-a196-4a9e-a240-90e16cbff042",
      },
    ],
  },
  {
    event: "STREFA DZIECIĘCA GWIAZDA - Moja wymarzona planeta\nCZOK",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "fd06131d-f202-42c9-85fc-8d810f11ebaf",
    instances: [
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T12:00:00.000+02:00",
        id: "2ff26281-db27-486e-9ff5-6e19e6208ae8",
      },
      {
        dateStart: "2024-08-02T11:00:00.000+02:00",
        dateEnd: "2024-08-02T12:00:00.000+02:00",
        id: "b0a74c1b-0676-40a7-8fbe-376b6eda352b",
      },
    ],
  },
  {
    event:
      "Komunikacja w kolorach neuroróżnorodności\nBLUE MINT MEDIA SP. Z O.O. (właściciel projektu SPEKTRUM WRAŻLIWOŚCI)",
    place: "Namiot Warsztatowy ASP",
    kind: "Warsztat",
    description:
      "Wstęp\nNeuroróżnorodność to piękno i siła różnorodnych sposobów, w jakie nasze mózgi funkcjonują. Obejmuje to różne spektra, takie jak spektrum autyzmu, ADHD i dysleksja i inne. \nŻyjemy w czasach, w których współpraca i komunikacja są kluczowe, zrozumienie i docenienie tych różnic jest nie tylko cenne, ale i niezbędne. \n\nCel warsztatu\nCelem naszego spotkania jest zrozumienie, że komunikacja nie jest jednolita. Każdy z nas przekazuje i odbiera informacje inaczej, a neuroróżnorodność dodaje do tego procesu swoje unikalne barwy. Chcemy pomóc uczestnikom docenić te różnice i nauczyć się, jak z nich korzystać, aby wzmacniać swoje umiejętności komunikacyjne i budować silniejsze, bardziej wartościowe relacje.\n\nPlan Warsztatu\nWarsztat będzie się składał z krótkiej części teoretycznej i 3 integracyjnych ćwiczeń praktycznych, które zaczniemy od ćwiczenia, które pokaże nam jak różne style komunikacyjne mogą wpływać na przekazywanie informacji. Następnie przejdziemy do ćwiczenia z precyzyjną komunikacją, a na końcu skupimy się na wyrażaniu emocji. \n\nIlość osób dowolna. \n\nPodczas naszego warsztatu doświadczycie, jak różnorodne style komunikacyjne i neuroróżnorodność wpływają na przekazywanie i odbieranie informacji. Nauczycie się, jak dostosowywać swoje komunikaty do różnych odbiorców, co jest kluczową umiejętnością w życiu osobistym i zawodowym.  \nJeśli ktoś będzie miał potrzebę poradzić się indywidualnie, czy porozmawiać o swojej neuroatypowości i związanej z nią wyzwaniach, oczywiście jesteśmy do dyspozycji dla wszystkich chętnych po warsztacie. \nPamiętajcie, że każdy z nas ma unikalny sposób myślenia – i to jest naszą największą siłą. \n\nProwadzące \nBernadetta Bieszczanin - psychoterapeutka i ekspertka ds. neuroróżnorodności, współtwórczyni SPEKTRUM WRAŻLIWOŚCI\nDorota Bartosiak – osoba ze spektrum autyzmu, producentka telewizyjna, współtwórczyni SPEKTRUM WRAŻLIWOŚCI\n\nBudujmy wspólnie otwarty i empatyczny świat.",
    id: "795ae1c5-24a5-4ec9-aab4-d22006646f4f",
    instances: [
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T12:00:00.000+02:00",
        id: "f43bc63a-e32d-4e97-beae-8b5798a4b12b",
      },
    ],
  },
  {
    event: "Sprawdź się we wkręt trucku!\nKlimas Wkręt-met",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Sprawdź się we wkręt trucku Klimas Wkręt-met! 11.00, 13.00, 15.00: - czekają na Ciebie zabawy zręcznościowe w naszym wkręt trucku – samochodzie pokazowym Klimas Wkręt-met: \nPoliczymy Ci wkrętogodziny: sprawdź, jak szybko potrafisz wkręcać wkręcanie wkręty farmerskie czas! Policzymy Ci wkrętogodziny 2.0: wkręcaj wkręty WSS w szynę na czas! Sprawdź, czy trafisz – rzut do celu",
    id: "c999be39-4ab1-4004-ae71-e9cece63ac90",
    instances: [
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T19:00:00.000+02:00",
        id: "ceb0b914-12f9-48b7-9f40-322a06eeb812",
      },
    ],
  },
  {
    event:
      'Kryminalna Gra Terenowa "W Matni"\nStowarzyszenie Sędziów Polskich  "Iustitia"',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy do udziału w kryminalistycznej grze terenowej „W Matni”, w której wcielisz się w rolę śledczego i odkryjesz tajemnicę zgłoszonego do polandrockowych służb porządkowych przestępstwa. Przy okazji –zapoznasz się z procedurami regulującymi postępowanie karne od momentu zgłoszenia przestępstwa do zakończenia procesu i pomożesz ustalić tożsamość sprawcy.\nGdy do Pokojowego Patrolu trafia informacja o nieprzytomnej dziewczynie znalezionej w lesie, poza terenem festiwalu, na której ciele widoczne są ślady pobicia – wiadomym jest, że sprawą zająć się musi Policja. Dość szybko typują oni podejrzanego, którym jest dla nich chłopak dziewczyny. Czy jednak to właściwy trop? Czy sprawa jest tak oczywista, jak zdaje się być na początku? Czy nikt nie popełnił tu błędu i komu zależy, by nie badać innych tropów?\nCóż, do sprawy wkroczyć musi najlepszy specjalista od spraw kryminalnych – tej zagadki nie da się rozwikłać bez Ciebie!\nPodążaj za wskazówkami, przesłuchuj świadków i zdobywaj informacje - tylko tak ocalisz niewinną ofiarę i ustalisz, kto powinien odpowiedzieć za krzywdę wyrządzoną dziewczynie. Czy uda Ci się to, zanim sprawca zniszczy wszystkie ślady?\nZarezerwuj dwie godziny wolnego czasu, nie zakładaj najlepszych ubrań, weź dobry humor i miej  oczy dookoła głowy. Instrukcje, wytyczne i niezbędne akcesoria otrzymasz od nas.\n\nZ uwagi na poruszaną tematykę, wydarzenie jest kierowane do osób powyżej 15 roku życia.\nDla pierwszych 30 osób, które wezmą udział w grze – przewidziane nagrody!",
    id: "a92de019-7203-4584-b643-05ee1c3afdcd",
    instances: [
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "1b9cee62-ebd7-4da5-a059-758c46dc25aa",
      },
    ],
  },
  {
    event: '"Maba" - spektakl\nFundacja Banina',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      '"Maba to spektakl o małej dziewczynce która szuka swojego miejsca w świecie. Jest nielubiana a wręcz znienawidzona przez wszystkich dlatego, że jest nietypowa. Maba ma cztery palce i kolorową krew. Ta tęczowa krew sprawia że Maba czuje inaczej od wszystkich. Nasz spektakl opowiada o tym, jak Maba radzi sobie w świecie pełnym innych którzy nie potrafią a może po prostu nie chcą ją zrozumieć. Jest to bajka o tolerancji, której tak bardzo brakuje na świecie. Mówi nam, że każdy jest piękny niezależnie od wyglądu, wiary i narodowości." (Kalina, 14 lat)\nNa podstawie powieści pt. MABA, autorstwa Heleny Morpho.\n\nNagroda dla Kaliny Jargieło za rolę w "Mabie" na Lubelskich Spotkaniach Teatralnych Zwierciadła 2024\nWyróżnienie na 22. Wojewódzkim Przeglądzie Teatrów Dziecięcych i Młodzieżowych 2023\nNagroda Główna na Przeglądzie Zamojskich Premier Teatralnych 2023\nPokaz w namiocie warsztatowym ASP podczas Pol\'and\'Rock Festival 2023\nPokaz podczas Święta Wolności i Praw Obywatelskich Gdańsk 2024\n\nObsada: Julia Herc, Kalina Jargieło, Laura Wierzchoś',
    id: "f492e3fa-65ab-4f3e-9b85-04598b779974",
    instances: [
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T13:00:00.000+02:00",
        id: "f54c6073-31bf-4882-8245-ca5071bc6fcb",
      },
    ],
  },
  {
    event:
      "Umysł Sportowca w Życiu Codziennym czyli Gdzie Zaczyna się Twoje Zwycięstwo\nToastmasters",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Umysł sportowca odgrywa kluczową rolę nie tylko na arenie sportowej, ale także w życiu codziennym. Warsztaty, Które poprowadzi Przemek Wójcik Mistrz Polski w dwóch dyscyplinach jeździeckich, Trener Mentalny Sportu to “szwedzki stół” z sprawdzonych rozwiązań stosowanych przez trenerów mentalnych na całym świecie. Te metody wykorzystywane są przez sportowców na najwyższym poziomie, takich jak Robert Lewandowski czy Aleksander Zniszczoł. Poprzez praktyczne ćwiczenia, uczestnicy doświadczają przewagi stosowanej przez światowej klasy zawodników i dowiadują się, jak te techniki mogą być zastosowane w codziennym życiu.",
    id: "a33e7b41-7ede-4ca7-b8a2-22dc4f88027e",
    instances: [
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T12:00:00.000+02:00",
        id: "3c05acc2-2f55-44e4-9094-4f8cd6e85ca1",
      },
    ],
  },
  {
    event: "Fundacja DKMS - Spotkanie z dawczynią szpiku!\nFundacja DKMS",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Podzieliłam się cząstką siebie z moim bliźniakiem genetycznym, którym okazał się starszy Pan z Niemiec. Niestety, po dwóch latach od pobrania otrzymałam informację o jego śmierci. Gdybym mogła się cofnąć w czasie do decyzji o oddaniu szpiku, postąpiłabym jednak tak samo. Moja gotowość do pomocy dała mu dodatkowy czas spędzony z rodziną oraz namiastkę normalności, ponieważ niedługo po przeszczepie opuścił szpital i na święta Bożego Narodzenia wrócił do domu. Jeśli masz pytania dotyczące idei dawstwa, zapraszam Cię na spotkanie - Zosia.",
    id: "c8e9a92a-f29d-4bdf-9b00-669ac24b877a",
    instances: [
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T12:00:00.000+02:00",
        id: "e313b5dd-e008-4ef3-aba1-c3ad06a45819",
      },
      {
        dateStart: "2024-08-02T11:00:00.000+02:00",
        dateEnd: "2024-08-02T12:00:00.000+02:00",
        id: "50f073db-1cab-4700-87ec-9555839ce810",
      },
      {
        dateStart: "2024-08-03T11:00:00.000+02:00",
        dateEnd: "2024-08-03T12:00:00.000+02:00",
        id: "b6126771-940a-4100-a148-7b3b5f250a6f",
      },
    ],
  },
  {
    event: "Zrób sobie dredy!\nSerwis dredów Wu Kwadrat",
    place: "Strefa Działań Twórczych ASP",
    kind: "Warsztat",
    description:
      "Warsztaty dredowe przeprowadzone przez Serwis Dredów Wu Kwadrat będą składać się z części teoretycznej oraz praktycznej. W pierwszej części uczestnicy poznają pochodzenie tej fryzury, w jakich kulturach były noszone, jak kształtowała się historia dredów na niemal całym świecie. Poopowiadamy także o kołtunie, czyli naszym rodzimym dredzie. Opowiemy o teoretycznych aspektach pielęgnacji i wykonywaniu dredów. \nW części praktycznej każdy z uczestników przy pomocy własnych rąk i włosów syntetycznych oraz szydełek wyplecie swojego własnego dreda. W międzyczasie pomożemy Wam w kręceniu dredów oraz odpowiemy na wszystkie nurtujące Was pytania.",
    id: "330a5c94-a94c-425c-9c5d-3f76d4fe2abb",
    instances: [
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T12:00:00.000+02:00",
        id: "324b106f-dfa2-4949-9e96-4ea59efb229d",
      },
      {
        dateStart: "2024-08-02T11:00:00.000+02:00",
        dateEnd: "2024-08-02T12:00:00.000+02:00",
        id: "cd14d587-fa32-49d5-850c-1645cc84e089",
      },
    ],
  },
  {
    event: "Warsztaty antydyskryminacyjne\nStowarzyszenie Kongres Kobiet",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Warsztaty antydyskryminacyjne prowadzone przez członkinie SKK i zaproszonych gości",
    id: "7d71426c-1a4a-4d42-b4b4-3cf50d46e417",
    instances: [
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T12:00:00.000+02:00",
        id: "8805d1ee-2255-44c3-861f-d99840107619",
      },
    ],
  },
  {
    event:
      "Postaramy się przybliżyć najważniejsze kwestie regulujące prawo o zgromadzeniach.\nIzba Adwokacka w Warszawie",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "W trakcie warsztatu słuchacze dowiedzą się co oznacza wolność zgromadzeń, dlaczego wolność zgromadzeń jest taka ważna, jak wolna jest wolność zgromadzeń czy nastolatek ma prawo wziąć udział w zgromadzeniu publicznym, czy blokowanie pokojowych zgromadzeń przez Policję jest zgodne z podstawowymi prawami i wolnościami w państwie demokratycznym.",
    id: "7a5f67dc-d7fb-4e59-bab6-16adc309c200",
    instances: [
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T12:00:00.000+02:00",
        id: "c1bed785-a600-461f-8be6-0c6f4d3609eb",
      },
    ],
  },
  {
    event: "STREFA PLANETA SPORTU - Turniej siatkówki\nDecathlon",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "2780b787-a8a2-412d-bdbf-ec2087875163",
    instances: [
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "e2f7c5b3-c971-4b42-8cc7-99a1450fc716",
      },
    ],
  },
  {
    event:
      "Warsztat Rzemieślniczy z elementami upcyklingu\nNarodowy Instytut Wolności - Centrum Rozwoju Społeczeństwa Obywatelskiego",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zajęcia odbywają się w atmosferze terapeutycznej i mają za zadanie rozwój umiejętności rękodzielniczych oraz wsparcie edukacji ekologicznej. W trakcie warsztatów będziemy wykorzystywać narzędzia tradycyjne, opcjonalnie proste elektronarzędzia oraz materiały ekologiczne. Założeniem warsztatu będzie wytworzenie produktu, którego odpad po produkcji będzie całkowicie kompostowalny. Warsztaty prowadzi instruktor prowadzący terapeuta zajęciowy, edukator zakresu ekologii oraz instruktor wspomagający. W trakcie warsztatów uczestnicy wykonają wisior z drewna (własnoręcznie wycięty, nawiercony oraz ozdobiony). Czas wykonania wisiora to 10-20 minut dla jednej osoby, w trakcie warsztatu jednocześnie może przebywać przy stole 4-6 osób. Uczestnicy warsztatów są zapoznani z: obsługą narządzi, zasadami BHP, ideą oraz korzyściami upcyklingu. W przestrzeni poza warsztatem praktycznym będziemy rozmawiać o kurczących się zasobach planety, idei Zero Waste oraz DIY.\nWarsztaty prowadzone przez instruktorów Fundacji Rozwoju Edukacji i Ekologii FREE, wspieranej przez NIW-CRSO w ramach programów NOWE FIO i Organizacje Poradnicze.",
    id: "313380d2-6484-4186-ae60-947a469f6c44",
    instances: [
      {
        dateStart: "2024-08-01T11:00:00.000+02:00",
        dateEnd: "2024-08-01T12:00:00.000+02:00",
        id: "ab19eda3-1f7e-4256-9431-b99109651629",
      },
      {
        dateStart: "2024-08-01T13:00:00.000+02:00",
        dateEnd: "2024-08-01T14:00:00.000+02:00",
        id: "72a5d409-4515-4c4b-a370-f275135c9c14",
      },
      {
        dateStart: "2024-08-01T15:00:00.000+02:00",
        dateEnd: "2024-08-01T16:00:00.000+02:00",
        id: "641572d8-0afb-49b8-94bd-65d50ff11e7b",
      },
    ],
  },
  {
    event:
      "„Twoje prawa, nasza sprawa” – prawa osób z niepełnosprawnościami\nBiuro Rzecznika Praw Obywatelskich",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "„Twoje prawa, nasza sprawa” – prawa osób z niepełnosprawnościami. Zajęcia prowadzone na bazie wydanej przez BRPO publikacji i na przykładach spraw, jakie są zgłaszane do Rzecznika Praw Obywatelskich. Warsztat wiedzy obywatelskiej i wszelkich działań na rzecz praw człowieka",
    id: "a3bfadbc-623e-4007-831c-b3076271a241",
    instances: [
      {
        dateStart: "2024-08-01T11:30:00.000+02:00",
        dateEnd: "2024-08-01T12:30:00.000+02:00",
        id: "1a46e705-4c59-4c4f-ab4e-9c1914dce67c",
      },
    ],
  },
  {
    event: "Maria Pakulnis",
    place: "Duży Namiot ASP",
    kind: "Spotkanie",
    description:
      'Maria Pakulnis nie boi się aktorskich wyzwań — w swojej aktorskiej historii wcielała się zarówno w role kobiet demonicznych, jak i delikatnych, fatalnych po samotne matki, żony, kochanki. Zdobyła wiele nagród, między innymi Orła za najlepszą drugoplanową rolę kobiecą za film „Johnny"- opowiadającym o życiu ks. Jana Kaczkowskiego, który był gościem Akademii Sztuk Przepięknych w 2016 roku. W listopadzie 2023 roku premierę miała książka biograficzna "Moja Nitka". Jest to książka — rozmowa, w której nie brakuje mrocznych wspomnień, szczerych opinii na tematy bieżące oraz wielu mądrych, intymnych i wrażliwych faktów z życia aktorki. Tym samym książka jest ciepłą, mądrą i pokorną opowieścią o życiu.  \n \n  #ASP',
    id: "4d3ad557-2178-4f95-80de-02253380d025",
    instances: [
      {
        dateStart: "2024-08-01T11:30:00.000+02:00",
        dateEnd: "2024-08-01T13:00:00.000+02:00",
        id: "ac780cba-36c6-441a-a779-922ace336654",
      },
    ],
  },
  {
    event: "Skrzydła Pełne MOCy\nFundacja Złotowianka",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Przyjdź, ozdób, i unieś się z nami! Stwórz swoje unikalne skrzydła pełne mocy, które będą Twoim towarzyszem przez cały festiwal. Dziel się radością i dodawaj skrzydeł innym uczestnikom!",
    id: "680830d3-ec65-4665-ae8a-9ef4373408d5",
    instances: [
      {
        dateStart: "2024-08-01T11:30:00.000+02:00",
        dateEnd: "2024-08-01T14:00:00.000+02:00",
        id: "7c0e9044-0203-4f18-bb5d-edfb3f12a65c",
      },
    ],
  },
  {
    event: "Zimą trampki, latem ciąża\nFundacja Feminoteka",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Warsztat o przemocy w związkach. O tym, jakie mechanizmy rządzą w takich przypadkach i dlaczego osoby doświadczające przemocy tkwią w toksycznej relacji oraz jak im pomóc się z niej uwolnić.",
    id: "c1c054bc-e794-4925-9a7e-7d9b5ac50062",
    instances: [
      {
        dateStart: "2024-08-01T11:30:00.000+02:00",
        dateEnd: "2024-08-01T13:30:00.000+02:00",
        id: "00bb4886-6473-449a-89ec-ca92b79b1f65",
      },
    ],
  },
  {
    event: "2. Pol'and'Rockowy Bieg \"Policz się z cukrzycą\"",
    place: "Inne",
    kind: "Bieg",
    description:
      "Plan dnia (czwartek, 1 sierpnia):\n\n11:30 – Otwieramy bramy pod Dużą Sceną\n11:45 – Rozgrzewka (nie zapomnij o rozciąganiu, to ważne!)\n12:00 – Start biegu spod Dużej Sceny\n\nTrasa biegu i inne szczegóły - tutaj\n  \n \n  #bieg",
    id: "d7058480-e588-4a86-843b-66337844be82",
    instances: [
      {
        dateStart: "2024-08-01T11:30:00.000+02:00",
        dateEnd: "2024-08-01T13:30:00.000+02:00",
        id: "9434da0f-cacd-43ff-a5b5-228b453d3b77",
      },
    ],
  },
  {
    event:
      "Kto mi poda szklankę wody? Warsztaty z pisania testamentów.\nOkręgowa Izba Radców Prawnych w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Notariusze przeprowadzą warsztat jak napisać testament oraz opowiedzą na pytania związane z testamentami, w tym ile trzeba mieć lat, żeby napisać testament itp.",
    id: "9125d67e-89d8-45a5-b78e-56c51d79984a",
    instances: [
      {
        dateStart: "2024-08-01T12:00:00.000+02:00",
        dateEnd: "2024-08-01T12:55:00.000+02:00",
        id: "f0cce96d-922d-4bbc-8504-7064fc911ce1",
      },
    ],
  },
  {
    event:
      "Wszystko co chcesz wiedzieć o działaniu Otwartych Klatek, ale boisz się zapytać\nStowarzyszenie Otwarte Klatki",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      '"Wszystko co chcesz wiedzieć o działaniu Otwartych Klatek, ale boisz się zapytać" - sesja Q&A z zespołem Otwartych Klatek',
    id: "f9e554ea-3547-4c72-aaf5-fc3d9e8a38a0",
    instances: [
      {
        dateStart: "2024-08-01T12:00:00.000+02:00",
        dateEnd: "2024-08-01T13:00:00.000+02:00",
        id: "747c81de-ddef-4b80-b0ea-d47b9f461b95",
      },
    ],
  },
  {
    event: "Warsztaty o języku inkluzywnym\nOgólnopolski Strajk Kobiet",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Podczas warsztatów nauczymy się czym jest język inkluzywny, jego przykłady oraz jak się nim posługiwać w życiu codziennym. Porozmawiamy także o stereotypach związanych z różnymi grupami społecznymi oraz jak tworzyć i używać feminatywów.",
    id: "892da33b-e34f-4f47-b0ed-ae5d48e8cc26",
    instances: [
      {
        dateStart: "2024-08-01T12:00:00.000+02:00",
        dateEnd: "2024-08-01T13:00:00.000+02:00",
        id: "80b83e3f-2b22-4f2c-a5cb-97ea7062a031",
      },
    ],
  },
  {
    event:
      "STREFA PLANETA WIEDZY - Warsztat pierwszej pomocy, udary, oparzenia, reakcje alergiczne\nWSPR",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "df74c387-4240-4b64-9bba-f41e697ed162",
    instances: [
      {
        dateStart: "2024-08-01T12:00:00.000+02:00",
        dateEnd: "2024-08-01T13:00:00.000+02:00",
        id: "0850e450-43a3-4efd-a3bd-d9e79a920aa8",
      },
      {
        dateStart: "2024-08-02T14:00:00.000+02:00",
        dateEnd: "2024-08-02T15:00:00.000+02:00",
        id: "ff8f9ea2-7aef-4c5c-b2d0-4b1bb5142d47",
      },
      {
        dateStart: "2024-08-03T17:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "a5447953-f6a1-44ce-993f-63ec065aead7",
      },
    ],
  },
  {
    event: "Symbolika posągu Światowida ze Zbrucza\nWioska Słowiańska",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Wykład zatytułowany "Symbolika posągu Światowida ze Zbrucza" zagłębi się w tajemnice jednego z najważniejszych artefaktów kultury słowiańskiej. Posąg Światowida, odkryty w rzece Zbrucz na terenie dzisiejszej Ukrainy, jest wyjątkowym przykładem słowiańskiego rzeźbiarstwa i symboliki religijnej. Podczas wykładu omówione zostaną poszczególne elementy rzeźby, w tym cztery twarze boga, które symbolizują wszechstronność i wszechwiedzę Światowida. Przeanalizujemy również sceny przedstawione na posągu, takie jak postacie ludzkie, zwierzęta oraz elementy roślinne, aby zrozumieć ich znaczenie w kontekście wierzeń i obrzędów słowiańskich. Dodatkowo, wykład poruszy temat odkrycia posągu oraz jego wpływu na współczesne badania nad religią i kulturą dawnych Słowian. Wspólnie odkryjemy, jak ten niezwykły artefakt odzwierciedla duchowe i społeczne życie naszych przodków.',
    id: "0202d8eb-914a-489b-9f92-32bce995d616",
    instances: [
      {
        dateStart: "2024-08-01T12:00:00.000+02:00",
        dateEnd: "2024-08-01T13:00:00.000+02:00",
        id: "f31c93a8-b9c6-4167-a732-6377c5070003",
      },
    ],
  },
  {
    event:
      "STREFA OBSERWATORIUM - Ścieżki kariery – spotkanie z technikiem turbin wiatrowych\nPSEW",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "3875eeed-8640-4ec4-a68a-014960237b8d",
    instances: [
      {
        dateStart: "2024-08-01T12:00:00.000+02:00",
        dateEnd: "2024-08-01T13:00:00.000+02:00",
        id: "f3f7d093-87c7-4a09-8b92-615400ce55f7",
      },
    ],
  },
  {
    event: "Czy warto i jak zostać komornikiem?\nKrajowa Rada Komornicza",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zajęcia skierowane do młodzieży licealnej i studentów, przybliżające drogę do zawodu komornika.",
    id: "bbb0519f-9689-44dc-adb6-14e0f5fe3413",
    instances: [
      {
        dateStart: "2024-08-01T12:00:00.000+02:00",
        dateEnd: "2024-08-01T14:00:00.000+02:00",
        id: "9ce42c56-0357-448c-91d1-81d948d745d1",
      },
    ],
  },
  {
    event: "Rysowanie Komiksu o Zdrowiu Psychicznym\nFundacja eFkropka",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Wspólne, pod kierunkiem artystki Mai Baranowskiej- Karwackiej rysowanie komiksu o zdrowiu Psychicznym.",
    id: "685cf0ac-f4d5-4c0c-b9ce-299484718207",
    instances: [
      {
        dateStart: "2024-08-01T12:00:00.000+02:00",
        dateEnd: "2024-08-01T14:00:00.000+02:00",
        id: "fdb3ecd9-4692-4995-b4d8-f8b1d11b38d5",
      },
      {
        dateStart: "2024-08-02T14:00:00.000+02:00",
        dateEnd: "2024-08-02T16:00:00.000+02:00",
        id: "b48b7e81-bd56-4406-8c53-aac70663aadb",
      },
    ],
  },
  {
    event: "Gra terenowa\nKrajowa Rada Kuratorów",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zagrajmy w grę! Zobaczymy ile wiesz na temat polskiego systemu wymiaru sprawiedliwości. Obawiasz się, że może być trudno? Spokojnie! Pomożemy w realizacji zadań i dotarciu do finału. Z całą pewnością będzie zabawnie! Zamiast leżeć w namiocie zagraj z nami - to doskonała metoda na rozruch przed koncertami.",
    id: "e5c5f140-8bc6-40d7-9fe6-45c64af757d3",
    instances: [
      {
        dateStart: "2024-08-01T12:00:00.000+02:00",
        dateEnd: "2024-08-01T13:00:00.000+02:00",
        id: "16a7959f-3136-4bff-aa00-f1f983b1c9eb",
      },
      {
        dateStart: "2024-08-02T15:00:00.000+02:00",
        dateEnd: "2024-08-02T16:00:00.000+02:00",
        id: "8e61e414-0351-4f87-b580-7454e4c7a805",
      },
    ],
  },
  {
    event: "Analiza osobowościowa\nStowarzyszenie MAYE",
    place: "Strefa Działań Twórczych ASP",
    kind: "Warsztat",
    description:
      "Każdy z nas ma mocniejsze i słabsze strony. Ponieważ nasze osobowością są tak różne - nasze moce są rownież różne. Warto je odkryć! Na tych warsztatach dowiesz się jak odkryć swoją indywidualną, wewnętrzną moc!",
    id: "38842ab7-fd83-4cf5-be62-a1adde20a9ea",
    instances: [
      {
        dateStart: "2024-08-01T12:00:00.000+02:00",
        dateEnd: "2024-08-01T13:00:00.000+02:00",
        id: "07e7d15c-2daa-4cda-b2e8-0518013511c9",
      },
    ],
  },
  {
    event:
      "TAKE THIS JOB AND SHOVE IT! - czyli jak uczciwie wiążę koniec z końcem\nFundacja Biuro Służby Krajowej Anonimowych Alkoholików w Polsce",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Warsztat pt. "Take this job and shove it! - czyli jak uczciwie wiążę koniec z końcem" -spotkanie obejmie tematykę szeroko rozumianej kariery zawodowej. Choroba alkoholowa niekiedy łączy się z nieuczciwymi sposobami zarabiania pieniędzy, długami, nieumiejętnością radzenia sobie w sytuacjach zawodowych lub idzie w parze z pracoholizmem. Dlatego chcemy podjąć ten ważny wątek.',
    id: "0148572e-e1bf-481d-b17a-cccf1d931ef1",
    instances: [
      {
        dateStart: "2024-08-01T12:00:00.000+02:00",
        dateEnd: "2024-08-01T13:00:00.000+02:00",
        id: "cd54fd26-a90c-4c16-abdb-b97cddd664fc",
      },
    ],
  },
  {
    event: "STREFA DZIECIĘCA GWIAZDA - Kosmiczne magnesy\nCZOK",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "ab7673fa-faab-4b1d-acfa-47d301cc2e7b",
    instances: [
      {
        dateStart: "2024-08-01T12:00:00.000+02:00",
        dateEnd: "2024-08-01T13:30:00.000+02:00",
        id: "b7a393d6-3e37-4e95-bff8-dc29c218b50a",
      },
      {
        dateStart: "2024-08-03T13:30:00.000+02:00",
        dateEnd: "2024-08-03T14:30:00.000+02:00",
        id: "9ceed249-c70d-4741-ae7a-1a6c08ee9ed9",
      },
    ],
  },
  {
    event: "Fotografia komórkowa\nFUNDACJA HACKERSPACE KRAKÓW",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Dzisiaj praktycznie każdy z nas trzyma w kieszeni całkiem niezły aparat fotograficzny, ale często jesteśmy niezadowoleni ze swoich zdjęć z wakacji czy polandrockowego koncertu. Co zrobić, żeby były lepsze? Pokażemy Wam kilka prostych zasad i tricków, które kompletnie odmienią Wasze utrwalane wspomnienia.",
    id: "e3b96c4e-2bce-4791-94db-9ae1c3c22e3f",
    instances: [
      {
        dateStart: "2024-08-01T12:00:00.000+02:00",
        dateEnd: "2024-08-01T13:00:00.000+02:00",
        id: "5f8cfc6a-44cf-45a8-ab5a-d0cd8cb8e455",
      },
    ],
  },
  {
    event: "Kto mi poda szklankę wody?\nIzba Notarialna w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Warsztat przygotowany przez notariuszy przy współudziale radców prawnych.\nNotariusze przeprowadzą warsztat jak napisać testament oraz opowiedzą na pytania związane z testamentami, w tym ile trzeba mieć lat, żeby napisać testament?",
    id: "0cc0942f-ffe3-4887-b7e1-ad6797dfbe9a",
    instances: [
      {
        dateStart: "2024-08-01T12:00:00.000+02:00",
        dateEnd: "2024-08-01T12:55:00.000+02:00",
        id: "6a128bf5-6bf4-42cb-a5ba-994c37e4e212",
      },
    ],
  },
  {
    event:
      'Legendarny quiz z prawa karnego z nagrodami\nStowarzyszenie Sędziów Polskich  "Iustitia"',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "najpierw wylosujesz pytanie z prawa karnego, potem odpowiesz i wylosujesz skrytą w naszej loterii nagrodę niespodziankę , chodzi o to ze sprawdzić swoją wiedzę z prawa karnego!",
    id: "1c94ede7-d910-4def-9bbd-c90f609e678e",
    instances: [
      {
        dateStart: "2024-08-01T12:00:00.000+02:00",
        dateEnd: "2024-08-01T13:00:00.000+02:00",
        id: "c39c6145-fdd8-468f-a6f5-6301d89c68a2",
      },
    ],
  },
  {
    event:
      "Warsztaty dla par budowania relacji –Zróbmy sobie masarz\nToastmasters",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Przynieście ręcznik, karimatę i jakieś smarowidło (olejek, krem, balsam) do masażu. Poznasz drobiazgi, które wzbogacą Waszą relację, a przy okazji dowiesz się trochę o masażu relaksacyjnym karku, dłoni i stóp i zrobicie sobie masaż. Ćwiczenia i wykład interaktywny poprowadzi Stanisław Kalicki Coach związków i relacji. Uczy technik tworzenia szczęśliwego życia w związku. Prowadzi warsztaty "Moc Pary dla Pary". Kanclerz Fundacji Już Pomagam, vice prezesem Fundacji Zdrowia ESCO, współzałożycielem Stowarzyszenia na rzecz pomocy dzieciom z chorobami nowotworowymi Pomóż dziecku wyzdrowieć, Stowarzyszenia Krewaktywni.',
    id: "75efd96b-c1a2-4072-aa64-674d177179c3",
    instances: [
      {
        dateStart: "2024-08-01T12:00:00.000+02:00",
        dateEnd: "2024-08-01T13:00:00.000+02:00",
        id: "639c406e-6f1c-4352-984d-71ae50706644",
      },
    ],
  },
  {
    event:
      "UNIA RÓWNOŚCI - MIĘDZY MARZENIAMI A RZECZYWISTOŚCIĄ\nStowarzyszenie Kongres Kobiet",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "12.00-13.00 UNIA RÓWNOŚCI - MIĘDZY MARZENIAMI A RZECZYWISTOŚCIĄ czyli jak w Unii\nEuropejskiej robić równość - gdzie byliśmy i dokąd zmierzamy. Opieka; Bogna Czałczyńska",
    id: "2ab23718-2d26-42c7-bf8e-242d01adc3a2",
    instances: [
      {
        dateStart: "2024-08-01T12:00:00.000+02:00",
        dateEnd: "2024-08-01T13:00:00.000+02:00",
        id: "68d483a7-50bd-48f6-9081-fc5044883449",
      },
    ],
  },
  {
    event:
      "Nie tańcz, jak Ci zagrają - warsztat z nagrodami o bezpieczeństwie w sieci.\nPlay, Allegro, mBank",
    place: "Namiot Warsztatowy ASP",
    kind: "Warsztat",
    description:
      "Czy wiesz jak nie dać się nabrać w sieci? Weź udział w warsztatach z nagrodami od Play, Allegro i mBank! Sprawdź, czy rozpoznasz podejrzane wiadomości i wyłapiesz wszystkie czerwone flagi podczas rozmowy telefonicznej oraz przekonaj się jakie techniki manipulacji wykorzystują cyberprzestępcy, żeby wyłudzić Twoje dane. Zweryfikuj swoją praktyczną wiedzę i zgarnij super gadżety takie jak: naładowane powerbanki, głośniki, wejście bez kolejki na festiwalowe koło Allegro, czy inne upominki od partnerów festiwalu.",
    id: "78d986b1-e491-4e01-8207-e49edbba267f",
    instances: [
      {
        dateStart: "2024-08-01T12:00:00.000+02:00",
        dateEnd: "2024-08-01T13:00:00.000+02:00",
        id: "5720d378-a026-45e6-95ec-f0145cc4e20f",
      },
    ],
  },
  {
    event:
      "Praworządność a finanse publiczne\nStowarzyszenie Prokuratorów Lex Super Omnia",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Celem warsztatu jest przekazanie uczestnikom wiedzy w zakresie prawidłowości i transparentności wydawania środków publicznych, co jest kluczowe dla właściwego funkcjonowania państwa. Środki publiczne są fundamentem działania instytucji państwowych, a ich efektywne i zgodne z prawem wykorzystanie przyczynia się do wzrostu zaufania społecznego oraz stabilności ekonomicznej. \nNadużywanie i przekraczanie uprawnień w zakresie dysponowania środkami publicznymi nie tylko zagraża stabilności finansowej państwa, ale również uderza w całe społeczeństwo. Takie działania prowadzą do marnotrawstwa zasobów, osłabienia instytucji publicznych oraz zwiększenia nierówności społecznych. W związku z tym, powinny one spotkać się z odpowiednią reakcją prawną i administracyjną, aby zniechęcić do podobnych praktyk w przyszłości i przywrócić zaufanie obywateli do państwa.\nBudowanie nowej jakości państwa wymaga zdiagnozowania dotychczasowych problemów związanych z zarządzaniem finansami publicznymi oraz zaproponowania konkretnych rozwiązań do ich eliminacji.",
    id: "71c75bc4-2461-41da-bfc9-c3f5325604fb",
    instances: [
      {
        dateStart: "2024-08-01T12:30:00.000+02:00",
        dateEnd: "2024-08-01T13:30:00.000+02:00",
        id: "b545ef30-87fc-4de5-8cba-f044a6348d51",
      },
    ],
  },
  {
    event: "Praworządność a finanse publiczne\nIzba Adwokacka w Warszawie",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Celem warsztatu jest przekazanie uczestnikom wiedzy w zakresie prawidłowości i transparentności wydawania środków publicznych, co jest kluczowe dla właściwego funkcjonowania państwa. Środki publiczne są fundamentem działania instytucji państwowych, a ich efektywne i zgodne z prawem wykorzystanie przyczynia się do wzrostu zaufania społecznego oraz stabilności ekonomicznej. \nNadużywanie i przekraczanie uprawnień w zakresie dysponowania środkami publicznymi nie tylko zagraża stabilności finansowej państwa, ale również uderza w całe społeczeństwo. Takie działania prowadzą do marnotrawstwa zasobów, osłabienia instytucji publicznych oraz zwiększenia nierówności społecznych. W związku z tym, powinny one spotkać się z odpowiednią reakcją prawną i administracyjną, aby zniechęcić do podobnych praktyk w przyszłości i przywrócić zaufanie obywateli do państwa.\nBudowanie nowej jakości państwa wymaga zdiagnozowania dotychczasowych problemów związanych z zarządzaniem finansami publicznymi oraz zaproponowania konkretnych rozwiązań do ich eliminacji.",
    id: "77d2cb96-91fd-4bb3-9de8-937b0d0f8850",
    instances: [
      {
        dateStart: "2024-08-01T12:30:00.000+02:00",
        dateEnd: "2024-08-01T13:30:00.000+02:00",
        id: "fd22ba44-44ce-44de-9aca-f25d4b15e8e4",
      },
    ],
  },
  {
    event: "W Twoich rękach...\nPolish Outdoor Group",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Na terenie Himalayan Camp, w cyklu pt. "W Twoich rękach..." odbędą się w sumie 3 - otwarte dla wszystkich chętnych - inspirujące spotkania z doradcami zawodowymi. Każde z nich zostanie poświęcone nieco innej tematyce:\nCzwartek: "W Twoich rękach...DOBRY ZAWÓD!"\nPiątek:  "W Twoich rękach...ROZWÓJ" - Gość specjalny Tomasz Szwed (coach, szkoleniowec z zakresu efektywnego uczenia się) poprowadzi spotkanie pt. "Dokąd to wszystko zmierza? Rozmowa o poszukiwaniu siebie, rozwoju i odnajdywaniu pasji w świecie nowych technologii”.\nSobota: "W Twoich rękach...DECYZJE!"',
    id: "e725f3ac-eef2-4ac7-b9cc-abeb1e7f9ac9",
    instances: [
      {
        dateStart: "2024-08-01T12:30:00.000+02:00",
        dateEnd: "2024-08-01T13:30:00.000+02:00",
        id: "539ef9c8-d41c-4137-89d5-c765edf11809",
      },
      {
        dateStart: "2024-08-02T12:30:00.000+02:00",
        dateEnd: "2024-08-02T13:30:00.000+02:00",
        id: "16c0af41-4cca-4550-809f-0a0f49d99551",
      },
      {
        dateStart: "2024-08-03T12:30:00.000+02:00",
        dateEnd: "2024-08-03T13:30:00.000+02:00",
        id: "cd2911c7-f1c2-4289-90d0-a0de740ddca8",
      },
    ],
  },
  {
    event:
      "Co wolno z żubrem w lesie?\nOkręgowa Izba Radców Prawnych w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Warsztat połączony z krótkimi zajęciami "survival" i wyjaśnieniem przepisów oraz zasad działania programu "Zanocuj w Lesie".',
    id: "b18bcabf-d754-4235-9424-367c1a1a73a2",
    instances: [
      {
        dateStart: "2024-08-01T13:00:00.000+02:00",
        dateEnd: "2024-08-01T13:55:00.000+02:00",
        id: "5e2a066d-f42f-4850-bd78-8f73014379bb",
      },
    ],
  },
  {
    event:
      "OTOZ Animals w służbie zwierzętom - Pierwsza pomoc medyczna dla psa\nOTOZ Animals",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Upały, skrajne odwodnienie,nieumyślne pozostawienie w zamkniętym dusznym pomieszczeniu to tylko niektóre przypadki, kiedy nasz zwierzak może potrzebować natychmiastowej pomocy. Co zrobić, kiedy pies zadławi się dużym przedmiotem albo będzie potrzebować reanimacji. Te i wiele innych przydatnych czynności omówimy podczas zajęc z pomocy medycznej dla zwierząt domowych Więcej informacji na naszej stronie WWW WWW: http://otoz-warszawa.pl/ASP",
    id: "0a16da1b-0790-49e0-ae44-b831d8a3b760",
    instances: [
      {
        dateStart: "2024-08-01T13:00:00.000+02:00",
        dateEnd: "2024-08-01T14:00:00.000+02:00",
        id: "34e8d860-b2bf-4c7f-a0ca-9bfffcf386d9",
      },
      {
        dateStart: "2024-08-02T11:00:00.000+02:00",
        dateEnd: "2024-08-02T12:00:00.000+02:00",
        id: "13ec9512-322f-444c-b59d-fa92dec1bde4",
      },
      {
        dateStart: "2024-08-03T11:00:00.000+02:00",
        dateEnd: "2024-08-03T12:00:00.000+02:00",
        id: "3a8a86d8-b2e3-4d42-9869-a50ca72dcee6",
      },
    ],
  },
  {
    event:
      "STREFA OBSERWATORIUM - Dyskusje, pytania oraz spotkania z gośćmi More Life Future\nMore Life Future",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "d5bfff78-8f1f-4d5b-8307-5c05df577ba1",
    instances: [
      {
        dateStart: "2024-08-01T13:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "fa8290a8-07fe-46f9-8255-979e6ba8f292",
      },
      {
        dateStart: "2024-08-02T15:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "bf170c09-5233-4371-bfcc-cdf7534797a9",
      },
    ],
  },
  {
    event:
      "Od Strefy 51 do sałaty na Marsie\nPolskie Towarzystwo Astrobiologiczne",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Czy pod lodami Europy rozwija się życie? Czy ukrywa się ono w chmurach Wenus? Może otoczaki z lodu dwutlenku węgla w metanowych rzekach Tytana pokrywają mikroorganizmy? Dziś nie musimy na ten temat teoretyzować, a możemy tam polecieć. Pierwszy lot kosmiczny otworzył ludzkości drogę do badania nieskończoności, dając paliwo najważniejszej sile napędowej naszego gatunku – ciekawości. Odpowiedzią na te pytania zajmuje się astrobiologia, która z jednej strony szuka życia poza ziemią, a z drugiej próbuje zrozumieć życie w ogóle. Nasza obecność w kosmosie to też nowe wyzwania dla biologii i biotechnologii: wpływ czynników kosmicznych na organizmy, produkcja w przestrzeni kosmicznej, zastosowaniem organizmów do eksploatacji surowców, czy wyczyszczenie z bakteryjnych biofilmów ISS. W trakcie tego spotkania nie wystarczy nam czasu, by zaspokoić ciekawość, ale postaramy się ją pobudzić, opowiadając o eksploracji kosmosu, astrobiologii i biologii kosmicznej.",
    id: "08c2a30d-cf07-4c9c-83b4-344c076cb7e7",
    instances: [
      {
        dateStart: "2024-08-01T13:00:00.000+02:00",
        dateEnd: "2024-08-01T15:00:00.000+02:00",
        id: "34f4be11-04c9-4155-a5b3-ab77b98da396",
      },
    ],
  },
  {
    event: "Warsztaty z tkania krajek\nWioska Słowiańska",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Krajka jest to tkany z nitek pasek o szerokości od kilku do kilkunastu centymetrów. Dawniej była nie tylko częścią garderoby, odgrywała również istotną rolę w obrzędowości słowiańskiej. Uczestnicy będą mogli posłuchać o historii i funkcjach społeczno-religijnych tego dodatku, a także utkać własną pamiątkową krajkę słowiańską.",
    id: "75ffc639-8693-4e92-b1c2-50ec85ebc27c",
    instances: [
      {
        dateStart: "2024-08-01T13:00:00.000+02:00",
        dateEnd: "2024-08-01T15:00:00.000+02:00",
        id: "ab36a2d5-2a2b-4ddc-ab53-3d561c0fe8d3",
      },
      {
        dateStart: "2024-08-03T13:00:00.000+02:00",
        dateEnd: "2024-08-03T15:00:00.000+02:00",
        id: "97112c3b-0aa2-454f-8115-a2388693f687",
      },
    ],
  },
  {
    event:
      "Mamy MOC - Sport Osób z niepełnosprawnościami\nFundacja Złotowianka",
    place: "Strefa Działań Twórczych ASP",
    kind: "Warsztat",
    description:
      "Czy odważysz się na coś nowego? Mobilery to trójkołowe rowery bez pedałów, które zmieniają zasady gry, szczególnie dla osób z niepełnosprawnością. Wpadnij na nasze interaktywne pokazy na Pol’and’Rock Festival, zobacz mistrzów w akcji i sam sprawdź, jak to jest. To niesamowita okazja, by poczuć moc i wolność na trzech kołach oraz dowiedzieć się, jak to jest biegać na mobilerach czy handbikeach! \nNasi Mistrzowie, zawodnicy którzy biegają na mobilerach przyjadą specjalnie na festiwal aby pokazać jak zdobywają Mistzostwa Świata we Frame Runningu. Ponadto we współpracy z Polskim Komitetem Paraolimpijskim przedstawimy inne rodzaje sportów oraz sprzetu dla osób z niepełnosprawnością. Czas trwania takich warsztatów: około 2h",
    id: "763077da-5f11-4220-8353-1d4a5f9b74b1",
    instances: [
      {
        dateStart: "2024-08-01T13:00:00.000+02:00",
        dateEnd: "2024-08-01T14:00:00.000+02:00",
        id: "c5a8afbb-281b-4011-b49d-4ad53b2c0667",
      },
    ],
  },
  {
    event:
      "Debata „17,6% mniej, czyli o równości płac w rzeczywistości”\nBiuro Rzecznika Praw Obywatelskich",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Debata „17,6% mniej, czyli o równości płac w rzeczywistości”  – Mimo prawnych gwarancji równego traktowania, również w odniesieniu do wynagradzania, dane wskazują, że kobiety nadal zarabiają kilkanaście procent mniej niż mężczyźni. W debacie poruszymy temat luki płacowej, zastanawiając się nad jej przyczynami i skutkami oraz możliwościami rozwiązania tego problemu. \nModeracja: Aleksandra Szczerba",
    id: "79041107-663e-4cff-8f8a-3965fe037270",
    instances: [
      {
        dateStart: "2024-08-01T13:00:00.000+02:00",
        dateEnd: "2024-08-01T14:30:00.000+02:00",
        id: "3bb4a2ad-b709-4a49-b693-683548012c41",
      },
    ],
  },
  {
    event:
      "DIALOG O PRAWACH CZŁOWIEKA W GAZIE\nStowarzyszenie Amnesty International",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "W namiocie Amnesty zapraszamy do dialogu o prawach człowieka w konfliktach zbrojnych. W kręgach porozmawiamy o katastrofie humanitarnej w Gazie, o potrzebie międzynarodowej solidarności, i o szansach na rozejm.",
    id: "81a02a81-9adf-409f-860e-83f15c3aaa3b",
    instances: [
      {
        dateStart: "2024-08-01T13:00:00.000+02:00",
        dateEnd: "2024-08-01T14:00:00.000+02:00",
        id: "fc7871da-f242-4d3c-b530-76eceefa8e4a",
      },
    ],
  },
  {
    event:
      "Prawa autorskie a AI - o sztucznej inteligencji w muzyce\nPolska izba rzeczników patentowych",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "To kolejna odsłona warsztatów, które cieszyły się dużą popularnością w ostatnim roku. Powiemy o AI w muzyce i o tym jak nowe technologie wpływają na twórczość. Zastanowimy się czy AI i jej popularność oznacza zmierzch twórczości czy wprost przeciwnie - jest szansą. A do tego wszystkiego skupimy się na problemach, jakie z nową technologią ma system prawa, w szczególności prawo autorskie. To świetna okazja, by obalić mity o AI a przede wszystkim mity o prawie autorskim! Trochę przykładów też będzie, ale jak co roku liczymy na Waszą otwartość i dzielenie się swoimi doświadczeniami.",
    id: "d9f3850c-52c4-4ad0-afdc-45c72f2c8adf",
    instances: [
      {
        dateStart: "2024-08-01T13:00:00.000+02:00",
        dateEnd: "2024-08-01T14:00:00.000+02:00",
        id: "83b6ac3a-c592-4874-a08b-6eb0bdd39e8a",
      },
    ],
  },
  {
    event:
      "STREFA PLANETA WIEDZY -  spotkania z mentorami, mówcami i specjalistami - sprawdź sam z kim spotkasz się na miejscu!\nMore Life Future",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "6efdb3b6-b7b1-401d-8784-7d9eaad8b07a",
    instances: [
      {
        dateStart: "2024-08-01T13:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "352db8ae-beba-425b-b9c4-86b195628ffd",
      },
      {
        dateStart: "2024-08-02T15:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "ae474a55-5a5c-47a4-9225-e90696d63e10",
      },
    ],
  },
  {
    event: "Każda Puszka Cenna\nFundacja RECAL",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Wszystko co warto wiedzieć o puszkach napojowych:\n-ile razy można je przetwarzać?\n-ile czasu potrzeba aby puszka wróciła do sklepu jako nowy produkt?\n-jakie zmiany przyniesie system kaucyjny?\nI wiele innych.",
    id: "1586f3d9-fa66-4e59-b488-032e442a264a",
    instances: [
      {
        dateStart: "2024-08-01T13:00:00.000+02:00",
        dateEnd: "2024-08-01T14:00:00.000+02:00",
        id: "eaa2ce81-662a-43a4-9266-ea191a56553b",
      },
    ],
  },
  {
    event: "Muzyczne warsztaty z Piotrem Bukartykiem\nPiotr Bukartyk",
    place: "Namiot Warsztatowy ASP",
    kind: "Warsztat",
    description:
      "Lubisz śpiewać? A może grasz na jakimś instrumencie? Jeżeli tak to koniecznie musisz wziąć udział w warsztatach muzycznych z Piotrem Bukartykiem. Tradycyjnie już jak co roku, Piotr Bukartyk wraz z uczestnikami festiwalu przygotuje wspaniałe widowisko na zakończenie tegorocznej edycji Pol’and’Rock Festiwal. To dla Ciebie niesamowita szansa, aby wystąpić na Dużej Scenie na Najpiękniejszym Festiwalu Świata.\n  \n \n  #ASP",
    id: "4c8a08fa-76ca-4f8b-893f-9a1296af25e4",
    instances: [
      {
        dateStart: "2024-08-01T13:00:00.000+02:00",
        dateEnd: "2024-08-01T15:00:00.000+02:00",
        id: "4c568bc2-5b77-4b1b-b726-ebb649b8357d",
      },
      {
        dateStart: "2024-08-02T13:00:00.000+02:00",
        dateEnd: "2024-08-02T15:00:00.000+02:00",
        id: "68ad515f-0a33-4ae1-9cf5-836043a02579",
      },
      {
        dateStart: "2024-08-03T13:00:00.000+02:00",
        dateEnd: "2024-08-03T15:00:00.000+02:00",
        id: "61fed316-4521-4e8e-9a3a-4e2591b7a356",
      },
    ],
  },
  {
    event:
      "A ty jakim kolorem jesteś? O tym jak lepiej zrozumieć siebie\nToastmasters",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Analiza własnego typu osobowości pomaga nam lepiej zrozumieć siebie samego.\nO tym jak podejmuje decyzje, gdy jestem introwertykiem opowie Karolina Jeszke? A jak negocjuje cenę zakupu\nsamochodu gdy jestem ekstrawertykiem? O zachowaniach ludzkich w różnych życiowych\nsytuacjach na podstawie analizy osobowości testu DISC. Jak możemy lepiej zrozumieć\nsiebie i nie hejtować się za nasze niewytłumaczalne zachowania w danej sytuacji.\nNa wykładzie dowiesz się jaki typ osobowości u ciebie dominuje i nauczysz się jak w końcu\ndogadać się z osobami, które są inne od ciebie, dostaniesz gotowe praktyki jak polepszyć\nrelacje w życiu codziennym oraz nauczysz się przekonywać ludzi do siebie.",
    id: "fb9a3f01-24bf-4e35-8f9b-60b5c85d7a85",
    instances: [
      {
        dateStart: "2024-08-01T13:00:00.000+02:00",
        dateEnd: "2024-08-01T14:00:00.000+02:00",
        id: "560e1aec-46f2-4c9c-a077-ea4a61c7c9e9",
      },
    ],
  },
  {
    event: "Uczucia - czym są? Czy złość jest dobra?\nKrajowa Rada Kuratorów",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Warsztaty "Uczucia - czym są? Czy złość jest dobra?" zapraszają do głębszego zrozumienia świata emocji, które towarzyszą nam każdego dnia. Celem spotkania jest wyposażenie uczestników w wiedzę i narzędzia, które pomogą im lepiej rozumieć, wyrażać i zarządzać swoimi uczuciami.\nZłość jako emocja:\nCzy złość jest złą emocją?\nPozytywne i negatywne aspekty złości.\nJakie są źródła złości i jak ją rozpoznawać?\nTechniki zarządzania złością.\nPraktyczne sposoby na rozładowanie napięcia.\nDlaczego warto przyjść? Poznasz siebie lepiej i zrozumiesz swoje reakcje emocjonalne.\nNauczysz się skutecznych technik radzenia sobie ze złością.\nPoprawisz swoje relacje z innymi, dzięki lepszemu zarządzaniu emocjami.\nZdobędziesz praktyczne umiejętności, które można zastosować w codziennym życiu.\nWarsztaty są prowadzone przez doświadczonego kuratora i trenera.',
    id: "e7c01c07-4ef1-4626-9e0a-be04e5006a4b",
    instances: [
      {
        dateStart: "2024-08-01T13:00:00.000+02:00",
        dateEnd: "2024-08-01T14:00:00.000+02:00",
        id: "72214ee6-53fe-4e5f-a1da-3af35f55ab01",
      },
      {
        dateStart: "2024-08-03T11:00:00.000+02:00",
        dateEnd: "2024-08-03T12:00:00.000+02:00",
        id: "68140403-c77b-4746-bc22-bd41333603c6",
      },
    ],
  },
  {
    event: "GABINETY dla KOBIET, NIE Dla CBA.\nStowarzyszenie Kongres Kobiet",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Kilkadziesiąt nieznanych sobie kobiet - pacjentek dr\nMarii Kubisy - zdecydowało się dochodzić swoich praw skarżąc państwowe instytucje - prokuraturę i\nCBA za naruszenie ich praw. .Rozmowa z adwokatami i pacjentkami dr Marii Kubis. Odwaga,\ndeterminacja, walka o praworządność – warto posłuchać czym się kierują walcząc drugi rok o prawa\nswoje i innych kobiet. Opieka; mec. Agnieszka Stach.",
    id: "76d4107c-36be-4f54-9fe3-6e9c47b5133c",
    instances: [
      {
        dateStart: "2024-08-01T13:00:00.000+02:00",
        dateEnd: "2024-08-01T14:00:00.000+02:00",
        id: "40c00c14-06c9-42ca-bbfd-477fade9c35e",
      },
    ],
  },
  {
    event:
      'Naucz się w protesty + "Jeden/jedna z dziesięciu"\nOgólnopolski Strajk Kobiet',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Naucz się w protesty + "Jeden/jedna z dziesięciu" Konkurs wiedzy o historii Ogólnopolskiego Strajku Kobiet oraz o prawach obywatelskich',
    id: "cb6eda45-bbb2-4cca-9380-33644907ee02",
    instances: [
      {
        dateStart: "2024-08-01T13:30:00.000+02:00",
        dateEnd: "2024-08-01T14:30:00.000+02:00",
        id: "de24fcd6-95c7-4dc5-b65c-b70bedaa2b5b",
      },
    ],
  },
  {
    event: "Grupa Filmowa Darwin",
    place: "Duży Namiot ASP",
    kind: "Spotkanie",
    description:
      'Jan Jurkowski i Marek Hucz to absolwenci Państwowej Wyższej Szkoły Teatralnej w Krakowie. Swoją współpracę rozpoczęli jeszcze w trakcie studiów, gdzie w ramach rozrywki wspólnie wymyślali różne scenariusze dla formatów filmowych. Ich wspólna pasja i kreatywność zaowocowały powstaniem kanału Grupy Filmowej Darwin w serwisie YouTube. Przełomowym momentem w działalności G.F. Darwin okazała się seria „Wielkie Konflikty”. Są również autorami kultowych "Orek z Majorki".  \n \n  #ASP',
    id: "6bfb69fb-c050-4a57-afed-7536e540475c",
    instances: [
      {
        dateStart: "2024-08-01T13:30:00.000+02:00",
        dateEnd: "2024-08-01T14:50:00.000+02:00",
        id: "85322337-5975-44b0-a9b4-abd0bdc9f7b1",
      },
    ],
  },
  {
    event:
      "STREFA KOSMICZNA PRACOWNIA - Warsztaty z tworzenia rakiet wodnych\nRakieciara",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "05ca0d97-7484-481d-b0da-16a135b2a9d6",
    instances: [
      {
        dateStart: "2024-08-01T13:30:00.000+02:00",
        dateEnd: "2024-08-01T15:30:00.000+02:00",
        id: "a7ee9bed-b729-4a07-b8f6-45761b6ff3a0",
      },
    ],
  },
  {
    event:
      "STREFA DZIECIĘCA GWIAZDA - Gwiezdne wzory - bransoletki z koralików\nMBP Borne Sulinowo",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "4f8ff6a4-75e6-441c-b73d-e131d6ea58ad",
    instances: [
      {
        dateStart: "2024-08-01T13:30:00.000+02:00",
        dateEnd: "2024-08-01T14:30:00.000+02:00",
        id: "ec361e59-227c-46ec-832c-13ab9d291083",
      },
    ],
  },
  {
    event:
      "Uległość, agresywność, asertywność – jacy naprawdę jesteśmy\nKrajowa Rada Kuratorów",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Warsztaty "Uległość, agresywność, asertywność – jacy naprawdę jesteśmy" to intensywne, godzinne spotkanie mające na celu zgłębienie trzech kluczowych stylów komunikacji: uległości, agresywności i asertywności. Uczestnicy dowiedzą się, jak te postawy wpływają na ich życie codzienne oraz relacje z innymi. Poprzez interaktywne ćwiczenia, krótkie wykłady i grupowe dyskusje, uczestnicy będą mieli okazję rozpoznać swoje naturalne skłonności oraz nauczyć się technik umożliwiających bardziej asertywne wyrażanie siebie. Warsztaty oferują praktyczne narzędzia i strategie, które można zastosować w różnych sytuacjach życiowych, aby budować zdrowsze i bardziej satysfakcjonujące relacje interpersonalne.',
    id: "52b0432a-a077-4b67-9c8e-8c0dc9e05457",
    instances: [
      {
        dateStart: "2024-08-01T14:00:00.000+02:00",
        dateEnd: "2024-08-01T15:00:00.000+02:00",
        id: "00d0c718-0f37-4371-8abb-e1efffbe6132",
      },
      {
        dateStart: "2024-08-02T19:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "751b13ca-096f-4492-8b62-096c306fdcc7",
      },
      {
        dateStart: "2024-08-03T12:00:00.000+02:00",
        dateEnd: "2024-08-03T13:00:00.000+02:00",
        id: "10666839-2482-4814-98bc-a0cf90e54d4b",
      },
    ],
  },
  {
    event:
      "14.00-15.00 CZYJE JEST BOISKO czyli o BUDŻETOWANIU RÓWNOŚCIOWYM\nStowarzyszenie Kongres Kobiet",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "kobiety zarabiają mniej,\npracują więcej – w pracy i w domu – ale mają mniejszy dostęp do bezpłatnych aktywności\nsportowych finansowanych z publicznych funduszy, bo te przeznaczane są głównie na sporty dla\nchłopców i mężczyzn (warsztat; budżetowanie równościowe w samorządach i organizacjach – jak to\nsię robi). Opieka; Bogna Czałczyńska.",
    id: "10d5973f-4023-4316-abbf-1664c27146ba",
    instances: [
      {
        dateStart: "2024-08-01T14:00:00.000+02:00",
        dateEnd: "2024-08-01T15:00:00.000+02:00",
        id: "6e2915eb-608d-4453-9c3c-49f9516c4e69",
      },
    ],
  },
  {
    event:
      "Warto być dobrym człowiekiem – nowy sposób na stres\nAkademia Redukcji Stresu Paweł Gutral",
    place: "Strefa Działań Twórczych ASP",
    kind: "Warsztat",
    description:
      "Ten warsztat jest inny. Ten warsztat dotyczy nowej wizji Ciebie jako kompletnej istoty ludzkiej. W rzeczy samej nie chodzi o zdobywanie nowych umiejętności, czy stwarzanie nowych lepszych wersji siebie, lecz o odkrywanie elementów już istniejących. Stres i globalna sytuacja przysłaniają te aspekty nas, które każdy ma, ale nie zawsze zdajemy  sobie sprawę z ich posiadania. Każdy z nas ma w sobie wewnętrzną przestrzeń ciszy. Przestrzeń,  w której mieszkają empatia i troska, zrozumienie i otwartość, chęć pomocy i współpracy. Każdy z nas gdzieś głęboko w środku posiada podstawowe ludzkie wartości. Każdy z nas na bazowym poziomie jest DOBRYM CZŁOWIEKIEM. Czas to odkryć!!! Warsztat pozwoli Ci spojrzeć na siebie z perspektywy, ciesząc się z „pozytywnych cech” i akceptując „ciemną stronę mocy”, która jest przecież nieodzownym elementem  składowym każdego człowieka, rozumianego jako wielopłaszczyznowy byt. Byt  integralny z otaczającym nas światem i rzeczywistością, w pełni kompatybilny z naturą i matką Ziemią. Specjalne warsztatowe ćwiczenia umożliwią zobaczenie siebie autentycznego/ej, prawdziwego/ej, pozwolą poczuć swoją kluczową i sprawczą rolę w układance zwanej życiem.",
    id: "e1d74c2f-697d-450e-9209-a2dec963de0d",
    instances: [
      {
        dateStart: "2024-08-01T14:00:00.000+02:00",
        dateEnd: "2024-08-01T15:00:00.000+02:00",
        id: "e3c75f96-f0d6-4a6e-be0a-054eb6425fae",
      },
    ],
  },
  {
    event: "What does the fox say?\nStowarzyszenie Otwarte Klatki",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "What does the fox say? - prezentacja: 7 niesamowitych faktów o lisach",
    id: "a3770d50-a7da-41c7-92e9-b1ef8b54669b",
    instances: [
      {
        dateStart: "2024-08-01T14:00:00.000+02:00",
        dateEnd: "2024-08-01T15:00:00.000+02:00",
        id: "fd553cc1-23ed-4417-bbdf-45527d0f157d",
      },
    ],
  },
  {
    event: "Woda, las, retencja\nOkręgowa Izba Radców Prawnych w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Retencja leśna jako narzędzie przeciwdziałania zmianom klimatu. Warsztat interaktywny z wykorzystaniem okularów VR.",
    id: "875ddd4d-2c5f-444c-9cca-e8e7da009607",
    instances: [
      {
        dateStart: "2024-08-01T14:00:00.000+02:00",
        dateEnd: "2024-08-01T14:55:00.000+02:00",
        id: "673cd4d7-c3b0-4aa9-a829-f0169f649dbc",
      },
    ],
  },
  {
    event:
      "Ginekolog – przyjaciel czy wróg. Bohater czy przestępca\nStowarzyszenie Prokuratorów Lex Super Omnia",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Prawa kobiet, w tym prawo do opieki medycznej, profilaktyki, antykoncepcji, aborcji, do posiadania dzieci, do rodzenia w godnych warunkach są jednymi z podstawowych praw człowieka, zagwarantowanych w Konstytucji RP jak i w aktach prawa międzynarodowego. Jak jest z realizacją tych praw w praktyce porozmawiamy z dr. Maciejem Sochą lekarzem ginekologiem, doktorem habilitowanym nauk medycznych, profesorem Collegium Medicum UMK w Toruniu, ordynatorem Oddziału Położniczego w szpitalu na gdańskiej Zaspie. Czy kobieta zawsze ma w trakcie porodu prawo do cesarskiego cięcia i znieczulenia, czy martwy płód to zawsze wina lekarza, czy doula lekarzowi przeszkadza, jakie są prawa chłopaka, męża, ojca, czy aborcja to zabijanie nienarodzonych dzieci, czy antykoncepcja nastolatek jest szkodliwa, czy błędy medyczne zawsze będą się zdarzać i czy medycyna jest jak matematyka? Na te pytania, bez znieczulenia, bez kłamstwa i hipokryzji będziemy odpowiadać merytorycznie – prawnie i medycznie z rozmowie z kochanym przez Polki lekarzem – ginekologiem",
    id: "f85fb088-0960-4e7b-8490-cc71660209ce",
    instances: [
      {
        dateStart: "2024-08-01T14:00:00.000+02:00",
        dateEnd: "2024-08-01T15:30:00.000+02:00",
        id: "da076a65-f7c2-40c5-95c4-3df4f32e8e92",
      },
    ],
  },
  {
    event:
      'Debata "Humanitarny ubój - czy możliwe jest jedzenie mięsa z czystym sumieniem?"\nAnonymous for the Voiceless',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy na debatę na temat popularnego mitu - możliwości humanitarnego zabijania zwierząt.",
    id: "42d2c4a5-6100-49b8-855d-791fd0b6ad1b",
    instances: [
      {
        dateStart: "2024-08-01T14:00:00.000+02:00",
        dateEnd: "2024-08-01T15:00:00.000+02:00",
        id: "f1afb613-edf8-4dcf-b930-57f3291e9649",
      },
    ],
  },
  {
    event: "Silne i bezpieczne\nFundacja Feminoteka",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Szkolenie o samostanowieniu dla kobiet i dziewcząt, podczas którego będziesz mogła poznać historię Wen Do i poczuć siłę siostrzeństwa. Zapraszamy do udziału w praktykach oddechowych, wzmacniających twój głos oraz odnalezienie świadomości ciała i własnych granic fizycznych oraz psychologicznych. Szkolenie to nie jest warsztatem WenDo, lecz opiera się na metodzie WenDo, która łączy w sobie strategie ochrony fizycznej, umiejętności asertywności oraz Femstrategii.",
    id: "b72e3267-e5eb-4ac3-8918-274d9fedb4de",
    instances: [
      {
        dateStart: "2024-08-01T14:00:00.000+02:00",
        dateEnd: "2024-08-01T15:30:00.000+02:00",
        id: "b1786ae5-d64f-4c3b-865d-f6fa119652d1",
      },
      {
        dateStart: "2024-08-02T14:00:00.000+02:00",
        dateEnd: "2024-08-02T15:30:00.000+02:00",
        id: "7fee908f-8a8a-4a7e-bab4-070b5d4d7cb4",
      },
    ],
  },
  {
    event: "Technologie w służbie sprawności\nFUNDACJA HACKERSPACE KRAKÓW",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      '"Niepełnosprawni, tak można o nich usłyszeć. Nic bardziej mylnego!\nNa co dzień naginają absurdy rzeczywistości łamiąc bariery architektury, komunikacji i dostępności. Hackerzy życia, chciałoby się rzec. Prawdziwy Red Team Specialist of Life. Penetration Tester, Exploit Developer, Security Auditor to tylko niektóre z ich specjalności.\nKim są, co robią i w jaki sposób potrafią wykorzystać wyższą technologię w służbie sprawności? \nO tym wszystkim dowiecie się z prelekcji w której pokażemy mnóstwo przykładów, gotowych rozwiązań, strategii komunikacji oraz dostosowań komputerowych dla potrzeb osób z wieloraką niepełnosprawnością.\nZapraszamy zarówno dzieci jak i dorosłych."',
    id: "010c06dd-0793-449b-8283-1806e6da9330",
    instances: [
      {
        dateStart: "2024-08-01T14:00:00.000+02:00",
        dateEnd: "2024-08-01T15:30:00.000+02:00",
        id: "04f3a3ef-f4b3-469b-9047-b71f0b77f0c9",
      },
    ],
  },
  {
    event:
      "Gdy życie rzuca Ci kłody pod nogi ....wybuduj z nich rodzinny dom\nToastmasters",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Szalone lata 80 i 90 które wielu z nas ukształtowały, stały pod znakiem patologicznych zachowań naszych rodziców, których pokolenie nadal niosło ciężar II wojny światowej. Osobista historia Dawida Sagana dodatkowo obarczona jest tragedią, która mogła zaważyć na jego życiu …ale nie zaważyła. Jak to się dzieje, że najtrudniejszym doświadczeniom jesteśmy w stanie nadać nowe, konstruktywne znaczenie i zbudować na tym satysfakcjonujące życie? O tym opowiem Wam na spotkaniu Akademii Sztuk Przepięknych w namiocie Toastmasters. Nie tylko podzielę się swoją historią, ale postaram się zarazić moim entuzjazmem i przedstawię Wam moje sposoby i strategie na to jak budować w sobie niezłomny optymizm, który stanie się narzędziem do przekształcania najtrudniejszych doświadczeń na siłę napędową do podążania za marzeniami.",
    id: "575f696f-7232-4646-be31-3affcf3aa5de",
    instances: [
      {
        dateStart: "2024-08-01T14:00:00.000+02:00",
        dateEnd: "2024-08-01T15:00:00.000+02:00",
        id: "ab6b9987-40da-4b3b-b2ac-93b3b55a488d",
      },
    ],
  },
  {
    event:
      "Czy nauka jest kobietą? - porozmawiajmy o kobietach w nauce\nPolitechnika Gdańska",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Samo słowo "naukowczyni" budzi często skrajne emocje, ale jak jest to związane z postrzeganiem kobiet pracujących w nauce? W trakcie naszego spotkania chcielibyśmy postawić kilka pytań oraz wspólnie poszukać odpowiedzi. Wyjściem do dyskusji będzie wprowadzenie dotyczące historii kobiet zajmujących się naukami ścisłymi i technicznymi w XX wieku. Poznamy kilka nazwisk, a może dowiemy się czegoś nowego o tych, które znamy bardzo dobrze. Podczas tej rozmowy, będziemy mieli okazję zgłębić rolę kobiet w nauce, ich osiągnięcia oraz wyzwania, z jakimi się spotykają. Spotkanie poprowadzi, przy wsparciu doktorantek i studentek, Aleksandra Mielewczyk-Gryń, naukowczyni i działaczka na rzecz równości.',
    id: "98e071e1-382f-48a1-9e1f-ac5f5c70b5de",
    instances: [
      {
        dateStart: "2024-08-01T14:00:00.000+02:00",
        dateEnd: "2024-08-01T15:00:00.000+02:00",
        id: "86c07be7-b7a3-404c-9ff8-d05d9ae154e2",
      },
    ],
  },
  {
    event:
      "Ginekolog – przyjaciel czy wróg. Bohater czy przestępca\nIzba Adwokacka w Warszawie",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Prawa kobiet, w tym prawo do opieki medycznej, profilaktyki, antykoncepcji, aborcji, do posiadania dzieci, do rodzenia w godnych warunkach są jednymi z podstawowych praw człowieka, zagwarantowanych w Konstytucji RP jak i w aktach prawa międzynarodowego. Jak jest z realizacją tych praw w praktyce porozmawiamy z dr. Maciejem Sochą lekarzem ginekologiem, doktorem habilitowanym nauk medycznych, profesorem Collegium Medicum UMK w Toruniu, ordynatorem Oddziału Położniczego w szpitalu na gdańskiej Zaspie. Czy kobieta zawsze ma w trakcie porodu prawo do cesarskiego cięcia i znieczulenia, czy martwy płód to zawsze wina lekarza, czy doula lekarzowi przeszkadza, jakie są prawa chłopaka, męża, ojca, czy aborcja to zabijanie nienarodzonych dzieci, czy antykoncepcja nastolatek jest szkodliwa, czy błędy medyczne zawsze będą się zdarzać i czy medycyna jest jak matematyka? Na te pytania, bez znieczulenia, bez kłamstwa i hipokryzji będziemy odpowiadać merytorycznie – prawnie i medycznie z rozmowie z kochanym przez Polki lekarzem – ginekologiem.",
    id: "0e9f034a-af96-4fb1-ad55-3bdcecc1d1ea",
    instances: [
      {
        dateStart: "2024-08-01T14:00:00.000+02:00",
        dateEnd: "2024-08-01T15:30:00.000+02:00",
        id: "6b0550a9-fba2-4d1b-bc1a-cf50072819d5",
      },
    ],
  },
  {
    event:
      "STREFA DZIECIĘCA GWIAZDA -  Kosmiczna odyseja z pedagogiką zabawy\nPolitechnika Koszalińska",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "0edfe528-4ce2-4bba-9a8f-3d451fbf79fd",
    instances: [
      {
        dateStart: "2024-08-01T14:30:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "2978b500-970b-4252-8893-a0a96ab74731",
      },
    ],
  },
  {
    event:
      "“Ukochaj się - warsztat o samoakceptacji”\nProjekt The Presja- Fundacja Z Wyboru",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Podczas warsztatu "Ukochaj siebie" wspólnie odnajdziemy własne drogi do miłości do siebie. Zaczniemy relaksującą medytacją, aby poczuć miłość i wdzięczność. Do poszukiwań, co dla ciebie jest ważne wykorzystamy karty metaforyczne i na ich podstawie spróbujemy poszerzyć perspektywę o to, co możemy nazwać małym krokiem w kierunku zmiany. Zapraszamy Was do rozmów, dyskusji i zaglądania w głąb siebie na tyle, na ile sobie pozwolicie. Zaprosimy Was w kierunku przyszłości i odnajdywania tego, co sprawia, że czujesz miłość do siebie.\n\nadresaci: dorośli\nprowadzący: Magdalena Szyjka i Dawid Zięba- psychoterapeuci w trakcie szkolenia',
    id: "fd759f98-811f-4078-95bb-b49e56e92dde",
    instances: [
      {
        dateStart: "2024-08-01T15:00:00.000+02:00",
        dateEnd: "2024-08-01T17:00:00.000+02:00",
        id: "9bdafda5-9a20-4947-89e7-ead0981318f3",
      },
      {
        dateStart: "2024-08-02T17:30:00.000+02:00",
        dateEnd: "2024-08-02T19:30:00.000+02:00",
        id: "7ef0a582-d009-4edd-9b10-739d49615ae4",
      },
      {
        dateStart: "2024-08-03T12:30:00.000+02:00",
        dateEnd: "2024-08-03T14:30:00.000+02:00",
        id: "905739e5-57da-462f-8698-63d0b68962ea",
      },
    ],
  },
  {
    event:
      "Symulacja rozprawy sądowej (karnej)\nBiuro Rzecznika Praw Obywatelskich",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Symulacja rozprawy sądowej (karnej) – Poszczególne role w symulacji odgrywać będą uczestnicy warsztatu, wnoszący swoje doświadczenia, wiedzę i pomysłowość, zaś rolę sędziego jest pełnić będzie zawodowy sędzia. Dzięki temu zapoznamy się z praktycznymi kwestiami dotyczącymi uczestnictwa w rozprawie. Symulację, jak co roku, poprowadzi sędzia Arkadiusz Krupa, współpracownik Uniwersytetu Szczecińskiego, autor bloga „Ślepym okiem Temidy”.",
    id: "c4120d3a-f9f4-4660-948e-3e1c822e3b0c",
    instances: [
      {
        dateStart: "2024-08-01T15:00:00.000+02:00",
        dateEnd: "2024-08-01T16:30:00.000+02:00",
        id: "f54d960f-030d-4337-8dc3-8c9ea2ff4c9d",
      },
    ],
  },
  {
    event:
      "Praca zdalna – zalety i wady pracy poza biurem\nOkręgowa Izba Radców Prawnych w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Celem warsztatu będzie przedstawienie "pracy zdalnej" jako formy\nświadczenia pracy po zmianach w Kodeksie Pracy. Czym taka praca różni\nsię od pracy zdalnej, którą pamiętamy z czasów locdown\'ów. Prowadzący\nprzedstawią możliwości skorzystania przez pracownika z pracy zdalnej, a\ntakże o czym pracownik musi pamiętać decydując się na taką formę\nwykonywania pracy. W czasie warsztatu przewidziano rundę Q&A - co wolno\na czego nie można robić w czasie pracy zdalnej pracując w domu?',
    id: "7a9db048-b633-48c8-ae91-5b1c67c0ce31",
    instances: [
      {
        dateStart: "2024-08-01T15:00:00.000+02:00",
        dateEnd: "2024-08-01T15:55:00.000+02:00",
        id: "fad57fea-68d5-4188-8547-bf8126098720",
      },
    ],
  },
  {
    event:
      "Kącik gier edukacyjnych / Gaming corner\nStowarzyszenie Europe4Youth",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Prezentacja edukacyjnych gier planszowych i możliwość zagrania i przetestowania!\n- "EU on the Board" - gra planszowa (również w wersji wielkoformatowej), która w zautomatyzowany sposób pokazuje jak wyglada proces tworzenia prawa UE i jak tworzą się Instytucje UE!\n- "Yeah, but" - karciana gra argumentacyjna podnosząca kompetencje informacyjne, zdolność krytycznego myślenia i rozpoznawania fejków, teorii bez pokrycia.\n- "What the fund?" - gra planszowa polegająca na negocjowaniu budżetu UE przez kraje członkowskie i alokowanie go na kluczowe obszary w kompetencjach UE w relacji do obszarów kontrolowanych przez państwa członkowskie. Z wszystkich decyzji rozliczają zaś obywatele!\n- inne gry opracowane przez Stowarzyszenie.\nZapisy na rundki gier będą zbierane zarówno online, jak i na naszym stoisku. O wyznaczonych godzinach rozpoczną się rozgrywki, a informacje o nich będzie można uzyskać również na stoisku informacyjnym.',
    id: "0ba54969-8534-4b70-a854-d3fe224ac6c2",
    instances: [
      {
        dateStart: "2024-08-01T15:00:00.000+02:00",
        dateEnd: "2024-08-01T16:00:00.000+02:00",
        id: "cb54386e-3344-417d-9f40-b1379e0bfde0",
      },
      {
        dateStart: "2024-08-01T17:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "063ba6a2-4582-46fe-a7b8-5e8abb01f140",
      },
      {
        dateStart: "2024-08-02T15:00:00.000+02:00",
        dateEnd: "2024-08-02T16:00:00.000+02:00",
        id: "1511fe38-ce97-4805-a5ac-a8268ffd506e",
      },
      {
        dateStart: "2024-08-02T17:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "e4766407-171e-4f2c-90a6-7ae958d316e1",
      },
      {
        dateStart: "2024-08-03T15:00:00.000+02:00",
        dateEnd: "2024-08-03T16:00:00.000+02:00",
        id: "77d48599-5390-43ee-90a4-000c315a4718",
      },
      {
        dateStart: "2024-08-03T17:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "ba836dc4-4fde-487f-9a81-0f8ab0b15274",
      },
    ],
  },
  {
    event:
      "Żałoba migracyjna czyli warsztat o utraconym życiu\nFundacja Inicjatywa Dom Otwarty",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Czy zastanawiałeś się kiedyś nad tym jak to jest ukończyć studia, pójść do wymarzonej pracy, poświęcić lata na rozwijanie się tylko po to by na skutek wojny czy sytuacji politycznej musieć wyjechać ze swojego domu i zaczynać wszystko od nowa? W czasie warsztatu skupimy się przez chwilę na tym ważnym aspekcie migrowania jakim jest żałoba po utraconym życiu i spróbujemy zrozumieć z jakim obciążeniem niejednokrotnie to nowe życie migranci rozpoczynają.",
    id: "1a9119b8-9b75-4fcb-ba8b-b299667dc1de",
    instances: [
      {
        dateStart: "2024-08-01T15:00:00.000+02:00",
        dateEnd: "2024-08-01T16:00:00.000+02:00",
        id: "db24fcf2-72c0-4b73-838b-9dcac330bb36",
      },
      {
        dateStart: "2024-08-03T15:00:00.000+02:00",
        dateEnd: "2024-08-03T16:00:00.000+02:00",
        id: "ae1f43fd-2cc8-4c4b-b749-55377c9c01c0",
      },
    ],
  },
  {
    event:
      'Debata "Mleko od szczęśliwych krów - prawda czy fikcja?"\nAnonymous for the Voiceless',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy na debatę na temat popularnego mitu - możliwe jest pozyskiwanie mleka od krów bez wyrządzania zwierzętom krzywdy.",
    id: "8ec14d16-bc95-44ee-8291-cdeff6722c7e",
    instances: [
      {
        dateStart: "2024-08-01T15:00:00.000+02:00",
        dateEnd: "2024-08-01T16:00:00.000+02:00",
        id: "64421cc3-ea04-49ac-ba99-fa8159d70e7e",
      },
    ],
  },
  {
    event: "Oficjalne Rozpoczęcie Festiwalu",
    place: "Duża Scena",
    kind: "Inne",
    description:
      "Najpiękniejszy Festiwal Świata!!!\nFestiwal to przestrzeń dla wszystkich, którzy chcą trwać w pokojowej, pełnej przyjaźni i tolerancji atmosferze. Ideą Festiwalu jest budowanie społeczność obywatelskiej, która potrafi nie tylko gorąco przyjąć artystów, ale także wyrażać swoje zdanie!",
    id: "e70fec31-4858-450f-a556-605713cd536e",
    instances: [
      {
        dateStart: "2024-08-01T15:00:00.000+02:00",
        dateEnd: "2024-08-01T15:10:00.000+02:00",
        id: "ea1b52ab-0c71-4687-8312-c38f7faeafca",
      },
    ],
  },
  {
    event: "Poli czy mono-gamia... Jak żyć?\nStowarzyszenie MONAR",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description: "Panel dyskusyjny o związkach, seksie i tym co ludzkie.",
    id: "ee690139-c359-40d3-9a43-9b4711d296ed",
    instances: [
      {
        dateStart: "2024-08-01T15:00:00.000+02:00",
        dateEnd: "2024-08-01T16:30:00.000+02:00",
        id: "56981361-7d4d-474e-a515-789053315d87",
      },
    ],
  },
  {
    event: "Celkilt",
    place: "Duża Scena",
    kind: "Koncert",
    description:
      "Od największych festiwali w Europie po udane trasy amerykańskie, CelKilt zyskał solidną reputację jako jeden z najlepszych zespołów, grających celtic-punk na świecie. Ich niezwykłe połączenie korzeni rocka i tradycji celtyckiej przyniosło im uznanie podczas ponad 700 gorących koncertów na całym świecie. Teraz mają zamiar rozgrzać serca polskiej publiczności na 30. Pol’and’Rock Festival!  \n \n  #punk",
    id: "575aa7c5-a8f9-440e-8f5f-57459704c12c",
    instances: [
      {
        dateStart: "2024-08-01T15:10:00.000+02:00",
        dateEnd: "2024-08-01T16:20:00.000+02:00",
        id: "3a3b3931-d545-42a9-bc98-8baa805f1a7d",
      },
    ],
  },
  {
    event:
      'Pokazowe posiedzenie aresztowe "SIĄDŹ&OSADŹ!"\nStowarzyszenie Sędziów Polskich  "Iustitia"',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Wzięcie udziału w pokazowym posiedzeniu aresztowym pozwoli zrozumieć uczestnikom na czym polega prawo do sądu , kogo , jak i kiedy można aresztować bez prawomocnego wyroku, przeprowadzimy też dyskusję jak Wy jako obywtele możecie wspomóc sędziów w wydaniu  sprawiedliwych wyroków.. Pokazowe posiedzenie aresztowe na podstawie prawdziwej historii, gdzie decyzję o zastosowaniu tymczasowego aresztowania podejmą publika, sędzia i sztuczna inteligencja. Na zakończenie dyskusja o tym co zrobić , żeby sądzenie było łatwiejsze i bardziej zrozumiale dla stron i obywateli.",
    id: "b8c54ab8-239d-4360-addc-30352ef11914",
    instances: [
      {
        dateStart: "2024-08-01T15:30:00.000+02:00",
        dateEnd: "2024-08-01T17:00:00.000+02:00",
        id: "40b92f80-6ca7-4536-af8a-14f62ff9adb9",
      },
    ],
  },
  {
    event:
      "Bezpieczna wędrówka: Kluczowe zasady orientacji w terenie\nWioska Słowiańska",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Wykład dostarczy niezbędnej wiedzy na temat topografii, map i odnalezienia się w terenie. Omówimy podstawy czytania map, korzystania z kompasu oraz interpretowania naturalnych punktów orientacyjnych. Uczestnicy poznają proste, ale kluczowe zasady poruszania się w terenie, które zwiększą ich bezpieczeństwo i pewność podczas wędrówek. Praktyczne porady pomogą zrozumieć, jak unikać zagubienia i efektywnie planować trasy.",
    id: "ce38ee73-c084-49e0-bdbd-c63a1cec4a31",
    instances: [
      {
        dateStart: "2024-08-01T16:00:00.000+02:00",
        dateEnd: "2024-08-01T17:00:00.000+02:00",
        id: "0d8523bc-e554-4f14-89cd-5380dfd2cc22",
      },
    ],
  },
  {
    event: "ŻYWA BIBLIOTEKA Świat według kobiet\nStowarzyszenie Kongres Kobiet",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description: "Rozmowy z członkiniami SKK",
    id: "2408e93f-e22c-4ae6-ab36-3dd358f740f5",
    instances: [
      {
        dateStart: "2024-08-01T16:00:00.000+02:00",
        dateEnd: "2024-08-01T17:00:00.000+02:00",
        id: "75b0e991-4742-4077-a17b-ec5205638433",
      },
      {
        dateStart: "2024-08-02T16:00:00.000+02:00",
        dateEnd: "2024-08-02T17:00:00.000+02:00",
        id: "2a886534-bec6-4bf5-adba-e9dac64844b1",
      },
      {
        dateStart: "2024-08-03T16:00:00.000+02:00",
        dateEnd: "2024-08-03T17:00:00.000+02:00",
        id: "e3940c63-199c-4773-a463-5320ade1a4ff",
      },
    ],
  },
  {
    event: "Fitnes do muzyki rockowej!\nRock'n'Fitness",
    place: "Strefa Działań Twórczych ASP",
    kind: "Warsztat",
    description:
      "Propozycją na Pol'and'Rock Festival jest przeprowadzenie codziennych, godzinnych Warsztatów ruchowych dla uczestników festiwalu. Rock'n'Fitness® to nowatorskie zajęcia na rynku fitness. Łączą taniec z miłością do cięższych rytmów. Podczas intensywnych ćwiczeń cardio z głośników rozbrzmiewają zarówno stare rockowe klasyki, jak i energetyzujące nowości ze świata gitarowych riffów. Na Rock’n’Fitness® muzyka jest czymś więcej niż jedynie tłem do aerobiku. Integralną częścią zajęć jest nauka autorskich układów tanecznych do starannie wyselekcjonowanych utworów. To przestrzeń, w której każdy rockman ma okazję wytańczyć, co mu w duszy gra. Rock’n’Fitness® jest inicjatywą sportową, taneczną, muzyczną i prozdrowotną. To rozwojowy projekt, który promuje połączenie sportu i muzyki rock'owej na polskiej scenie kultury i stawia je w szerszym świetle rockowego świata. Zajęcia Rock'n'Fitness® są intensywne, dynamiczne i rozgrzewające, co idealnie wpisuje się w festiwalowy klimat. Przepełniają również bardzo dobrą energią, która wspaniale wpływa na samopoczucie uczestników. Zajęcia prowadzi założycielka marki - Karolina Majdan-Solecka.",
    id: "2dfeec72-82b7-460c-9920-79d95ecf165b",
    instances: [
      {
        dateStart: "2024-08-01T16:00:00.000+02:00",
        dateEnd: "2024-08-01T17:00:00.000+02:00",
        id: "f8b723b7-ca7d-483c-8164-ac426134ad51",
      },
      {
        dateStart: "2024-08-02T16:00:00.000+02:00",
        dateEnd: "2024-08-02T17:00:00.000+02:00",
        id: "c534ab1d-7ea3-4fe1-8ecc-fa2b3a012803",
      },
      {
        dateStart: "2024-08-03T16:00:00.000+02:00",
        dateEnd: "2024-08-03T17:00:00.000+02:00",
        id: "dfeeca57-6249-4bc9-b7f3-f7ce00e3435a",
      },
    ],
  },
  {
    event: '"Mam głos, mam moc"\nOgólnopolski Strajk Kobiet',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "KOBIETY A POLITYKA. Męska gra i męskie zasady Dlaczego kobiet u władzy jest mniej niż w społeczeństwie? Kto właściwie jest dyskryminowany? Skąd nadreprezentacja mężczyzn we władzach wszelakich i czy to dobrze? dlaczego warto brać udział w wyborach i dlaczego wciąż w polityce jest \ntak mało kobiet. Dyskusję będzie prowadzić posłanka na sejm Jolanta Niezgodzka, odpowie na wszystkie pytania i zachęci do aktywności politycznej, pokaże że kobiety mają głos i mają moc.",
    id: "4c9880c0-1a3a-400c-b7de-9eb11ccc97d7",
    instances: [
      {
        dateStart: "2024-08-01T16:00:00.000+02:00",
        dateEnd: "2024-08-01T17:00:00.000+02:00",
        id: "745aa5b7-5afa-4595-9370-b4ae8760f3ba",
      },
    ],
  },
  {
    event:
      "Kto oddaje i zabiera ten się w sądzie poniewiera\nOkręgowa Izba Radców Prawnych w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "O odwołaniu darowizny i związanej z tym sprawie sądowej. \nCelem warsztatu i dyskusji jest przedstawienie spraw, w tym sądowych, które swój początek miały od sporządzenia umowy u notariusza a następnie swój finał znalazły w sądzie. Przy okazji zostanie wyjaśnione: na czym polega tajemnica notarialna; czy notariusz może sporządzić akt notarialny u Ciebie w domu; czy notariusz może odmówić wykonania usługi; czy można odwołać darowiznę po 20 latach; jak pozwać o odwołanie darowizny i kiedy można się tego skutecznie domagać.",
    id: "f22d9f26-fee1-460e-b8fb-e2cb815ac20f",
    instances: [
      {
        dateStart: "2024-08-01T16:00:00.000+02:00",
        dateEnd: "2024-08-01T16:55:00.000+02:00",
        id: "81b8851e-cf85-4e9c-9d61-f5d557216367",
      },
    ],
  },
  {
    event:
      "Przyłapali Cię? Boisz się konsekwencji?  Co po wyroku? Warsztat kuratorów sądowych.\nKrajowa Rada Kuratorów",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Warsztat „Przyłapali Cię? Boisz się konsekwencji? Co po wyroku?” to godzinne spotkanie prowadzone przez dwóch kuratorów sądowych, skierowane do osób skazanych, oczekujących na wyrok, podejrzanych oraz oskarżonych. Celem warsztatu jest zwiększenie świadomości uczestników na temat konsekwencji prawnych ich czynów oraz omówienie procesów prawnych i procedur po wyroku. W ramach warsztatu omawiane są różne rodzaje wyroków, prawa i obowiązki skazanych oraz wpływ wyroku na życie codzienne. Uczestnicy dowiedzą się o roli kuratora sądowego i dostępnych programach wsparcia i resocjalizacji. Warsztat zawiera przykłady sukcesów osób, którym udało się z sukcesem przejść proces resocjalizacji. Istotnym elementem warsztatu jest wsparcie psychologiczne, w tym techniki radzenia sobie ze stresem i lękiem oraz budowanie pozytywnego nastawienia. Uczestnicy mają okazję wziąć udział w interaktywnej sesji, podczas której dzielą się swoimi obawami i wypracowują indywidualne plany działania. Warsztat kończy się podsumowaniem najważniejszych punktów oraz sesją pytań i odpowiedzi. Rozdawane są także materiały informacyjne, a uczestnicy są zachęcani do dalszego kontaktu z kuratorami. Program stawia na interaktywność i dyskusję, zapewniając komfort i anonimowość uczestników.",
    id: "19fdbc45-5479-489a-8824-47c36bcb54cd",
    instances: [
      {
        dateStart: "2024-08-01T16:00:00.000+02:00",
        dateEnd: "2024-08-01T17:00:00.000+02:00",
        id: "4bed5879-5c9b-4b95-9bb1-7fde12267b60",
      },
      {
        dateStart: "2024-08-02T12:00:00.000+02:00",
        dateEnd: "2024-08-02T13:00:00.000+02:00",
        id: "1a17429d-bbef-4c85-a13f-601ce0388cc1",
      },
    ],
  },
  {
    event:
      "Astrobiologia w NASA i w Polsce\nPolskie Towarzystwo Astrobiologiczne",
    place: "Namiot Warsztatowy ASP",
    kind: "Warsztat",
    description:
      "W czasie tego spotkania dr Tomasz Zajkowski opowie o tym czym jest astrobiologia oraz o tym jak jej różne działy łączą się ze sobą.  Porozmawiamy o tym, jak się prowadzi badania, aby móc przedstawić jak najpełniejszy obraz życia we wszechświecie. Od momentu jego powstania, przez zawiłe drogi ewolucji aż do poszukiwania inteligencji pozaziemskiej. Wszystko to będzie przeplatane historiami i doświadczeniem zdobytym podczas pracy w NASA.\n\nDr Tomasz Zajkowski jest prezesem Polskiego Towarzystwa Astrobiologicznego. Od sześciu lat pracuje w NASA Ames Research Center. Jego badania koncentrują się na zagadnieniach związanych z uniwersalnymi mechanizmami funkcjonowania komórek. Badając podstawowe zjawiska biologii molekularnej, genetyki i biochemii zadaje pytania dotyczące pochodzenia życia na Ziemi oraz o możliwość występowania, życia na innych planetach czy księżycach.",
    id: "46a842bd-166a-4bd6-af8e-d24372dbdb46",
    instances: [
      {
        dateStart: "2024-08-01T16:00:00.000+02:00",
        dateEnd: "2024-08-01T17:00:00.000+02:00",
        id: "55a2ba1d-11e5-463d-813c-3a42d5c65872",
      },
    ],
  },
  {
    event:
      "STREFA KOSMICZNA PRACOWNIA - Warsztaty lawendowe - zaplatanie lawendy\nBarbara Opar",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "30ae09f6-3cf5-43b6-a4c5-32d629f00d0a",
    instances: [
      {
        dateStart: "2024-08-01T16:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "60377d1f-4483-48c9-8635-1d9cb6f9f8c2",
      },
    ],
  },
  {
    event:
      "Kto oddaje i zabiera ten się w sądzie poniewiera\nIzba Notarialna w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description: "O odwołaniu darowizny.",
    id: "d06ad686-1027-4f62-a9e8-1d4207b4fa5f",
    instances: [
      {
        dateStart: "2024-08-01T16:00:00.000+02:00",
        dateEnd: "2024-08-01T16:55:00.000+02:00",
        id: "fb1ed499-ba14-4e4b-9163-28794b346337",
      },
    ],
  },
  {
    event:
      "Instalacja yarnbombingowa: Słoneczniki\nUniwersyetet Artystyczny im. Magdaleny Abakanowicz w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Instalacja yarnbombingowa Słoneczniki została zaprojektowana i przygotowana w ramach spotkań rękodzielniczych zorganizowanych przez poznański kolektyw Pikotki Crew. W czasie ich trwania różne osoby rękodzielnicze wykonały ręcznie elementy na szydełku, które w swojej formie nawiązują do pola słoneczników, czyli charakterystycznej części Polandrock. Część z nich została przygotowana w ten sposób, aby zaangażować do ich wykończenia i montażu uczestników festiwalu – stworzy to możliwość uruchomienia pokładów kreatywności i nawiązania rozmowy o yarnbombingu i rękodziele.",
    id: "f7188293-9e4e-43f3-8f67-bf70eee91bff",
    instances: [
      {
        dateStart: "2024-08-01T16:00:00.000+02:00",
        dateEnd: "2024-08-01T18:30:00.000+02:00",
        id: "6a18c995-bd4c-45db-b68d-27ce13b01182",
      },
    ],
  },
  {
    event: "Niekoniecznie bezpieczny Internet\nFUNDACJA HACKERSPACE KRAKÓW",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      '"Na co zwracasz uwagę korzystając na co dzień z internetu? Zastanawiasz się czemu reklamy w Internecie są tak dobrze dopasowane do tego co lubisz i szukasz w internecie? Może posiadasz jedno hasło do większości, albo co gorsza, wszystkich serwisów z których korzystasz? Higiena korzystania z internetu jest dzisiejszych czasach bardzo ważnym, lecz często ignorowanym tematem, który spróbujemy wam nieco przybliżyć.\nZapraszamy zarówno dzieci jak i dorosłych."',
    id: "92cb57f1-6d94-4a24-b6fe-1514321ec071",
    instances: [
      {
        dateStart: "2024-08-01T16:00:00.000+02:00",
        dateEnd: "2024-08-01T17:30:00.000+02:00",
        id: "dc475394-4cf4-41c9-9efe-71d825857808",
      },
      {
        dateStart: "2024-08-03T14:00:00.000+02:00",
        dateEnd: "2024-08-03T15:30:00.000+02:00",
        id: "8f7a1b81-386f-4120-aa86-ebf696bf2049",
      },
    ],
  },
  {
    event: '"Jak skutecznie uczyć się samodzielnie"\nFundacja Szkoła w Chmurze',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Warsztat będzie stwarzał okazję poznania skutecznych technik samodzielnej nauki i zarządzania zasobami osobistymi w celu realizacji zamierzonych celów. Dedykowany jest szczególnie młodzieży oraz chętnym dorosłym. Warsztat poprowadzi doświadczona osoba trenerska.",
    id: "c032d56e-54fc-40cf-b4f7-97cd31bd8905",
    instances: [
      {
        dateStart: "2024-08-01T16:00:00.000+02:00",
        dateEnd: "2024-08-01T17:30:00.000+02:00",
        id: "abf04432-e06e-4b7b-90da-7db0a875fc0d",
      },
    ],
  },
  {
    event: "Impro Jam w namiocie Toastmasterów\nToastmasters",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Marzysz o tym, aby być kulawą wiewiórką, chce zostać pracownikiem wielkiej korporacji finansowej? Albo trędowatym kierowcą, zatrzymanym za zbyt szybką jazdę Albo zapominalskim dozorcą w Hucie Końca Czasu? Świetnie – w teatrze improwizacji wszystko jest możliwe! Zbadaj pokłady swojej kreatywności biorąc udział w jednej z wielu krótkich gier impro podczas Pol’and’Rock Impro Jam w namiocie Toastmasterów. Gwarantujemy mnóstwo dobrej zabawy, absurdalny humor i historie, które zostaną z Wami na długo. Jestem Artur Kaczmarek. Improwizuję z grupie Teatru Impro „Leniwe Raz” z Poznania. Czasami nam za to płacą.",
    id: "5ee2c50a-0066-46aa-a6ce-e0cd3609decd",
    instances: [
      {
        dateStart: "2024-08-01T16:00:00.000+02:00",
        dateEnd: "2024-08-01T17:00:00.000+02:00",
        id: "f6b958ff-8183-43df-915e-c2ee849067ac",
      },
    ],
  },
  {
    event: "warsztaty bębniarskie\nStowarzyszenie MONAR",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description: "Zapraszamy na wspólne granie na bębnach.",
    id: "3880351f-3224-45cc-99b5-45f3d316010a",
    instances: [
      {
        dateStart: "2024-08-01T16:30:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "580ab174-c0a1-4a48-abbe-88a5ff9e480f",
      },
      {
        dateStart: "2024-08-02T16:30:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "632e05ad-2496-4115-bf70-477484ac6be8",
      },
      {
        dateStart: "2024-08-03T15:00:00.000+02:00",
        dateEnd: "2024-08-03T16:30:00.000+02:00",
        id: "12857c6a-7ae5-420f-af80-640c091581d0",
      },
    ],
  },
  {
    event: "Muralowa Moc Wyrazu\nFundacja Złotowianka",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Dołącz do nas, aby poczuć siłę i wyrazistość sztuki niepełnosprawnych artystów, którzy malują na co dzień ustami czy stopami. Wspólnie stworzymy wielkoformatowy mural festiwalowy, który będzie pełen kolorów i emocji. Nie przegap tej wyjątkowej okazji, aby doświadczyć prawdziwej mocy sztuki!",
    id: "65be583f-7ee2-44dc-b1e8-ad7a2d7ce773",
    instances: [
      {
        dateStart: "2024-08-01T16:30:00.000+02:00",
        dateEnd: "2024-08-01T18:30:00.000+02:00",
        id: "61bbfaab-24d0-455a-b97c-ed26e0a3ff57",
      },
      {
        dateStart: "2024-08-02T16:30:00.000+02:00",
        dateEnd: "2024-08-02T18:30:00.000+02:00",
        id: "74c7468d-6fde-4f38-bb90-19c1099d2704",
      },
      {
        dateStart: "2024-08-03T16:30:00.000+02:00",
        dateEnd: "2024-08-03T18:30:00.000+02:00",
        id: "205c7c8b-118e-43f8-822b-80b22781859d",
      },
    ],
  },
  {
    event: "Transgresja",
    place: "Duża Scena",
    kind: "Koncert",
    description:
      "Transgresja to zespół z Dąbrowy Górniczej, który swoimi kompozycjami wciąga w świat energetyzującego, psychodelicznego rocka. Wizytówką kapeli jest przykuwająca oko oprawa wizualna, spajająca tajemnicze i mroczne brzmienie, z kontrastową grą świateł i fluorescencyjnymi stylizacjami wykonawców. Każdy koncert Transgresji to klimatyczne show – uczta dla zmysłów i wyobraźni.  \n \n  #rock",
    id: "798c5122-ec9d-496e-a4c0-077e03aefdb9",
    instances: [
      {
        dateStart: "2024-08-01T16:40:00.000+02:00",
        dateEnd: "2024-08-01T17:30:00.000+02:00",
        id: "9e3b6bfb-961a-44bd-8d45-673aa19c44aa",
      },
    ],
  },
  {
    event:
      "Gorące Krzesło- czyli jak spontanicznie wypowiadać się bez stresu\nToastmasters",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Pożegnaj zjadający Cię stres i naucz się spontanicznie przygotowywać w swojej głowie sensownej wypowiedzi. Już nie zabraknie Ci „języka w gębie” na randce ani rozmowie kwalifikacyjnej. Umiejętność spontanicznego przygotowywania wypowiedzi jest niezwykle cenna tak w życiu prywatnym, jak i zawodowym. Naucz się tego w kilku prostych krokach, a gwarantuję Ci, że okazja do zastosowania ich będzie czekać na Ciebie za rogiem. Do zobaczenia, HEJ! Poprowadzi Joanna Rymko absolwentka Doradztwa i Coachingu. Dwukrotnie podium w konkursach przemówień improwizowanych na arenie ogólnopolskiej i międzynarodowej. Kocham Toastmasters za swobodę i przyjazną atmosferę. Każda otrzymana w tej organizacji lekcja przełożyła się na moje sukcesy zawodowe i dalej to robi.",
    id: "e50cf16e-c9c2-4e95-9713-ead77382fff7",
    instances: [
      {
        dateStart: "2024-08-01T17:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "fea6e056-0bd1-448b-be39-5defa3af1ebd",
      },
    ],
  },
  {
    event:
      "Debata „Zanieczyszczenie światłem”\nBiuro Rzecznika Praw Obywatelskich",
    place: "Namiot Warsztatowy ASP",
    kind: "Warsztat",
    description:
      "Debata „Zanieczyszczenie światłem” – LP (ang. light pollution) jest coraz większym problemem, skutkuje negatywnie dla zdrowia człowieka (zaburzenie rytmu dobowego, bezsenność, obniżenie odporności, depresja, zwiększenie ryzyka nowotworów, dłuższe sezony na alergie na skutek zmian pór kwitnienia roślin) i degradująco na przyrodę (zaburzony biorytm zwierząt i roślin, wymieranie gatunków fotowrażliwych). LP to także powolna śmierć astronomii i niweczenie dorobku M. Kopernika – przez smog świetlny obserwacja ciał niebieskich jest mocno utrudniona, obserwatoria astronomiczne, w tym np. podwarszawski Ostrowik mogą niedługo stracić rację bytu. \nW Polsce brakuje regulacji prawnych dotyczących emisji światła. Niezwykle istotne jest więc szerzenie w społeczeństwie wiedzy na temat zanieczyszczenia świetlnego i sposobów ograniczania szkodliwości sztucznego światła, które mamy w swoim zasięgu.\nForma wydarzenia: krótkie prezentacje ekspertów (obrazki, rekwizyty), dyskusja z uczestnikami. Prezentacja „pakietów edukacyjnych” (eksperyment świetlny, oprawa lamp przeciwdziałających LP, domowe urządzenie do badania wpływu światła na rośliny etc.)\nModeracja: Małgorzata Żera, Małgorzata Żmudka-Wyrwał\ncz. I debaty, cz.II w Namiocie Praw Człowieka Rzecznika Praw Obywatelskich",
    id: "4c74c834-4413-460a-ad1c-b5b9b6815568",
    instances: [
      {
        dateStart: "2024-08-01T17:00:00.000+02:00",
        dateEnd: "2024-08-01T18:00:00.000+02:00",
        id: "4bdc848a-e8ca-4e1a-9324-03eaf87015da",
      },
    ],
  },
  {
    event:
      "Bachata w parach - latynoski taniec zmysłów\nTadee & Evela - Bachata Passion",
    place: "Strefa Działań Twórczych ASP",
    kind: "Warsztat",
    description:
      "To już drugi raz, gdy bachata opanuje ASP! Bachata to taniec, który z roku na rok zyskuje na popularności. To wyśmienity sposób na aktywność fizyczną połączoną ze świetną zabawą. Najlepsze jest to, że jest to umiejętność, którą wykorzystasz tańcząc na imprezach tanecznych i poznając nowych ludzi! Na każdych z naszych zajęć możesz spodziewać się niestandardowego podejścia do bachaty i przekazywania wiedzy w niezwykle praktyczny i zabawny sposób. Na warsztatach pokażemy Ci, że nauka może być przyjemna, zabawna i mega efektwna!",
    id: "a33569b6-c4af-4340-b199-1177b22f1671",
    instances: [
      {
        dateStart: "2024-08-01T17:00:00.000+02:00",
        dateEnd: "2024-08-01T19:00:00.000+02:00",
        id: "737b2f42-9854-4cb8-97eb-4adb9a9f9926",
      },
      {
        dateStart: "2024-08-02T17:00:00.000+02:00",
        dateEnd: "2024-08-02T19:00:00.000+02:00",
        id: "348bb5f6-f54b-469d-8efe-7be02fd031e3",
      },
    ],
  },
  {
    event:
      "Bezpieczeństwo bankowości internetowej - nie daj się oszukać w sieci\nOkręgowa Izba Radców Prawnych w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Bezpieczeństwo w bankowości internetowej:\n1. zasady świadczenia usług płatniczych oraz wydawania i wykupu pieniądza\nelektronicznego, w tym:\na) warunki świadczenia usług płatniczych, w szczególności dotyczące\nprzejrzystości postanowień umownych i wymogów w zakresie informowania o usługach płatniczych;\nb) prawa i obowiązki stron wynikające z umów o świadczenie usług płatniczych,\nc)  zakres odpowiedzialności dostawców z tytułu wykonywania usług\npłatniczych;\n2. Jak działają oszuści wykorzystujący internetowe kanały dostępu do\nbankowości elektronicznej?\nTe oraz bardzo wiele innych tematów związanych z pogłębieniem świadomości prawnej społeczeństwa.",
    id: "fc3b5651-e3bf-44fe-9fb5-4a20f9521652",
    instances: [
      {
        dateStart: "2024-08-01T17:00:00.000+02:00",
        dateEnd: "2024-08-01T17:55:00.000+02:00",
        id: "4e12d365-5208-4974-934c-aea220a56c7f",
      },
    ],
  },
  {
    event: "EMOCJE - nice to meet you\nProjekt The Presja- Fundacja Z Wyboru",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Masz szansę zrozumieć swoje emocje, które doświadczasz oraz to, do czego ich potrzebujesz. Emocje wpływają również pozytywnie na Twoje umiejętności... Tylko bez presji! Podczas warsztatu poznasz funkcję emocji oraz to jak wpływają na Ciebie, Twoje ciało  i otoczenie. Dowiesz się również jak w pełni doświadczać swoją radość, a na czym skupić się w przypływie złości. Zapraszam Cię do zdobycia wiedzy o tym, co z nami się dzieje, a bywa niezrozumiałe...\n\nadresaci: dorośli\nprowadząca: Anna Jarosz- terapeutka w procesie certyfikacji, arteterapeutka",
    id: "25964b38-1d70-4ab4-aacd-c58d5ac9a882",
    instances: [
      {
        dateStart: "2024-08-01T17:30:00.000+02:00",
        dateEnd: "2024-08-01T19:30:00.000+02:00",
        id: "a4a570e7-bfbe-4234-90d8-bac529d10800",
      },
      {
        dateStart: "2024-08-03T17:30:00.000+02:00",
        dateEnd: "2024-08-03T19:30:00.000+02:00",
        id: "e76f2106-7842-44ab-9158-2f0342bd672e",
      },
    ],
  },
  {
    event: "Hamulec",
    place: "Mała Scena",
    kind: "Koncert",
    description:
      'Hamulec to czteroosobowy skład z Będzina grający thrash punk. Inspirują się takimi zespołami jak Metallica, Slayer, Dezerter i Acid Drinkers. Jak powiedział sam zespół - "Śpiewając po polsku, mamy lepszy kontakt z fanami. Naszą ambicją jest dotrzeć do jak największej ilości słuchaczy i przekazać im ogień, który w nas drzemie." Zasłynęli niecodzienną promocją zespołu w mediach społecznościowych, gdzie publikują najróżniejsze momenty z życia muzyków, tworząc treści również ze swoim wiernym gronem fanów.   \n \n  #metal',
    id: "a3a65f2b-de2b-481a-a721-03e1aee5168c",
    instances: [
      {
        dateStart: "2024-08-01T17:45:00.000+02:00",
        dateEnd: "2024-08-01T18:30:00.000+02:00",
        id: "1eabc141-7b77-4d15-b4f6-2dd2e488262a",
      },
    ],
  },
  {
    event: "Less than Jake",
    place: "Duża Scena",
    kind: "Koncert",
    description:
      "Less Than Jake to jedna z najbardziej energetycznych kapel ska-punkowych na świecie! Ich historia jest nie do opisania jedynie poprzez liczbę tras koncertowych czy albumów na koncie. To, co naprawdę wyróżnia tę legendarną ekipę, to niepowtarzalna energia, którą przywożą ze sobą na wszystkie występy. Od małych klubów po ogromne festiwale, od miasteczek w USA po największe sceny świata, ich muzyka zawsze dotyka serc i rozgrzewa dusze.\n  \n \n  #ska",
    id: "d616048a-84e7-4c8c-ad93-e07a55b832b6",
    instances: [
      {
        dateStart: "2024-08-01T17:50:00.000+02:00",
        dateEnd: "2024-08-01T19:00:00.000+02:00",
        id: "14f24506-4dd6-43b2-9c98-1d3914a1c6a6",
      },
    ],
  },
  {
    event:
      'Rozmowy o zachodzie słońca: „lepiej zapobiegać niż leczyć "\nStowarzyszenie Sędziów Polskich  "Iustitia"',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "doświadczeni sędziowie karniści na bazie historii z życia wziętych po wylosowaniu tematyki przez publikę poruszą temat odpowiedzialności karnej, jak jej unikać, jak zapobiegać  przestępczości , o odpowiedzlanosci karnej z nierozwagi wziętej w świecie wirtualnym i realnym",
    id: "d3e3795e-797c-4546-b3d8-babfb08a5ec3",
    instances: [
      {
        dateStart: "2024-08-01T18:00:00.000+02:00",
        dateEnd: "2024-08-01T19:00:00.000+02:00",
        id: "f2bebe2a-1da8-49a6-bfd6-9bb6f51908c1",
      },
    ],
  },
  {
    event:
      'Symulacja rozprawy sądowej pt. "Sąsiedzka burza - Kto ma rację?"\nStowarzyszenie Amicus Facultatis Iuris Stetinesis (AFIS)',
    place: "Namiot Warsztatowy ASP",
    kind: "Warsztat",
    description:
      "Anna, uczestniczka 29. Pol'and'Rock Festival, przyjechała na najpiękniejszy festiwal świata, aby odpocząć od codziennych problemów. Podczas inspirujących warsztatów w ASP, dowiedziała się, że jej konflikt sąsiedzki może zostać rozwiązany na drodze prawnej. Zachęcona zdobytymi informacjami, podjęła kroki prawne, oskarżając sąsiada o uporczywe nękanie, zakłócanie porządku oraz zniszczenie mienia.\nX\nW trakcie symulacji będziecie mogli nie tylko obserwować przebieg rozprawy, ale także aktywnie w niej uczestniczyć jako świadkowie, dzięki czemu rozstrzygnięcie sądu będzie podejmowane „na żywo” i nie będzie elementem wcześniej zaplanowanego scenariusza. To doskonała okazja do edukacji prawnej w interesujący i angażujący sposób. Symulacja pozwala na naukę przez praktykę – nie tylko przekazujemy teoretyczną wiedzę, ale uczymy analizy i interpretacji prawa, budowania strategii i taktyki, działania w konkretnej sprawie, a także wystąpień publicznych, słuchania i komunikacji.\n\nX\nBędziecie także mogli przymierzyć togi prokuratora, radcy prawnego, adwokata i sędziego, a rolę sędziego odgrywać będzie SSR A. Krupa, znany z satyrycznych rysunków jako Ślepym Okiem Temidy, który od lat realizuje symulacje rozpraw sądowych cieszące się ogromnym zainteresowaniem. Dowiecie się, czy konflikt musiał trafić do sądu, czy można było go rozwiązać inaczej.\nX\nPrzyjdźcie i zobaczcie, jak prawo może pomóc w codziennych sytuacjach i jak można rozwiązywać konflikty w sposób cywilizowany i zgodny z prawem. To będzie niezapomniane doświadczenie!",
    id: "c5e50399-df67-49bf-aa54-7c470298ad62",
    instances: [
      {
        dateStart: "2024-08-01T18:00:00.000+02:00",
        dateEnd: "2024-08-01T19:00:00.000+02:00",
        id: "6699edcc-d226-4dfa-b120-847552b48c01",
      },
    ],
  },
  {
    event:
      "Debata „Zanieczyszczenie światłem”  cz. II\nBiuro Rzecznika Praw Obywatelskich",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Debata „Zanieczyszczenie światłem” – LP (ang. light pollution) jest coraz większym problemem, skutkuje negatywnie dla zdrowia człowieka (zaburzenie rytmu dobowego, bezsenność, obniżenie odporności, depresja, zwiększenie ryzyka nowotworów, dłuższe sezony na alergie na skutek zmian pór kwitnienia roślin) i degradująco na przyrodę (zaburzony biorytm zwierząt i roślin, wymieranie gatunków fotowrażliwych). LP to także powolna śmierć astronomii i niweczenie dorobku M. Kopernika – przez smog świetlny obserwacja ciał niebieskich jest mocno utrudniona, obserwatoria astronomiczne, w tym np. podwarszawski Ostrowik mogą niedługo stracić rację bytu. \nW Polsce brakuje regulacji prawnych dotyczących emisji światła. Niezwykle istotne jest więc szerzenie w społeczeństwie wiedzy na temat zanieczyszczenia świetlnego i sposobów ograniczania szkodliwości sztucznego światła, które mamy w swoim zasięgu.\nForma wydarzenia: krótkie prezentacje ekspertów (obrazki, rekwizyty), dyskusja z uczestnikami. Prezentacja „pakietów edukacyjnych” (eksperyment świetlny, oprawa lamp przeciwdziałających LP, domowe urządzenie do badania wpływu światła na rośliny etc.)\nModeracja: Małgorzata Żera, Małgorzata Żmudka-Wyrwał\ncz. II",
    id: "d39da1cd-bb6a-4dca-bd5f-b26c91dbc855",
    instances: [
      {
        dateStart: "2024-08-01T18:00:00.000+02:00",
        dateEnd: "2024-08-01T19:00:00.000+02:00",
        id: "98c6563c-3ec7-41b6-9654-44cc05fc46ae",
      },
    ],
  },
  {
    event:
      "Kurator zaproponował mi stylową obrączkę, chociaż to nie były oświadczyny. System Dozoru Elektronicznego\nKrajowa Rada Kuratorów",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Warsztaty "Kurator zaproponował mi stylową obrączkę, chociaż to nie były oświadczyny. System Dozoru Elektronicznego" to godzinne spotkanie poświęcone tematyce dozoru elektronicznego jako formy kary ograniczenia wolności. Uczestnicy dowiedzą się, czym jest system dozoru elektronicznego (SDE), jak działa i w jakich przypadkach może być stosowany. Program warsztatów obejmuje omówienie technologii i procedur związanych z SDE, warunków, które muszą zostać spełnione, aby skazany mógł skorzystać z tej formy kary, oraz korzyści i wyzwań związanych z jego stosowaniem. Poprzez interaktywne ćwiczenia i studia przypadków, uczestnicy zyskają praktyczną wiedzę na temat funkcjonowania SDE, jego wpływu na resocjalizację skazanych oraz na społeczeństwo. Warsztaty dostarczą również informacji na temat roli kuratora sądowego w procesie nadzoru elektronicznego oraz wymagań i obowiązków nakładanych na osoby objęte tym systemem. Spotkanie jest przeznaczone dla osób zainteresowanych nowoczesnymi metodami wykonywania kary, przedstawicieli wymiaru sprawiedliwości, pracowników socjalnych oraz wszystkich, którzy chcą lepiej zrozumieć zasady i działanie systemu dozoru elektronicznego.',
    id: "aa1f23c0-89cc-4ff8-b70e-7f9daea5dc8b",
    instances: [
      {
        dateStart: "2024-08-01T18:00:00.000+02:00",
        dateEnd: "2024-08-01T19:00:00.000+02:00",
        id: "87415196-f0c8-49ac-b6ab-aba910e716d9",
      },
      {
        dateStart: "2024-08-02T17:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "7916c10a-3ab8-4fde-b9e5-ba3e71134a40",
      },
    ],
  },
  {
    event: "STREFA PLANETA CHILL - Roztańczone Pomorze Zachodnie\nMDance",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "8a9acc13-339c-4e10-a2ab-5b6c1767dbf6",
    instances: [
      {
        dateStart: "2024-08-01T18:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "5eed6bca-86d1-49b6-846b-67ea86b8fc59",
      },
      {
        dateStart: "2024-08-02T18:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "28402859-c5c9-4051-9e64-9600b4c6d0bd",
      },
      {
        dateStart: "2024-08-03T18:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "553bf039-ea50-499a-a712-52fdaa6dabcd",
      },
    ],
  },
  {
    event:
      "Jak żyć we współwłasności i nie zwariować\nOkręgowa Izba Radców Prawnych w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "W trakcie warsztatu zostaną omówione sytuacje w których mogą\nznaleźć się współwłaściciele nieruchomości oraz to w jaki sposób mogą\nsię zachować; Prowadzący przedstawią prawa i obowiązki współwłaścicieli\nna przykładzie tzw. małej wspólnoty mieszkaniowej. Warsztat obejmie\nrównież sesję Q&A w zakresie praw i obowiązków współwłaścicieli\nnieruchomości.",
    id: "aefc9873-55b9-46f3-a86c-02f30cc1202c",
    instances: [
      {
        dateStart: "2024-08-01T18:00:00.000+02:00",
        dateEnd: "2024-08-01T18:44:00.000+02:00",
        id: "818becb3-19d6-47a6-a0a3-e6d54a622b02",
      },
    ],
  },
  {
    event: "Emocje - podręcznik obrazkowy\nFundacja Feminoteka",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Osoby uczestniczące będą miały okazję zatrzymać się na chwilę i pochylić nad różnymi emocjami oraz sposobami ich wyrażania poprzez działania wizualne i pracę z ciałem. Warsztat pomaga lepiej rozpoznawać i nazywać emocje oraz daje okazję do bliższego poznania drugiej osoby dzięki ćwiczeniom interaktywnym. Z kolei technika FUKO (fakty-uczucia-konsekwencje-oczekiwania), którą przećwiczymy to praktyczne narzędzie w przekazywaniu informacji zwrotnej w sposób stanowczy, ale zrównoważony; daje nam słyszalność, pomaga budować autonomiczność oraz zdrowe i równe relacje, służąc porozumieniu wolnemu od przemocy w różnych obszarach życia.",
    id: "de7c5f79-d3da-4e3f-baaa-bd1f85acd581",
    instances: [
      {
        dateStart: "2024-08-01T18:00:00.000+02:00",
        dateEnd: "2024-08-01T19:30:00.000+02:00",
        id: "80dcce1d-da4d-434c-af51-4df99bd34875",
      },
    ],
  },
  {
    event:
      "Jak żyć we współwłasności i nie zwariować\nIzba Notarialna w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "W trakcie warsztatu zostaną omówione sytuacje w których mogą znaleźć się współwłaściciele nieruchomości oraz to w jaki sposób mogą się zachować; Prowadzący przedstawią prawa i obowiązki współwłaścicieli na przykładzie tzw. małej wspólnoty mieszkaniowej. Warsztat obejmie również sesję Q&A w zakresie praw i obowiązków współwłaścicieli nieruchomości.",
    id: "f713ed58-5369-42bd-9e30-1a8f9be12d6f",
    instances: [
      {
        dateStart: "2024-08-01T18:00:00.000+02:00",
        dateEnd: "2024-08-01T18:44:00.000+02:00",
        id: "98ffd5be-25db-4ec4-95cc-58e984c489f5",
      },
    ],
  },
  {
    event: "STREFA PLANETA SPORTU -  Yoga o zachodzie słońca\nDecathlon",
    place: "Pomorze Zachodnie",
    kind: "Inne",
    description: "",
    id: "9618a87c-9aaa-40f6-ba31-4871275a60ed",
    instances: [
      {
        dateStart: "2024-08-01T18:30:00.000+02:00",
        dateEnd: "2024-08-01T19:30:00.000+02:00",
        id: "7629ad21-a6f2-4f3c-b67b-6ae3fbc6d95f",
      },
      {
        dateStart: "2024-08-02T18:30:00.000+02:00",
        dateEnd: "2024-08-02T19:30:00.000+02:00",
        id: "10158a83-7e7b-4131-9c38-d4412853cf7f",
      },
      {
        dateStart: "2024-08-03T18:30:00.000+02:00",
        dateEnd: "2024-08-03T19:30:00.000+02:00",
        id: "fdf1c57c-8e42-49b3-b14a-ffb38cea79de",
      },
    ],
  },
  {
    event: "Black Radio",
    place: "Mała Scena",
    kind: "Koncert",
    description:
      "Black Radio — łódzki zespół rockowy założony przez Dawida Wajszczyka i Kamila Biadałę, grający melodyjnego rocka alternatywnego, połączonego z zaangażowanymi społecznie tekstami. Zadebiutowali na 15. Finale WOŚP w Łodzi, a po 16tu latach zagrają na deskach Najpiękniejszego Festiwalu Świata! Mają na koncie ponad 300 koncertów i są laureatami 26 ogólnopolskich festiwali muzycznych — występy na żywo i bezpośredni kontakt ze słuchaczami od zawsze są ich priorytetem, oraz ważnym źródłem inspiracji. Podczas Eliminacji pokazali moc, która na pewno porwie Pol'and'Rockową publikę!  \n \n  #rock",
    id: "b8ecab81-0755-4eae-ab4d-6e1ea69f868e",
    instances: [
      {
        dateStart: "2024-08-01T18:45:00.000+02:00",
        dateEnd: "2024-08-01T19:30:00.000+02:00",
        id: "0c75dbeb-a18b-45f1-ad8b-cedce38ea888",
      },
    ],
  },
  {
    event:
      "Hipnotyczne warsztaty z przymrużeniem oka\nPolska Akadmeia Rozwoju Osobistego",
    place: "Namiot Warsztatowy ASP",
    kind: "Warsztat",
    description:
      "Warsztaty z hipnozy w luźnym i rozrywkowym wydaniu. Przez ostatnie 7 lat mieliśmy przyjemność tworzyć w ASP show hipnozy, które zawsze ściągało tłumy. Tym razem chcemy bardziej skoncentrować się na przekazaniu wiedzy i umiejętności. W tym celu zamierzamy zaprosić uczestników do wspólnej zabawy, ucząc ich korzystania z pewnych elementów hipnozy w swoim życiu oraz wywoływania hipnotycznych fenomenów. Wszystko to w radosnym, komediowym i edukacyjnym wydaniu.",
    id: "cf41c019-786d-4423-8f8e-b41fd033016d",
    instances: [
      {
        dateStart: "2024-08-01T19:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "349b3de6-de61-4909-b638-59ab358bd30f",
      },
    ],
  },
  {
    event:
      "Przerażające Korzenie: Storytelling na Fundamentach Pierwotnych Baśni\nToastmasters",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "To podróż w głąb przerażających korzeni opowieści, które od wieków intrygowały, straszyły i uczyły kolejne pokolenia, zgłębianie sztuki opowiadania historii, opartej na oryginalnych, mrocznych wersjach baśni i ich współczesnych odpowiednikach. \nBaśnie pierwotne zawierały elementy grozy, brutalności i złożonych moralnych dylematów miały na celu nie tylko bawić, ale uczyć i ostrzegać. Były dla dorosłych i miały silny wpływ na kształtowanie kultury i przekazywanie ważnych społecznych wartości.\nJacek Lebiedź manager w jednej z największych firm logistycznych na świecie w Wielkiej Brytanii, obecnie żołnierz wojsk terytorialnych.  Motocyklista, członek grup rekonstrukcyjnych.  Prezes Pilskiego klubu Toastmasters",
    id: "70a78120-10c3-4a2c-a2c3-33f79084e777",
    instances: [
      {
        dateStart: "2024-08-01T19:00:00.000+02:00",
        dateEnd: "2024-08-01T20:00:00.000+02:00",
        id: "6f9365d9-c88f-492b-8600-aaab4fa723da",
      },
    ],
  },
  {
    event: "Wojtek Szumański - Zwycięzca Plebiscytu Złotego Bączka",
    place: "Duża Scena",
    kind: "Koncert",
    description:
      'Wojtek Szumański — kompozytor, autor tekstów, wokalista i gitarzysta, zgromadził milionową publiczność na YouTube dzięki utworom takim jak "Ballada o cyckach", "Zegarek" i "Bez twoich wad". Jest wnikliwym obserwatorem emocji, prezentując zarówno porywające i energiczne hity, jak i poetyckie, melancholijne oraz satyryczne utwory. Naturalna charyzma Wojtka, jego zespołu oraz szczere opowieści poruszyły fanów, którzy za występ w 2023 roku nagrodzili go statuetką Złotego Bączka!  \n \n  #poezja śpiewana',
    id: "4e9d2343-c7f9-4bf7-a546-a71f38526432",
    instances: [
      {
        dateStart: "2024-08-01T19:20:00.000+02:00",
        dateEnd: "2024-08-01T20:30:00.000+02:00",
        id: "1521f228-ef23-4eb5-a102-c697291b68cd",
      },
    ],
  },
  {
    event: "Wrona",
    place: "Mała Scena",
    kind: "Koncert",
    description:
      'WRONA to producentka, wokalistka i instrumentalistka z Krakowa. Urodzona buntowniczka. Jako nastolatka zdobywała doświadczenie sceniczne grając na perkusji w punkrockowym girlsbandzie Brain\'s All Gone, koncertując głównie w Wielkiej Brytanii, Niemczech i Francji.  Solowy projekt WRONY to międzygatunkowy koktajl. W 2021 ukazał się debiutancki album "SEN O SMAKU LUKRECJI", będący w całości autorskim przedsięwzięciem artystki. Elektroniczno-punkowa muzyka w połączeniu ze szczerymi i bezkompromisowymi tekstami, przykuwa uwagę nie tylko unikalną, głęboką barwą głosu, ale także bezczelną i odważną postawą sceniczną.  \n \n  #muzyka elektroniczna  \n  \n  #rock alternatywny',
    id: "098516af-979c-47a7-a6ea-a0cc05246115",
    instances: [
      {
        dateStart: "2024-08-01T19:45:00.000+02:00",
        dateEnd: "2024-08-01T20:30:00.000+02:00",
        id: "3c91e0c5-5489-455d-8fc2-1cbf837d058c",
      },
    ],
  },
  {
    event: "STREFA PLANETA CHILL - KosmoParty",
    place: "Pomorze Zachodnie",
    kind: "Inne",
    description: "",
    id: "81dc6ce3-550b-4524-a36c-b1edc07a089a",
    instances: [
      {
        dateStart: "2024-08-01T20:00:00.000+02:00",
        dateEnd: "2024-08-01T23:59:00.000+02:00",
        id: "95e5c58b-ed13-4727-ae09-b00160d70bda",
      },
      {
        dateStart: "2024-08-02T20:00:00.000+02:00",
        dateEnd: "2024-08-02T23:59:00.000+02:00",
        id: "643d4eb6-c780-4664-86f7-9f099437b91e",
      },
      {
        dateStart: "2024-08-03T20:00:00.000+02:00",
        dateEnd: "2024-08-03T23:59:00.000+02:00",
        id: "27375c84-52da-48e5-9e4b-e10941c5520a",
      },
    ],
  },
  {
    event: "Sokołowski",
    place: "Mała Scena",
    kind: "Koncert",
    description:
      "Krzysztof Sokołowski to postać legendarnej już rangi w polskim świecie muzycznym. Od lat zdobywa serca fanów zarówno jako frontman Nocnego Kochanka jak i naczelny głos Exlibris (w latach 2012-2015) oraz Polish Metal Alliance. Po 4 występach Nocnego Kochanka na Najpiękniejszym Festiwalu Świata (pierwszy występ Nocnego Kochanka na Dużej Scenie 23. Przystanku Woodstock był wynikiem wyłonienia zespołu w konkursie Eliminacji) Krzysztof Sokołowski powraca, tym razem w ramach działalności solowej pod szyldem „Sokołowski”.  \n \n  #rock",
    id: "2c30e049-a646-41fb-a0d5-2c01f68be7e3",
    instances: [
      {
        dateStart: "2024-08-01T20:45:00.000+02:00",
        dateEnd: "2024-08-01T21:35:00.000+02:00",
        id: "2928298b-3191-459b-add1-312d8c6ecd7e",
      },
    ],
  },
  {
    event: "COMA",
    place: "Duża Scena",
    kind: "Koncert",
    description:
      "Od momentu założenia zespołu w 1998 roku, łódzki skład przeszedł niezwykłą drogę na polskiej scenie muzycznej. Inspirując się dokonaniami takich gigantów jak Pearl Jam czy Led Zeppelin, Coma szybko zyskała rozpoznawalność swoim niepowtarzalnym brzmieniem i energetycznymi koncertami. Zespół na początku swojej kariery koncertował u boku takich gwiazd jak Kazik, Sweet Noise czy T.Love, zyskując uznanie zarówno krytyków, jak i fanów. Dowodami miłości Najpiękniejszej Publiczności Świata do Comy są dwie zdobyte przez kapele statuetki Złotego Bączka (2007 i 2014 rok).  \n \n  #rock",
    id: "4275cf65-3c81-46d1-bdd1-59178294e857",
    instances: [
      {
        dateStart: "2024-08-01T20:50:00.000+02:00",
        dateEnd: "2024-08-01T22:00:00.000+02:00",
        id: "a08163a9-c339-4d68-a545-da76920b75ac",
      },
    ],
  },
  {
    event: "CF98",
    place: "Mała Scena",
    kind: "Koncert",
    description:
      "Zespół CF98 powstał kilkanaście lat temu jako rezultat marzeń o graniu w zespole i tworzeniu muzyki z przyjaciółmi oraz wielkiej fascynacji melodyjnym punk rockiem nie tylko zza oceanu. Łączy ich miłość do pizzy oraz tworzenia skate punkowych i pop punkowych energetycznych utworów zazwyczaj z inspirującym, czasem z nostalgicznym, często z zaangażowanym społecznie przekazem.  Nazwa formacji pochodzi od pierwiastka kaliforn – w jednym z wywiadów członkowie CF98 przyznali: „Ten pierwiastek na nas zadziałał...” Po międzynarodowej karierze czas na podbicie polskiej sceny muzycznej — oj rozpalą Małą Scenę Najpiękniejszego Festiwalu Świata!  \n \n  #punk rock",
    id: "2737e2aa-31b3-4005-8c44-aff872f6273f",
    instances: [
      {
        dateStart: "2024-08-01T21:50:00.000+02:00",
        dateEnd: "2024-08-01T22:40:00.000+02:00",
        id: "101af8a4-9f23-4970-b0a2-f3a3407cad70",
      },
    ],
  },
  {
    event: "Electric Callboy",
    place: "Duża Scena",
    kind: "Koncert",
    description:
      "Electric Callboy to więcej niż zespół – to muzyczna rewolucja. Ich występ na Pol’and’Rock Festival 2024 to nie tylko szansa na doświadczenie ich niesamowitej energii na żywo, ale także okazja, by stać się częścią ich rosnącej, globalnej społeczności fanów. Zapraszamy wszystkich na tę wyjątkową muzyczną podróż, gdzie Electric Callboy zaprezentuje swoje największe hity oraz nowe, ekscytujące brzmienia. Do zobaczenia pod Dużą Sceną!  \n \n  #metal",
    id: "00e14383-73dc-4468-8b20-8150c8b080b5",
    instances: [
      {
        dateStart: "2024-08-01T22:30:00.000+02:00",
        dateEnd: "2024-08-01T23:40:00.000+02:00",
        id: "eea75a3c-1cfb-41b2-8de8-51eff7d9d158",
      },
    ],
  },
  {
    event: "Lordofon",
    place: "Mała Scena",
    kind: "Koncert",
    description:
      "Lordofon to innowacyjne połączenie hip-hopu i rocka ze słodko-gorzkimi piosenkami pełnymi autoironii i nostalgii. Powstanie Lordofon datuje się na 2010 rok. To właśnie wtedy powstał duet, który jednak nie od razu zdecydował się grać rap. Jak wspominają jego członkowie, na początku głównie zajmowali się coverami kapel indie rockowych. Od początku byli nastawieni na liczne eksperymenty, dzięki czemu ich muzyka ewoluowała, ostatecznie przekształcając się w rap. Od 2017 roku poważnie wpisują się w polską scenę muzyczną — koniecznie przyjdźcie posłuchać ich koncertu na Małej Scenie — to z pewnością będzie niezapomniane wydarzenie!  \n \n  #rock  \n  \n  #rap",
    id: "a2c56b48-45d0-4907-913b-37f3e5122c7c",
    instances: [
      {
        dateStart: "2024-08-01T22:55:00.000+02:00",
        dateEnd: "2024-08-01T23:45:00.000+02:00",
        id: "7b380825-c4f7-490f-882f-98c8acff808d",
      },
    ],
  },
  {
    event: "Orkiestra Dorosłych Dzieci",
    place: "Mała Scena",
    kind: "Koncert",
    description:
      "Orkiestra Dorosłych Dzieci to zespół doświadczonych artystów z polskiej sceny rockowej, który zapowiada nową erę w muzyce. Ich działalność wzbudza wielkie emocje wśród fanów klasyki rocka, mimo że działają stosunkowo krótko. Grupa już zdążyła zyskać uznanie dzięki energicznemu brzmieniu i unikalnemu połączeniu talentów. W składzie znajdują się ikony takie jak Grzegorz Kupczyk (ex Turbo) czy Kuba Płucisz (ex IRA). Spodziewajcie się wysokiego poziomu artystycznego i fascynujących interpretacji legendarnych polskich kawałków!  \n \n  #rock",
    id: "4d7363f1-b388-406f-bab5-01d5004d3c29",
    instances: [
      {
        dateStart: "2024-08-02T00:00:00.000+02:00",
        dateEnd: "2024-08-02T01:20:00.000+02:00",
        id: "5fb76bd1-f124-4489-b002-4e68b58ffacc",
      },
    ],
  },
  {
    event: "The Warning",
    place: "Duża Scena",
    kind: "Koncert",
    description:
      'Trzy utalentowane siostry z Monterrey w Meksyku – Daniela "Dany" (gitara, główny wokal, fortepian), Paulina "Pau" (perkusja, wokal, fortepian) i Alejandra "Ale" Villarreal (gitara basowa, fortepian, wokal wspierający)  przygotowują się do podbicia Dużej Sceny, przynosząc ze sobą potężne riffy, zaskakujące rytmy i pasjonujące wokale. To będzie prawdziwy ogień!  \n \n  #rock',
    id: "abfd9880-9e8b-4688-a72f-0bc776480400",
    instances: [
      {
        dateStart: "2024-08-02T00:00:00.000+02:00",
        dateEnd: "2024-08-02T01:10:00.000+02:00",
        id: "1c437851-91bc-45e6-9e3f-4d4faaa80eb1",
      },
    ],
  },
  {
    event: "Modestep",
    place: "Duża Scena",
    kind: "Koncert",
    description:
      'Modestep to projekt muzyczny, który z łatwością przenosi słuchaczy przez różnorodne gatunki muzyczne. Debiutancki album "Evolution Theory" nie tylko podbił listy przebojów, ale także zdefiniował ich charakterystyczny styl. Z unikalnym połączeniem dubstepu, drum & bass oraz hard rocka wraca po dziewięciu latach na Dużą Scenę Najpiękniejszego Festiwalu Świata!  \n \n  #muzyka elektroniczna',
    id: "d566de06-a505-46b3-98cd-ef3e71351311",
    instances: [
      {
        dateStart: "2024-08-02T01:30:00.000+02:00",
        dateEnd: "2024-08-02T02:40:00.000+02:00",
        id: "3eafd6fe-f426-4134-8d3c-7e8d3da4cb74",
      },
    ],
  },
  {
    event: "Pokaz Filmu: Najgłośniejszy Film Polski",
    place: "Duży Namiot ASP",
    kind: "Film",
    description: "",
    id: "7eba68a5-f99e-4f7e-8a4e-4c36c69f814a",
    instances: [
      {
        dateStart: "2024-08-02T02:00:00.000+02:00",
        dateEnd: "2024-08-02T04:00:00.000+02:00",
        id: "b0a4c257-9c8f-449c-8c1e-e52e8ab697c3",
      },
    ],
  },
  {
    event: "Poranna joga\nNatalia Knopek",
    place: "Strefa Działań Twórczych ASP",
    kind: "Warsztat",
    description:
      "Poranna praktyka joga ma ogromną ilość zalet - mam nadzieję, że wiele z nich odkryjemy wspólnie na naszych festiwalowych spotkaniach jogowych. Niczym się nie przejmuj, ani się nie bój, praktyka jest dostosowana do osób na każdym poziomie, również dla tych, dla których będą to pierwsze w życiu zajęcia :)\n\nA ja nazywam się Natalia Knopek, jogę i medytację praktykuję od ponad dekady. Aktualnie zajmuję się przede wszystkim szkoleniem przyszłych nauczycieli jogi. Jestem zwolenniczką uzdrawiania poprzez ruch, relaksację i świadomość. Głęboko wierzę w to, że piękno powstaje wewnątrz oraz że każda wielka zmiana zaczyna się od jednego małego kroku.",
    id: "5001c641-3af6-408b-9743-2476a9fa37cf",
    instances: [
      {
        dateStart: "2024-08-02T09:00:00.000+02:00",
        dateEnd: "2024-08-02T10:00:00.000+02:00",
        id: "a208e3f8-c504-4e7c-8593-c911d5fd908c",
      },
      {
        dateStart: "2024-08-03T09:00:00.000+02:00",
        dateEnd: "2024-08-03T10:00:00.000+02:00",
        id: "2ca66a4a-3e95-498b-8bd2-267c632e70b1",
      },
    ],
  },
  {
    event:
      "STOP przemocy wobec zwierząt! Jak skutecznie reagować w przypadkach łamani praw zwierząt\nOTOZ Animals",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Warsztaty pozwolą na wyposażenie Was w dostępne narzędzia skutecznego reagoania na przemoc wobec zwierząt. Was bardziej uświadomić, co sami jesteście w stanie zrobić w przypadkach, gdy zwierzę cierpi z winy człowieka. Kto jest odpowiedzialny prawnie za reagowanie i gdzie zgłaszać takie sprawy. Nigdy nie wiesz, kiedy podobna sytuacja może wydarzyć się w Twoim otoczeniu. Wiecęj informacji na naszej stronie WWW WWW: http://otoz-warszawa.pl/ASP",
    id: "131c335e-731c-42e3-9f7d-77da47e92616",
    instances: [
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T11:00:00.000+02:00",
        id: "4525128a-8af3-4c52-851e-550f47433bda",
      },
      {
        dateStart: "2024-08-02T13:00:00.000+02:00",
        dateEnd: "2024-08-02T14:00:00.000+02:00",
        id: "c08486c1-b4e7-444d-9fa2-9112f319c2bd",
      },
    ],
  },
  {
    event: "Eksploruj i poznawaj świat\nWhite Wolf - Marek Suslik",
    place: "Strefa Działań Twórczych ASP",
    kind: "Warsztat",
    description: "",
    id: "91f54a8c-9690-47e3-add6-5dd609b3bed1",
    instances: [
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T11:00:00.000+02:00",
        id: "c7ecc0f6-91b2-4fb1-9c00-5ab3c74e281e",
      },
    ],
  },
  {
    event: "W poszukiwaniu szczęścia\nToastmasters",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Na spotkaniu poruszony będzie temat szeroko rozumianego szczęścia - jak i gdzie go wgl szukać? Przyjrzymy się kluczowym aspektom, na które warto zwrócić uwagę, abyśmy mieli poczucie, że nasze życie ma sens i było satysfakcjonujące. Co robić, aby nie utknąć w miejscu i czerpać radość z życia?\nPaweł Myjkowski Trener mentalny, coach Pomaga uwierzyć w siebie i ruszyć z miejsca. Dodaje wiatru w żagle i zachęca do sięgania po więcej. Prowadzi obozy szkoleniowe, na których uczestnicy mogą wejść w głąb siebie i odnaleźć wewnętrzny spokój, ukryte motywacje i to, co jest dla nich naprawdę ważne.",
    id: "8690e1cc-1f19-4178-9885-ce93fa7b1317",
    instances: [
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T11:00:00.000+02:00",
        id: "e28c400b-aeb6-453f-8a0c-d32773035315",
      },
    ],
  },
  {
    event: "Spektrum autyzmu a przemoc\nStowarzyszenie Siła Szpularek",
    place: "Namiot Warsztatowy ASP",
    kind: "Warsztat",
    description:
      "Warsztat traktujący o związku spektrum autyzmu z przemocą. Zarówno doznawaną jak i stosowaną. Czy osoby w spektrum są bardziej narażone na przemoc? I dlaczego? Czy może jakaś forma przemocy wyjątkowo często dotyka osoby z tej grupy? Z kolei czy autystycy są przemocowi? Czy to wynika ze spektrum i dlaczego? Co robić gdy mamy z tym zjawiskiem do czynienia? Zapraszamy do dyskusji z osobą w spektrum, Ingą Lipińską, która od ponad sześciu lat pracuje z osobami doświadczającymi przemocy.",
    id: "d31282a2-79d3-4097-964d-255c9a15328c",
    instances: [
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T11:00:00.000+02:00",
        id: "dc950c63-2eb9-4c5b-88e5-c044d0be25a1",
      },
    ],
  },
  {
    event: "Trening mądrego oddechu\nSpółdzielnia Socjalna Nowe Horyzonty",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Podczas spotkań informacyjno-edukacyjnych zamierzamy: - przeprowadzić mini wykład na temat inhalacji, - poprowadzić trening oddechowy, - oferować test spirometryczny badający pojemność oddechową. - poprowadzić warsztaty o profilaktyce zdrowia i inhalacjach solankowych w kontekście wdrażanej przez nas innowacji, - przekazać podstawową wiedzę odnośnie naszej autorskiej innowacji opartej na budowie inhalatorium i wewnętrznych tężni. Innowacja opisuje nowatorskie metody wspierania zdrowia (inhalacje i treningi oddechowe dla osób po covid19 i innych zagrożonych schorzeniami płucnymi). Z pomocą inspirujących trenerów i materiałów warsztatowych zamierzamy zainteresować gości ASP tematyką zdrowia psychosomatycznego i terapii płucnej. W ramach naszych działań będziemy też oferować test spirometryczny badający pojemność oddechową płuc zainteresowanych osób. Całościowa koncepcja miniwykładu i warsztatów "NA ZDROWIE" dotyczy zrealizowanej z PCG Polska Sp. z o.o. innowacji łączącej społeczność gminną przy wspólnej budowie tężni. Po krótkim omówieniu TES, czyli Tężnii Energii Społecznej, kompleksowego modelu aktywizowania lokalnych zasobów (ludzkich i materialnych) bazując na integracji społecznej celem wdrażania nowoczesnej technologii do terapii płucnej i prowadzenie szeroko rozumianej profilaktyki zdrowia. Innymi słowy, TES polega na budowaniu siłami społecznymi z pomocą partnerskich organizacji (np. OPS i NGO) pajęczyny społecznego wsparcia celem szerzenia profilaktyki zdrowia. Cała koncepcja skupia się wokół wspólnego budowania tężni i inhalatorium. Innowacja społeczna „TES” jest rezultatem modelowej współpracy i wykorzystania lokalnego potencjału wielu podmiotów, które rozumiejąc główny problem i potrzebę lokalną, uruchomiły swoje zasoby, aby włączyć je w realizację tego unikalnego przedsięwzięcia. W tym konkretnym przypadku mamy do czynienia z inwestycją społeczną, która zmobilizowała różne środowiska, instytucje i organizacje do skoordynowanych działań.',
    id: "80ec976f-f827-490a-8cc9-a2a4941bfc1f",
    instances: [
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T11:00:00.000+02:00",
        id: "6d7c2275-5bf5-4ed0-9581-8b2c0785bead",
      },
    ],
  },
  {
    event:
      "STREFA PLANETA ZDROWIA - Badanie składu ciała wraz  indywidualnym omówieniem wyniku z dietetykiem\nPZH",
    place: "Pomorze Zachodnie",
    kind: "Inne",
    description: "",
    id: "5ebd2d88-3e2a-43af-83da-be3b33b65a41",
    instances: [
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "1992a68c-5bae-4044-806a-aa934cfa56ca",
      },
    ],
  },
  {
    event: "Koło Tortury\nIzba Notarialna w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Szlagierowy konkurs Namiotu Radców Prawnych w wydaniu z notariuszami: zakręć kołem, odpowiedz na pytanie prawne i wygraj nagrodę niespodziankę.\nOczywiście, można nie mieć szczęścia i zamiast nagrody wygrać karę - niespodziankę ;) . Zapraszamy wszystkich śmiałków!",
    id: "80a7265f-95b2-48d4-9b6f-d515aabea6cf",
    instances: [
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T11:00:00.000+02:00",
        id: "046f4829-2211-4b92-8a67-d3db3bd4a5c6",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T11:00:00.000+02:00",
        id: "52e216ed-afd0-4fcc-8d4e-fa975ff6c42c",
      },
    ],
  },
  {
    event: "DZIEŃ PRAW OSÓB LGBTI\nStowarzyszenie Amnesty International",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "W piątek 02.08, w namiocie Amnesty, skupimy się na prawach osób LGBTI. Przez cały dzień zapraszamy do podpisywania petycji, uzupełnienia Alfabetu Praw Człowieka w tematyce LGBTI, samodzielnego wykonania tematycznej przypinki/badża, i bransoletek inspirowanych równością wszystkich osób bez względu na tożsamość i orientację seksualną. O godz. 11-13 zapraszamy na malowanie plakatów poświęconych zrównaniu praw osób LGBTI do życia w małżeństwie i założenia rodziny. O godz. 13 – zapraszamy na tematyczny quiz z nagrodami.",
    id: "8bbd206f-7739-40bf-9536-eb77962ae759",
    instances: [
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "bc896820-ae06-4393-bf98-7577c9a2f009",
      },
    ],
  },
  {
    event:
      "Podróżowanie motocyklem co warto wiedzieć i jak się przygotować do tego przygotować\nWhite Wolf - Marek Suslik",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "warsztaty uwzględniają zarówno teoretyczne, jak i praktyczne aspekty przygotowania do podróży motocyklem. \n\nWprowadzenie \n- Dlaczego warto podróżować motocyklem?\n - Zalety podróżowania motocyklem\n  - Wybór odpowiedniego motocykla do różnych typów podróży\n\nPrzygotowanie do Podróży interaktywnie z uczestnikami \n- Wybór destynacji i planowanie trasy\n- Użyteczne aplikacje i mapy\n- Znalezienie miejsc noclegowych\n\nPraktyczne Przygotowanie Motocykla\n- Przegląd techniczny motocykla\n- Co sprawdzić przed podróżą\n- Pakowanie bagażu",
    id: "3e5cba25-9ad3-4601-80b0-0a4a71ad9bfb",
    instances: [
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T11:00:00.000+02:00",
        id: "b56503ed-2918-4ae4-94f2-7ee29d3ea9d6",
      },
    ],
  },
  {
    event:
      "STREFA PLANETA WIEDZY - Choroby psychiczne, myśli samobójcze, uzależnienia, przemoc\nSPZZOZ w Gryficach",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "5479f0b0-99f7-49c1-980d-b09a70eb9dfa",
    instances: [
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T11:00:00.000+02:00",
        id: "f7583dbc-3f55-4e41-acd9-878f31bcd6ef",
      },
    ],
  },
  {
    event:
      'Warsztaty " Fascynujący Świat Pszczół  Pasieka Dziadka Tolka "\nFundacja Ekologiczna Pasieka Dziadka Tolka',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "- wirtualna rzeczywistość  okulary vr - życie pszczoły\n- opowieści o życiu pszczół\n- prezentacja pracy pszczelarza w pasiece\n- rośliny miododajne i rodzaje miodów\n- lecznicza moc pszczół Apiterapia",
    id: "092a27fe-7883-4b4c-a84b-cf095992da80",
    instances: [
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "ff8fb652-e1fd-4927-93f4-12ce9a038131",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "0b19fcc1-9057-4297-bb0c-3b7e9b4be771",
      },
    ],
  },
  {
    event:
      "STREFA OBSERWATORIUM -  Mechanizmy obronne w relacji, akceptacja, inne formy aktywności seksualnej\nSPZZOZ w Gryficach",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "64a5c1c6-f40e-4c92-b984-1dbdc6f70692",
    instances: [
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T11:30:00.000+02:00",
        id: "3bee42e6-b570-4511-8141-c8e71c308fc7",
      },
    ],
  },
  {
    event:
      "STREFA KOSMICZNA PRACOWNIA - Drewniane drogowskazy\nMBP Borne Sulinowo",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "30154ce4-84cf-4626-a158-d8b931c85033",
    instances: [
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T12:30:00.000+02:00",
        id: "6ae3f69f-6fc1-43e8-8559-240e51691e15",
      },
    ],
  },
  {
    event:
      'Zrób z nami drzewo! Upcyckling rekwizytu do spektaklu "BŁOTO"\nFundacja Banina',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Wielu z nas ma w domach mnóstwo nakrętek, które liczyliśmy, że wykorzystamy, ale nigdy nie mamy na to czasu... Stąd postanowiliśmy dać im drugie życie... Jako listki! Pień drzewa już mamy, a twoim zadaniem jest dać mu coś od siebie, namalować, nabazgrać, pokropić farbą nakrętkę, która stanie się kolorowym listkiem. Drzewo po festiwalu, stanie się rekwizytem do naszego edukacyjnego spektaklu "BŁOTO" dla przedszkolaków, nad którym planujemy pracować tą jesienią. W zamian za tak hojną pomoc, proponujemy nagrodę. To co? Zrobisz z nami drzewo?',
    id: "a449fa01-462f-4759-974f-191faad3e319",
    instances: [
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T11:00:00.000+02:00",
        id: "d3053571-f722-4573-9686-d9415ffa02fc",
      },
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T11:00:00.000+02:00",
        id: "eeae2a18-06cf-4ce9-b94d-ae90e3921418",
      },
    ],
  },
  {
    event: "Leszek Lichota",
    place: "Duży Namiot ASP",
    kind: "Spotkanie",
    description:
      'Leszek Lichota – polski aktor filmowy, teatralny i dubbingowy, znany z ról w takich produkcjach jak "Znachor", "Wataha" oraz "Karbala". Pochodzi z Wałbrzycha i jest absolwentem Akademii Teatralnej w Warszawie. Zaraz po studiach związał się z Teatrem Polskim w Poznaniu, z którym współpracował do 2006 roku. Zadebiutował w roli Nany Sirbanghy w "Hamlecie Wtórym" Romana Jaworskiego, reżyserowanym przez Macieja Prusa. Popularność przyniosły mu role w serialach takich jak "Kasia i Tomek", "Na Wspólnej" oraz "Prawo Agaty".  \n \n  #ASP',
    id: "aaad32e1-a002-453a-ab0a-ada310739281",
    instances: [
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T11:20:00.000+02:00",
        id: "5d5d2fba-39c7-4aba-945c-f526a376b668",
      },
    ],
  },
  {
    event: "STREFA PLANETA SPORTU Trening Kung Fu Panda",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "ba3776cc-108f-458d-a990-43ddd312e949",
    instances: [
      {
        dateStart: "2024-08-02T10:00:00.000+02:00",
        dateEnd: "2024-08-02T11:00:00.000+02:00",
        id: "0cecec6c-c870-4b1c-8115-000e26f58b3a",
      },
    ],
  },
  {
    event:
      'Pokazowa Rozprawa "bullying"  w szkole\nStowarzyszenie Sędziów Polskich  "Iustitia"',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'pokazowa rozprawa  oddająca realia sali sadowej z udziałem publiczności , w trakcie której festiwalowicze wcielą się w role stron, profesjonalnych prawników i dowiedzą się czym jest "bullying" , jak sobie z nim radzić , jak rozwiązywać konflikty w środowisku klasowym, jaką rolę odgrywają w tym dorośli, czy prawo ma narzędzia służące do ochrony osób nękanych w środowisku szkolnym',
    id: "a6c137ee-ffa5-463b-9ca7-f6c568db0b77",
    instances: [
      {
        dateStart: "2024-08-02T10:30:00.000+02:00",
        dateEnd: "2024-08-02T12:00:00.000+02:00",
        id: "0725db98-47ed-43f3-b345-e58f3fc5fbac",
      },
    ],
  },
  {
    event:
      "#cisneklate – podaj łapę! Pierwsza pomoc dla zwierząt\nNarodowy Instytut Wolności - Centrum Rozwoju Społeczeństwa Obywatelskiego",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Chcesz wiedzieć jak udzielać pierwszej pomocy, gdyby Twojemu psiemu lub kociemu przyjacielowi coś się stało?\nTwój pies lub kot źle się poczuł i nie wiedziałeś_aś, co mu dolega? Byłeś_aś świadkiem nagłego wypadku z udziałem zwierzęcia i nie wiedziałeś_aś, jak zareagować? Zależy Tobie na zapewnieniu jak najlepszej opieki swojemu pupilowi? Lub może pracujesz ze zwierzętami na codzień? Jeżeli na któreś z powyższych odpowiedziałeś/aś TAK – to te warsztaty są dla Ciebie! Zdobądź praktyczną wiedzę i umiejętności z pierwszej pomocy przedweterynaryjnej!\nCele szkolenia:\n•\tzapoznanie uczestników z podstawami udzielania pierwszej pomocy przedweterynaryjnej dla zwierząt w różnych sytuacjach\n•\twykorzystanie wiedzy poprzez pozoracje z  wykorzystaniem fantoma psa\n•\trozwój kompetencji poprzez zdobycie nowych - teoretycznych i praktycznych - umiejętności przez uczestników warsztatów  \nZakres i treści przekazywane w trakcie szkolenia:\n•\tgdzie szukać pomocy jak coś się stanie Twojemu pupilowi? Jakie są możliwości gabinetów weterynaryjnych?\n•\tjak rozpoznawać ból i stan nagły u zwierzęcia oraz jak ocenić czy potrzebna jest ingerencja lekarza weterynarii? Jak zapewnić sobie bezpieczeństwo własne?\n•\tjak udzielić pierwszej pomocy, gdy wystąpi niewydolność oddechowa? Jak zareagować w przypadku zadławienia? Jak przeprowadzić resuscytację krążeniowo-oddechową u zwierząt?\nWarsztaty prowadzone przez instruktorów Fundacji Rysy, wspieranej przez NIW-CRSO w ramach programu NOWE FIO.",
    id: "8cb74ee9-7cc0-4b5f-b53e-35060bf9e266",
    instances: [
      {
        dateStart: "2024-08-02T11:00:00.000+02:00",
        dateEnd: "2024-08-02T12:00:00.000+02:00",
        id: "8c35e389-dfbd-4705-855d-1b5a25de36ab",
      },
      {
        dateStart: "2024-08-02T15:00:00.000+02:00",
        dateEnd: "2024-08-02T16:00:00.000+02:00",
        id: "5278796c-7285-4322-ae83-9e24b158d13e",
      },
    ],
  },
  {
    event:
      "Orła cień\nOkręgowa Izba Radców Prawnych w Poznaniu i Izba Notarialna w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "W tym roku Namiot Radców Prawnych gości notariuszy z Izby Notarialnej w Poznaniu, którzy przeprowadzą wyjątkowe, prawniczo - plastyczne zajęcia dla najmłodszych uczestników festiwalu",
    id: "956457b9-9015-4f7e-8f51-90a717a849aa",
    instances: [
      {
        dateStart: "2024-08-02T11:00:00.000+02:00",
        dateEnd: "2024-08-02T12:00:00.000+02:00",
        id: "ed34a64f-a64f-470f-be7c-7e18c4cb8dcd",
      },
    ],
  },
  {
    event: "Warsztaty o przemocy seksualnej\nStowarzyszenie Kongres Kobiet",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description: "Warsztaty o przemocy seksualnej",
    id: "8debb1c1-39a3-4580-83e8-db5f6bd63995",
    instances: [
      {
        dateStart: "2024-08-02T11:00:00.000+02:00",
        dateEnd: "2024-08-02T12:00:00.000+02:00",
        id: "996a0f84-b32e-4ea7-b43c-f95d190cdb4c",
      },
    ],
  },
  {
    event:
      "Od Tremy do Triumfu czyli Wystąpienia Publiczne a Trening Mentalny\nToastmasters",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Czy nie miałeś czasami tak, że jesteś perfekcyjnie przygotowany do swojego wystąpienia, wychodzisz przed publiczność z ogromną pewnością siebie, ale finalnie... no właśnie? Co właśnie w tej naszej głowie się znajduje i jak opanować wewnętrznego krytyka, stres, a przede wszystkim obrócić swoje obawy w swój zasób? Te tematy poruszymy na najbliższym warsztacie. Odwołuję się do ekspertów w swojej dziedzinie, nie zabraknie więc, Daniela Kahnemana, Stephena Coveya czy Simona Sinka. Jednak spokojnie, jako że moje motto brzmi: Teoria jest dla praktyków, gwarantuję, że będzie praktycznie. Nazywam się Aleksandra Kot  Coach, Trener mentalny, studentka Psychologii Biznesu, Filologii Angielskiej oraz Germanistyki",
    id: "39cbf69b-df65-4c94-91d6-9f74af2ab651",
    instances: [
      {
        dateStart: "2024-08-02T11:00:00.000+02:00",
        dateEnd: "2024-08-02T12:00:00.000+02:00",
        id: "d7893811-0efd-4a98-b973-fb306a1b6578",
      },
    ],
  },
  {
    event: "Tatuaże a prawa autorskie\nPolska izba rzeczników patentowych",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Prawo autorskie to domena zarówno twórców jak i samych użytkowników twórczości. Warsztaty to dawka solidnej wiedzy dla tatuażystów jak i tatuowanych o tym jak legalnie wykorzystywać, ale i później dumnie nosić sztukę jaką jest body-art. Spora dawka prawa autorskiego z zupełnie praktycznej perspektywy połączona z ciekawostkami z rynku.\nNo i może trochę niepopularnie - ale chętnie poopowiadamy, co gdy Wasz tatuaż nie wyjdzie najlepiej...? Czy nieudany utwór to także utwór no i przede wszystkim czy mogę ten utwór "zniszczyć" np. coverem?',
    id: "4750790b-cb22-4f6a-a5ca-0166239367ad",
    instances: [
      {
        dateStart: "2024-08-02T11:00:00.000+02:00",
        dateEnd: "2024-08-02T12:00:00.000+02:00",
        id: "38c74ebf-263d-4dc4-b0b2-edf78f3d83d8",
      },
    ],
  },
  {
    event: '"Obca" - monodram\nFundacja Banina',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Obca” jest literackim zapisem przeżyć, które stały się udziałem młodej Ukrainki, tytułowej Obcej, w związku z przyjazdem do Polski po protestach na Majdanie i wybuchu wojny w Donbasie. Jej emigracyjna historia staje się głosem pokolenia, którego życie odmieniła konieczność emigracji i przebywania na obczyźnie, związanymi z tym trudnościami i zmaganiem się ze stereotypami.\nSpektakl porusza problem alienacji osób uchodźczych, lęków i trudności, z jakimi się borykają. Spektakl posługuje się metaforą, sam tytuł nawiązuje do sposobu traktowania imigrantów, którzy są często uznawani za zagrożenie dla naszej tożsamości. Główna bohaterka po przybyciu do Polski czuje się i jest traktowana jak obca. Spektakl symbolicznie odzwierciedla problem relacji obcy/swój jako pewnego rodzaju podział społeczny. Mowa tu o doznaniach, strachu, stereotypach, barierach, które trudno przełamać.\nPrzez pierwszą część spektaklu aktorka pozostaje w masce, obracając w dłoniach kulę-globus, opowiadając o kontekście globalnym. Krótki fragment, dotyczący doświadczenia Majdanu i obecnej agresji Rosji na Ukrainę jest grany po ukraińsku. Aktorka pochodząca z Kołomyi odsłania twarz w trakcie spektaklu, prowadząc dialog w języku polskim z publicznością.\n\nSpektakl jest szczególnie ważny w aktualnym kontekście wojny w Ukrainie. Nie tylko opowiada o problemie uchodźstwa, którego tak wiele osób teraz doświadczyło i doświadcza, ale także podejmuje próbę zrozumienia tych osób, integracji młodzieży polskiej z ukraińską, pokazania, że głos osób z Ukrainy jest ważny i będzie wysłuchany. Spektakl ma na celu zacieranie podziałów między „swoimi”, a „obcymi”, zmianę kategorii myślenia o „obcym”  na „inny”, ponieważ „inny” nie jest wartościowany.\nWystępuje: Solomija Mardarovych\nSpektakl od 13 roku życia\n\nPo spektaklu zapraszamy na rozmowę.",
    id: "3319cd7a-415d-43de-baf3-ebdc0afda10f",
    instances: [
      {
        dateStart: "2024-08-02T11:00:00.000+02:00",
        dateEnd: "2024-08-02T13:00:00.000+02:00",
        id: "9fa9c289-0f39-4af0-b8a0-c83a7714972a",
      },
    ],
  },
  {
    event:
      "STREFA PLANETA WIEDZY - Psycholog, psychiatra….kiedy zapukać do których drzwi\nSPSZOP Zdroje",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "1805a5cd-1ded-4c91-bfbb-66721e4a9664",
    instances: [
      {
        dateStart: "2024-08-02T11:00:00.000+02:00",
        dateEnd: "2024-08-02T12:00:00.000+02:00",
        id: "2baaacf5-c26f-44d2-adae-36855701db32",
      },
    ],
  },
  {
    event:
      "kuj żelazo póki gorące\nstowarzyszenie stara oliwa im.Danuty Rolke-Poczman",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "kujemy w prawdziwym palenisku kowalskim , chcemy za poznać młodzież z arkanami pracy kowala, ktora praktycnie nie zmienila sie od tysiąc lat",
    id: "67567639-0a98-40a5-bafa-13661ba3b277",
    instances: [
      {
        dateStart: "2024-08-02T11:00:00.000+02:00",
        dateEnd: "2024-08-02T17:00:00.000+02:00",
        id: "98d0dcd1-9a95-4fa0-90be-20678e087b3a",
      },
    ],
  },
  {
    event: "STREFA PLANETA SPORTU - Turniej gry w bule\nDecathlon",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "405a4d9d-10c8-4d1b-8086-35a161a188d3",
    instances: [
      {
        dateStart: "2024-08-02T11:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "a2f48366-4fca-4be4-a5ec-ad77d7260de7",
      },
    ],
  },
  {
    event: "Gość specjalny mBanku: Magda Mołek",
    place: "Duży Namiot ASP",
    kind: "Spotkanie",
    description:
      "Magda Mołek – ikona polskiego dziennikarstwa i inspirująca mówczyni motywacyjna. Spotkanie z gościem specjalnym mBanku będzie wyjątkową okazją do szczerej rozmowy o autentyczności, dążeniu do doskonałości i czerpaniu radości z życia.  \n \n  #ASP",
    id: "4d841dfb-1bb6-45d9-9849-ccb640941d72",
    instances: [
      {
        dateStart: "2024-08-02T11:30:00.000+02:00",
        dateEnd: "2024-08-02T13:00:00.000+02:00",
        id: "800dbff5-1bca-4182-9b47-49ca4ab3a8e0",
      },
    ],
  },
  {
    event:
      "„Twoje prawa, nasza sprawa” – prawa osobiste\nBiuro Rzecznika Praw Obywatelskich",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "„Twoje prawa, nasza sprawa” – prawa osobiste –  Zajęcia prowadzone na bazie wydanej przez BRPO publikacji i na podstawie spraw, jakie są zgłaszane do Rzecznika Praw Obywatelskich. Warsztat wiedzy obywatelskiej i wszelkich działań na rzecz praw człowieka",
    id: "339e8f4d-8bf5-41d3-b053-d57fbbdbc13f",
    instances: [
      {
        dateStart: "2024-08-02T11:30:00.000+02:00",
        dateEnd: "2024-08-02T12:30:00.000+02:00",
        id: "638200c8-09f0-46ff-86a8-df5d60f84f6f",
      },
    ],
  },
  {
    event: "Ekstrawagancka MOC w Twoich Włosach\nFundacja Złotowianka",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Poczuj moc kreatywności, tworząc niepowtarzalne, zabawne i unikalne opaski do włosów! Każdy otrzyma opaskę i różne ozdoby, aby stworzyć jedyną w swoim rodzaju ozdobę na głowę, która będzie wyróżniać się na tle festiwalowej zabawy",
    id: "24f3042d-06e2-460a-a332-115004cd852d",
    instances: [
      {
        dateStart: "2024-08-02T11:30:00.000+02:00",
        dateEnd: "2024-08-02T14:00:00.000+02:00",
        id: "1f3ff1a7-bc39-4626-984d-103a028d2b18",
      },
    ],
  },
  {
    event:
      "STREFA OBSERWATORIUM - Rak w rodzinie - jak rozmawiać? Jak wesprzeć bliską osobę która choruje?\nZCO",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "6ac9cec3-a279-4b77-8f0d-ad5d49cd5f0f",
    instances: [
      {
        dateStart: "2024-08-02T11:30:00.000+02:00",
        dateEnd: "2024-08-02T12:30:00.000+02:00",
        id: "f965739a-4883-4a1e-9846-38bc6b5e582f",
      },
    ],
  },
  {
    event: "Spektrum autyzmu a przemoc\nFundacja Feminoteka",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Dyskusja dotycząca spojrzenia z dwóch stron: gdy osoba aneurotypowa doświadcza przemocy oraz ją stosuje. Jak wiele osób z ASD pada ofiarą przemocy i dlaczego? Na który jej rodzaj są najbardziej narażeni? Czy ASD uzasadnia zachowanie agresywne? Analizujmy przyczyny i sposoby przeciwdziałania.",
    id: "a51e38da-8350-4242-bb7c-e20837489ce8",
    instances: [
      {
        dateStart: "2024-08-02T11:30:00.000+02:00",
        dateEnd: "2024-08-02T13:30:00.000+02:00",
        id: "3e65da4a-dbd8-4af9-b597-d79753d743fb",
      },
    ],
  },
  {
    event: "NIEALIMENTACJA\nStowarzyszenie Kongres Kobiet",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "czy to sprawa indywidualna czy „państwowa” i dlaczego państwo\nnie działa? W Polsce ok. 1 miliona dzieci nie dostaje alimentów od swojego rodzica. Spotkanie z\nautorką zmian legislacyjnych - mec. Danutą Wawrowską.",
    id: "88de724d-e066-4a11-8062-0bb73a563551",
    instances: [
      {
        dateStart: "2024-08-02T12:00:00.000+02:00",
        dateEnd: "2024-08-02T13:00:00.000+02:00",
        id: "ac192dcb-b37b-4642-8b62-b4a206e74d0f",
      },
    ],
  },
  {
    event: "Wszystko o alimentach.\nKrajowa Rada Komornicza",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Konsultacje skierowane do obu stron postępowania. Postaramy się wyjaśnić wszystkie zawiłości z jakimi możecie się spotkać próbując odzyskać lub zapłacić alimenty.",
    id: "443de99a-5e39-4592-ba6d-7872aa93171f",
    instances: [
      {
        dateStart: "2024-08-02T12:00:00.000+02:00",
        dateEnd: "2024-08-02T14:00:00.000+02:00",
        id: "14bccf55-e6ed-4fe2-b06d-8e594c289ece",
      },
    ],
  },
  {
    event: "Polska inspiruje Polskę\nOnet.pl",
    place: "Namiot Warsztatowy ASP",
    kind: "Warsztat",
    description: "",
    id: "b3ca342b-4d58-4305-b63e-24ef2a687a2a",
    instances: [
      {
        dateStart: "2024-08-02T12:00:00.000+02:00",
        dateEnd: "2024-08-02T13:00:00.000+02:00",
        id: "15ac9489-010b-49d8-a143-a744bbd41f5e",
      },
    ],
  },
  {
    event:
      "5ty Marsz Równości na Pol'and'Rock - Pol'and'Pride\nFundacja Lambda Polska",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "To już piąty raz tęczowy pochód przejdzie przez Najpiękniejszy Festiwal Świata. Start i meta przy strefie Pomorza Zachodniego. To taki jedyny Marsz w Polsce, gdzie czujemy się zupełnie bezpiecznie. Będzie mnóstwo tęczy, muzyki, tańca, ale także nasze postulaty: równość małżeńska z prawem do adopcji, godna i humanitarna procedura tranzycji oparta na samostanowieniu, ochrona przed mową nienawiści i przestępstwami z nienawiści. Zapraszamy wszystkie osoby, dla których równość, równouprawnienie, miłość, wolność i akceptacja są wartością.",
    id: "a4225262-e4c1-4ae0-8e93-6450a326f2ad",
    instances: [
      {
        dateStart: "2024-08-02T12:00:00.000+02:00",
        dateEnd: "2024-08-02T14:00:00.000+02:00",
        id: "ba2adfef-f2a7-4a3e-995a-31d031ae7efc",
      },
    ],
  },
  {
    event:
      "I'M SO HORNY THAT'S OKAY-seks i relacje na trzeźwo\nFundacja Biuro Służby Krajowej Anonimowych Alkoholików w Polsce",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      '"I\'m so horny that\'s okay- seks i relacje na trzeźwo" - jak nazwa panelu wskazuje, będzie on dotyczył życia seksualnego i budowania relacji. Wiele osób (uzależnionych lub nie :-)) nie wyobraża sobie randkowania i poznawania drugiej osoby bez "wspomagania". Spotkanie będzie otwartą przestrzenią, dla każdego, kto chciałby podzielić się swoim doświadczeniem w tym temacie. Jako, że poruszany wątek jest dla niektórych osób delikatny, zapewniamy Was, że ten mityng (i inne oczywiście też!!) będzie miejscem wolnym od wszelkich ocen.',
    id: "ac68c57d-dbd6-44b1-a7b8-9e90b6941a6c",
    instances: [
      {
        dateStart: "2024-08-02T12:00:00.000+02:00",
        dateEnd: "2024-08-02T13:00:00.000+02:00",
        id: "1f228e3f-e115-4aab-ac16-5baa90c291c4",
      },
    ],
  },
  {
    event:
      'Żywa Biblioteka / Living Library Poland\nFundacja na Rzecz Grup Dyskryminowanych "Fala Równości"',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Celami Żywej Biblioteki są:\n1. Tworzenie przestrzeni dialogu i porozumienia.\n2. Działanie na rzecz poszanowania praw człowieka.\n3. Przekazywanie wiedzy i doświadczenia osób narażonych na dyskryminację, stereotypizację, uprzedzenia, wykluczenie.\n4. Kształtowanie postaw otwartości i akceptacji wobec różnorodności.\nŻywa Biblioteka to wydarzenie, które pozwala czytelnikom i czytelniczkom na kontakt z przedstawicielami i przedstawicielkami grup obarczanych stereotypami, narażonych na wykluczenie i gorsze traktowanie, dyskryminację.\nŻywa Biblioteka polega na osobistej rozmowie z reprezentantem czy reprezentantką grupy doświadczającej stygmatyzacji. Rozmowa z Żywą Książką ma swobodny charakter i odbywa się w przyjaznej atmosferze.\nPierwsza Żywa Biblioteka została zorganizowana w roku 2000 w Danii podczas festiwalu muzycznego w Roskilde. Wzięło w niej udział kilkadziesiąt Żywych Książek. W Polsce Żywe Biblioteki są organizowane od 2007 roku.\nWydarzenie jest zorganizowane w konwencji biblioteki – są Żywe Książki (przedstawiciele i przedstawicielki grup traktowanych stereotypowo, wykluczanych lub dyskryminowanych), są czytelnicy i czytelniczki (osoby, które bibliotekę odwiedzają i rozmawiają z Żywymi Książkami), są także bibliotekarki (osoby, które czuwają nad przebiegiem wydarzenia i „wypożyczają” Żywe Książki).\nKsiążka w Żywej Bibliotece ma wyjątkowe znaczenie. Jej rola polega na szczerej rozmowie z czytelnikiem, czytelniczką. To szczególne spotkanie „twarzą w twarz” ma przede wszystkim wpłynąć na uprzedzenia względem konkretnej grupy, którą Żywa Książka reprezentuje.\nWierzymy, że rozmowy z Żywymi Książkami przyczynią się do wzajemnego poznania, szacunku i akceptacji.\nŻywą Książkę określa się tytułem. Jest on związany ze stereotypem, który tej Książki dotyczy".',
    id: "46658c31-eb33-458a-bcdd-41bfafbcf8e7",
    instances: [
      {
        dateStart: "2024-08-02T12:00:00.000+02:00",
        dateEnd: "2024-08-02T17:00:00.000+02:00",
        id: "29686b62-08df-4c10-a129-2c08f3e2c4ce",
      },
    ],
  },
  {
    event:
      "STREFA DZIECIĘCA GWIAZDA - Malowanie na plastrze drewna\nMBP Borne Sulinowo",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "68c2c474-1ca4-47bf-afb9-d122347690b7",
    instances: [
      {
        dateStart: "2024-08-02T12:00:00.000+02:00",
        dateEnd: "2024-08-02T14:30:00.000+02:00",
        id: "96a3998e-5c21-467f-8c55-44e7a53c598c",
      },
    ],
  },
  {
    event:
      "STREFA PLANETA WIEDZY - Dlaczego psychiatra zaleca jogę? - tu ciało spotyka umysł\nSPSZOP Zdroje",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "c3a28124-57c8-4712-bc97-b78195b64630",
    instances: [
      {
        dateStart: "2024-08-02T12:00:00.000+02:00",
        dateEnd: "2024-08-02T13:00:00.000+02:00",
        id: "d09a67de-9608-45e7-a93d-7ae398946d26",
      },
    ],
  },
  {
    event:
      "Dzień dobry Panie Władzo - czyli o kontaktach z organami\nOkręgowa Izba Radców Prawnych w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Warsztat dotyczy skutecznych i bezpiecznych interakcji z przedstawicielami organów ścigania. Omówi podstawowe zasady komunikacji i zachowania podczas kontroli drogowej, zatrzymania lub innych sytuacji wymagających interwencji służb. Uczestnicy dowiedzą się, jakie są ich prawa i obowiązki oraz unikać konfliktów i nieporozumień. Poruszone zostaną także kwestie jak rozpoznać nadużycia ze strony funkcjonariuszy i jakie kroki można podjąć w razie potrzeby zgłoszenia skargi. Dodatkowo warsztat może zawierać ćwiczenia praktyczne, symulacje sytuacji oraz sesję pytań i odpowiedzi aby uczestnicy mogli lepiej przygotować się na różne scenariusze w realnym życiu.",
    id: "d11750a8-5885-474d-9d86-caf058e12629",
    instances: [
      {
        dateStart: "2024-08-02T12:00:00.000+02:00",
        dateEnd: "2024-08-02T12:55:00.000+02:00",
        id: "6276fafd-997a-491f-b40e-5c54e54a4ffb",
      },
    ],
  },
  {
    event:
      "Białogłosuj – słowiańskie warsztaty pieśni tradycyjnych\nGminny Ośrodek Kultury i Sportu Grodzisko Owidz",
    place: "Strefa Działań Twórczych ASP",
    kind: "Warsztat",
    description:
      "Podczas warsztatów przełamiemy własne słabości i uwolnimy głos, wyzbywając się wszelkich barier i odczuwając pozytywne skutki śpiewu na całe ciało, rozładowując napięcie i wzmacniając samoakceptację. \nGłównoprowadząca Daria Fedde otwiera głosy dzięki kilku prostym ćwiczeniom, a Team Białogłosów wspiera śpiew w grupie , dzięki czemu uczestnicy poczują się pewniej.\nPrzebieg zajęć:\n- ćwiczenia relaksacyjne, oddechowe, głosowe\n-nauka pieśni, jej kontekst oraz poznanie głosów\n-śpiew całą grupą i cieszenie się wspólnym byciem\nPodczas warsztatów Białogłosy przeprowadzą szereg zadań i ćwiczeń, które ułatwiają śpiewanie i zachęcają do nauki wielu tradycyjnych pieśni, zarówno kaszubskich, kociewskich, kurpiowskich, jak i pieśni z różnych regionów świata, takich jak Ukraina, Bułgaria, Serbia itp Przebieg warsztatów: rozgrzewka ruchowa w celu rozluźnienia ciała, ćwiczenia oddechowe i rozgrzewające struny głosowe, nauka pieśni w wielogłosie, wyśpiewanie gotowych utworów tradycyjnych. Cele grupy: promowanie muzyki regionalnej: promowanie muzyki regionalnej, takiej jak kaszubska, kociewska, kurpiowska i inne; ochrona i promocja dziedzictwa kulturowego, dążenie do zachowania i upowszechniania tradycyjnych pieśni, które są ważnym elementem dziedzictwa kulturowego Polski i innych regionów Świata; edukacja i świadomość kulturowa. Poprzez naukę i wykonawstwo tradycyjnych pieśni, grupa stara się podnosić świadomość kulturową w społeczeństwie. Promowanie muzyki mniejszości etnicznych: grupa angażuje się również w promowanie muzyki mniejszości etnicznych, by budować mosty między różnymi społecznościami. Współpraca z lokalnymi społecznościami: aktywna współpraca z lokalnymi społecznościami. Organizacja warsztatów edukacyjnych dla każdego odbiorcy w atmosferze dobra i akceptacji. Propagowanie idei muzykowania, jako sposobu bycia ze sobą i budowania wspólnoty.",
    id: "81517683-ca56-4861-b467-21fd5a5f4082",
    instances: [
      {
        dateStart: "2024-08-02T12:00:00.000+02:00",
        dateEnd: "2024-08-02T14:00:00.000+02:00",
        id: "42831eee-408f-492e-a638-69c43b42b054",
      },
      {
        dateStart: "2024-08-03T12:00:00.000+02:00",
        dateEnd: "2024-08-03T14:00:00.000+02:00",
        id: "71835918-198d-4087-b8f0-edc9f02f68bd",
      },
    ],
  },
  {
    event: "Tryb IRONMAN - osiagnij swój maksymalny potencjał\nToastmasters",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "To wystąpienie jest dla ciebie jeśli: - interesujesz się rozwojem osobistym - chcesz poznać skuteczne narzędzia do pracy nad sobą - chcesz poznać kompletny program rozwoju osobistego Z mojego wystąpienia dowiesz się przede wszystkim: - czy życie jak by miało nie być jutra jest najlepszym podejściem - czy da się zrobić IRONMANa z ręką w gipsie - jakie 7 elementów pracy nad sobą da ci niespotykane rezultaty Ryszard Kral Trener Rozwoju - doświadczony manager, certyfikowany mentor i coach z bogatym doświadczeniem w zarządzaniu dużymi organizacjami. Prowadzi szkolenia pod marką „Jak Osiągać Cele – Ryszard Kral”, jest Ironmanem, ultramaratończykiem, skoczkiem spadochronowym i certyfikowanym nurkiem.",
    id: "0ebf9417-6aa7-47a1-a5f6-148d596e6554",
    instances: [
      {
        dateStart: "2024-08-02T12:00:00.000+02:00",
        dateEnd: "2024-08-02T13:00:00.000+02:00",
        id: "6727cd1d-cdec-4b9a-9573-eda681318596",
      },
    ],
  },
  {
    event:
      "AI - technologia w służbie wymiaru sprawiedliwości\nIzba Adwokacka w Warszawie i Stowarzyszenie Prokuratorów Lex Super Omnia",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Warsztaty z użyciem nowoczesnych technologii i sztucznej inteligencji (AI). Analiza „miejsca zbrodni” przy użyciu okularów rozszerzonej rzeczywistości HoloLens 2. Pokażemy również, jak sztuczna inteligencja może wspomagać pracę prokuratorów i sędziów w zakresie analizy materiału dowodowego i wyszukiwania informacji w dokumentach. Omówimy, w jakich obszarach wymiaru sprawiedliwości zastosowanie AI jest bezpieczne i wskazane, a w jakich rola człowieka jest kluczowa.  \n \n  #prawo  \n  \n  #ASP",
    id: "c0847fe1-26e2-4c09-b0bf-2550c7390cfe",
    instances: [
      {
        dateStart: "2024-08-02T12:30:00.000+02:00",
        dateEnd: "2024-08-02T13:30:00.000+02:00",
        id: "af5a923b-8ce2-4f0c-b907-b2d3dc6ddbf0",
      },
    ],
  },
  {
    event:
      "STREFA KOSMICZNA PRACOWNIA - Warsztaty tworzenia toreb z siatki mesh\nReMakeIt",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "cb4b14bd-95f4-494d-8e43-7373ebbf9036",
    instances: [
      {
        dateStart: "2024-08-02T12:30:00.000+02:00",
        dateEnd: "2024-08-02T14:30:00.000+02:00",
        id: "35440f76-5668-48c1-a838-869abbe4d979",
      },
    ],
  },
  {
    event:
      "STREFA OBSERWATORIUM - Energetyka wiatrowa elementem transformacji energetycznej\nPSEW",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "f21af204-ae8e-46c7-9980-46a8496e171d",
    instances: [
      {
        dateStart: "2024-08-02T12:30:00.000+02:00",
        dateEnd: "2024-08-02T13:30:00.000+02:00",
        id: "1f371934-1754-437a-8189-b4a988422dfd",
      },
    ],
  },
  {
    event: "Codzienność za kratami\nOkręgowa Izba Radców Prawnych w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "W warsztacie: zadania Służby Więziennej, obowiązki osadzonych, podkultura więzienna (grypsowanie, zwyczaje, niepisane zasady, znaczenie tatuaży), widzenia, zagrożenia w codziennej służbie, napaści na funkcjonariuszy, uprawnienia funkcjonariuszy, wskazanie na co najczęściej skarżą się osadzeni.",
    id: "69d43d27-d0ef-40f0-8acf-0ac0a90c3f27",
    instances: [
      {
        dateStart: "2024-08-02T13:00:00.000+02:00",
        dateEnd: "2024-08-02T14:00:00.000+02:00",
        id: "f5ef9d1f-f1e9-4e5d-ac9c-9954b6b40639",
      },
    ],
  },
  {
    event:
      "Z głową w chmurach, czyli jak poznajemy odległe światy\nPolskie Towarzystwo Astrobiologiczne",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Obce światy od zawsze pobudzały wyobraźnię ludzi, zarówno naukowców jak artystów. Chęć poznania napędzała naszą kosmiczną wędrówkę przez inne planety układu słonecznego, od sond Pioneer, aż po New Horizons. W końcu, jednak nasza ciekawość opuściła rodzimy układ i powędrowała dalej za jego horyzonty. Jeszcze dekadę temu obserwacje oraz badanie egzoplanet były w powijakach. Jednak wraz z pomocą Kosmicznego Teleskopu Hubble’a i Spitzera, oraz rozwojowi technologicznemu, teraz możemy zaglądać w głąb atmosfer planet spoza Układu Słonecznego. Dzięki temu, możemy zacząć próbować odpowiadać na nurtujące astrobiologów pytania: gdzie szukać planet, na których może występować życie? Czym się charakteryzują? Ile ich na nas czeka? \nPodczas tego spotkania wspólnie przedyskutujemy taką możliwość i postaramy się odpowiedzieć na jedno z najstarszych pytań ludzkości.",
    id: "43037ef8-0deb-4c2b-9524-083e304b8217",
    instances: [
      {
        dateStart: "2024-08-02T13:00:00.000+02:00",
        dateEnd: "2024-08-02T15:00:00.000+02:00",
        id: "724d1b93-d34c-49d0-a3e3-f10c75929699",
      },
    ],
  },
  {
    event:
      "Panel dyskusyjny - Oswajamy niepełnosprawność\nFundacja Złotowianka",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Niekiedy  spotykając ludzi z niepełnosprawnościami nie potrafimy zachować się swobodnie. Zazwyczaj wynika  to z braku wiedzy co powinniśmy zrobić. Co powiedzieć, czy pomagać, w jaki sposób proponować wsparcie?  Zapraszamy na panel dyskusyjny z udziałem osób z niepełnosprawnościami, które podzielą się swoimi doświadczeniami i wyzwaniami codziennego życia. Chcemy razem z Wami poruszyć temat akceptacji i integracji osób z niepełnosprawnościami w społeczeństwie, odpowiedzieć na Wasze pytania, rozwiać wątpliwości oraz poszukać sposobów na rozwijanie świadomości na ten temat.",
    id: "3f416854-4ec8-4cf2-9381-d26b90cbe9f5",
    instances: [
      {
        dateStart: "2024-08-02T13:00:00.000+02:00",
        dateEnd: "2024-08-02T15:00:00.000+02:00",
        id: "87ab5b8e-263b-48f1-9d97-3b54ce72f0f5",
      },
    ],
  },
  {
    event: "Sto pytań do Doroty Aqualitei Rabczewskiej - Dody\nFundacja Banina",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Pamiętasz taką panią jak Doda? My tak, i bardzo chcemy zadać jej parę pytań - jak żyje, kiedy następna płyta i takie tam. Chcesz zadać jej pytania, dodać jej otuchy lub powiedzieć "nie daj się"? Przyjdź do nas!',
    id: "e31a5276-9025-49f5-b471-2c21df6fcb31",
    instances: [
      {
        dateStart: "2024-08-02T13:00:00.000+02:00",
        dateEnd: "2024-08-02T15:00:00.000+02:00",
        id: "f18a0146-3cdb-4764-9904-91c9032a655c",
      },
    ],
  },
  {
    event: "Mity Słowian - opowieści żywe\nWioska Słowiańska",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "To interaktywne przedstawienie sceniczne oferuje niezwykłą formę czytania performatywnego, które wciąga widzów w głęboką, pełną tajemnic mitologię Słowiańską. Każdy element jest zaplanowany tak, aby przybliżyć publiczności, kosmogonię i wierzenia Słowian, które od wieków fascynują i inspirują. Poprzez interaktywne elementy,  intensyfikują ich doświadczenie i umożliwia pełniejsze zanurzenie się w krajobrazie mitów i legend. To wyjątkowa okazja do odkrywania niezwykłego dziedzictwa kulturowego oraz zgłębiania głębszych znaczeń przekazanych przez słowiańskie mity i podania.",
    id: "dbf13db0-569f-48b2-b761-0463a79101e7",
    instances: [
      {
        dateStart: "2024-08-02T13:00:00.000+02:00",
        dateEnd: "2024-08-02T14:00:00.000+02:00",
        id: "a994ac70-7e7a-4639-bd33-06869f1dc142",
      },
    ],
  },
  {
    event:
      "Debata „Wolność zgromadzeń a zatrzymania przez funkcjonariuszy Policji”\nBiuro Rzecznika Praw Obywatelskich",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Debata „Wolność zgromadzeń a zatrzymania przez funkcjonariuszy Policji” – debata o prawie do wolności zgromadzeń, jakie prawa rządzą organizowaniem protestów społecznych, rola policji w zabezpieczeniu bezpieczeństwa, prawa osób uczestniczących w protestach oraz prawa osób zatrzymanych podczas protestów.\nModeracja:  Adam Krzywoń",
    id: "d007c103-41f4-4687-a136-bd792472a5b3",
    instances: [
      {
        dateStart: "2024-08-02T13:00:00.000+02:00",
        dateEnd: "2024-08-02T14:30:00.000+02:00",
        id: "d2f88e6a-3918-4ce7-9118-234abc227a71",
      },
    ],
  },
  {
    event: "Warsztat Ambrotypii - Mokrego Kolodionu.\nGmina Czaplinek",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Warsztat Ambrotypii - Mokrego Kolodionu\n\nZapraszamy na wyjątkowe warsztaty, podczas których będzie można poznać fascynującą technikę fotograficzną z XIX wieku - ambrotypię, znaną również jako mokry kolodion. Technika ta, wynaleziona w drugiej połowie XIX wieku, polega na tworzeniu obrazów na przeźroczystej szybie przy użyciu osiadłego metalicznego srebra. Jest to zarówno proces manualny, jak i chemiczny, który daje niezwykłe, niepowtarzalne efekty.\n\nCo Czeka na Uczestników Warsztatów?\nPodczas warsztatów uczestnicy będą mieli okazję:\n\nZobaczyć na żywo prezentację techniki ambrotypii, gdzie każdy krok zostanie szczegółowo omówiony i pokazany przez doświadczonego fotografa.\nDowiedzieć się, jak przygotować materiał światłoczuły poprzez nakładanie kolodionu na szklane płyty.\nZobaczyć proces tworzenia zdjęć przy użyciu wielkoformatowego aparatu fotograficznego, który doskonale oddaje historyczny charakter tej techniki.\nObserwować proces wywoływania obrazów w przenośnym namiocie-ciemni, który będzie stanowił integralną część warsztatów.\nW trakcie warsztatów powstaną autentyczne zdjęcia uczestników festiwalu Pol'and'Rock 2024. Każdy uczestnik będzie miał okazję na własnej skórze doświadczyć, jak wygląda proces tworzenia ambrotypii - od przygotowania płyty, przez ekspozycję, aż po wywołanie i utrwalenie obrazu.\n\nMagiczny Moment Tworzenia Fotografii\n\n„Te kilka sekund, podczas których ktoś kogo fotografuję pozuje w bezruchu przed aparatem… Wszystko wtedy zwalnia. W tym tak krótkim mogłoby się wydawać czasie, dzieje się coś, czego inaczej nie dałoby się uchwycić. Przez otwór obiektywu dociera do nas światło. Ma wystarczająco dużo czasu, by oświetlić każdy nasz zakamarek, a i my mamy czas, by się z nim oswoić. Powstaje obraz, na którym my –jacyś inni… niewidzialni-widzialni… przez światło.” J. Cyganek\n\nDlaczego Warto Wziąć Udział?\nUnikalne doświadczenie: Technika ambrotypii jest rzadko stosowana we współczesnej fotografii, a możliwość zobaczenia i uczestniczenia w procesie jej tworzenia to wyjątkowa okazja.\nHistoryczna podróż: Poznanie techniki fotograficznej z XIX wieku pozwala lepiej zrozumieć historię i ewolucję fotografii.\nPamiątka na całe życie: Uczestnicy będą mogli zabrać ze sobą wyjątkowe, niepowtarzalne fotografie wykonane tą techniką.\nWarsztaty odbędą się pod specjalnym namiotem, wyposażonym w niezbędne stanowiska do pracy, ciemnię oraz przestrzeń do odpoczynku i kontemplacji procesu twórczego. Zapraszamy wszystkich chętnych do wzięcia udziału i doświadczenia magii ambrotypii na własne oczy.\nEkwipunek użyty podczas warsztatów:\n\n1.\tnamiot ciemniowy 134 cm x 134 cm , wysokość 170cm (umieszczony w namiocie głównym warsztatowym)\n2.\taparat wielkoformatowy, statyw\n3.\tszyby, ekwipunek do wykonania zdjęć",
    id: "f80e5675-640a-49b4-9e63-3c60e0993838",
    instances: [
      {
        dateStart: "2024-08-02T13:00:00.000+02:00",
        dateEnd: "2024-08-02T17:00:00.000+02:00",
        id: "c9b2d125-d2b3-41f3-90b9-a44546ea1908",
      },
    ],
  },
  {
    event: "Wyjście z uzależnienia - proste, ale nie łatwe\nToastmasters",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Podzielę się wiedzą, swoim doświadczeniem, i praktycznymi działaniami, które sprawią, że zwiększysz swoje szanse na wyjście z uzależnienia. Przedstawię między innymi: - Czym tak naprawdę jest uzależnienie- Od czego można się uzależnić- Czym różni się uzależnienie od zainteresowania, pasji, nawyku- Jakie są fazy uzależnienia i wychodzenia z niego- Po czym rozpoznać (u siebie, kogoś) uzależnienie?- Plusy i minusy uzależnienia Mechanizmy uzależnienia- Jak substancje psychoaktywne wpływają na organizm i emocje- Jak radzić sobie z trudnymi emocjami?- Jak zagospodarować czas w trzeźwości- Jak sprawić, by substancja/zachowanie nie było nam już dalej potrzebne. Krzysztof Jędrusiak: Autor książki “Możesz: Praktyczna wiedza i narzędzia dla motywacji, efektywnej nauki, pracy i osiągania celów”.",
    id: "1f4e3b4f-1178-487e-a6b5-0451d4124871",
    instances: [
      {
        dateStart: "2024-08-02T13:00:00.000+02:00",
        dateEnd: "2024-08-02T14:00:00.000+02:00",
        id: "eace2bd9-fc72-4c34-8e61-2067ed27e0da",
      },
    ],
  },
  {
    event:
      "Wszystko na temat środków antykoncepcyjnych -wkładka, implant\nOgólnopolski Strajk Kobiet",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Przedstawienie gwarantowanych możliwości świadczeń, które wielokrotnie są nieprzestrzegane a gwarantowane dla pacjentki założenia i wyjęcia wkładki na NFZ. Wyjaśnienie co należy zrobić i jakie mamy prawa  w przypadku odmowy świadczenia:\nDzięki warsztatom uczestnicy będą mieli lepsze zrozumienie praw pacjenta, procedur i możliwości  skorzystania z dostępnych świadczeń medycznych na NFZ dotyczących wkładek.",
    id: "470a83d1-b681-4e42-bb7d-4f1fdbc08898",
    instances: [
      {
        dateStart: "2024-08-02T13:00:00.000+02:00",
        dateEnd: "2024-08-02T14:00:00.000+02:00",
        id: "def3861f-f9ea-4f61-995f-a6bc96e79e0d",
      },
    ],
  },
  {
    event: "TYLKO TAK OZNACZA ZGODĘ\nStowarzyszenie Kongres Kobiet",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "TYLKO TAK OZNACZA ZGODĘ, bo nadal w Polsce „ciche gwałty” to nie gwałty. Do\nKodeksu Karnego wchodzi zasadnicza zmiana - nowa definicja zgwałcenia. Bo: „Tylko TAK oznacza\nzgodę”. Jak definiować zgodę, jej świadomy i dobrowolny aspekt, jak rozpoznawać brak zgody?\nSpotkanie poprowadzą autorki zmian legislacyjnych; posłanka Anita Kucharska-Dziedzic i mec.\nDanuta Wawrowska. Metodologia warsztatów: praca nad casusami.",
    id: "7b438271-a6ba-4a5d-b072-e0642a3c4751",
    instances: [
      {
        dateStart: "2024-08-02T13:00:00.000+02:00",
        dateEnd: "2024-08-02T14:00:00.000+02:00",
        id: "876f7897-efc3-4d5a-a80e-2541f4f19330",
      },
    ],
  },
  {
    event: "TĘCZOWY QUIZ PRAW CZŁOWIEKA\nStowarzyszenie Amnesty International",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy do namiotu Amnesty na quiz z nagrodami - z wiedzy o osobach LGBTI i prawach człowieka.",
    id: "c0f8b9c6-4ced-4c76-82e5-771f2784f593",
    instances: [
      {
        dateStart: "2024-08-02T13:00:00.000+02:00",
        dateEnd: "2024-08-02T14:00:00.000+02:00",
        id: "0d966f04-58f8-4588-b282-c558e0fcb057",
      },
    ],
  },
  {
    event: "Realia polskiej gospodarki odpadami\nFundacja RECAL",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Warsztaty dotyczące gospodarowania odpadami. Jak jest? Jak powinno być? Gdzie jest przestrzeń do poprawy  lub zmian? Nie wiesz co zrobić z niektórymi odpadami? Przyjdź i porozmawiaj z nami.",
    id: "00a420b5-f2dd-4b45-bf6c-9e2e4c3d79e7",
    instances: [
      {
        dateStart: "2024-08-02T13:00:00.000+02:00",
        dateEnd: "2024-08-02T15:00:00.000+02:00",
        id: "36a24e20-2aad-430b-92f4-54b7d9f6574e",
      },
    ],
  },
  {
    event: "Porady prawne\nStowarzyszenie Kongres Kobiet",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description: "1 godzina po zajęciach Danuty Wawrowskiej",
    id: "447596e3-f2e8-408e-920e-635151a1952f",
    instances: [
      {
        dateStart: "2024-08-02T13:00:00.000+02:00",
        dateEnd: "2024-08-02T14:00:00.000+02:00",
        id: "3bd25599-709d-42f3-ae48-75432f3d8e44",
      },
    ],
  },
  {
    event:
      'quiz z praw ucznia z nagrodami\nStowarzyszenie Sędziów Polskich  "Iustitia"',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "czy uczniowie mają tylko prawa, czy też obowiązki, przyjdź wylosuj pytanie, zastanów się nad prawidłową odpowiedzią , wylosuj atrakcyjną nagrodę ukryta w naszej loterii ;)",
    id: "ff8f1188-03b5-4343-b7f5-ae2fc42df167",
    instances: [
      {
        dateStart: "2024-08-02T13:00:00.000+02:00",
        dateEnd: "2024-08-02T14:00:00.000+02:00",
        id: "db2aeacd-822f-4604-933a-dff4eadcf5f1",
      },
    ],
  },
  {
    event:
      "STREFA PLANETA WIEDZY - Witamina N - o tym jak natura wspomaga zdrowie psychiczne\nSPSZOP Zdroje",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "4f85db7f-398f-46fd-b7c7-00339c749f5e",
    instances: [
      {
        dateStart: "2024-08-02T13:00:00.000+02:00",
        dateEnd: "2024-08-02T14:00:00.000+02:00",
        id: "ae330129-844f-4275-bb2b-4f8953287425",
      },
    ],
  },
  {
    event:
      "Podróże bez barier – warsztat na temat podróży osób z niepełnosprawnościami\nFundacja Avalon Bezpośrednia Pomoc Niepełnosprawnym",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Osoby z niepełnosprawnością i podróże? Jak najbardziej! Jeśli chcesz spełnić swoje marzenie o zwiedzaniu świata przyjdź na warsztat Fundacji Avalon i dowiedz się, jak przygotować się do wyjazdu marzeń! Transport, hotele, atrakcje, u nas dowiesz się wszystkiego czego potrzebujesz! Przygotowaliśmy również quiz, który pomoże Ci przygotować się na podróż życia! Warsztaty te mają na celu udzielenie praktycznych wskazówek osobom z niepełnosprawnościami oraz ich towarzyszom podróży, a także zwiększenie świadomości i edukację społeczeństwa na temat potrzeb i wyzwań związanych z dostępnością.",
    id: "afe69404-d3ca-4cde-97cc-d1ac16393d4a",
    instances: [
      {
        dateStart: "2024-08-02T13:30:00.000+02:00",
        dateEnd: "2024-08-02T15:00:00.000+02:00",
        id: "4cd1952a-c152-4e26-a787-fdd3dda48707",
      },
    ],
  },
  {
    event:
      "Otwarta sesja rysunkowa\nUniwersyetet Artystyczny im. Magdaleny Abakanowicz w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Warsztaty z rysowania są otwartą sesją rysunkową podczas, której każda z osób może dołączyć w dowolnym momencie jej trwania. Można rysować samodzielnie, grupowo, dorysowywać części do już powstałych rysunków.\nW zaproponowanym działaniu osoby uczestniczące będą skupiać się przede wszystkim na procesie, prostocie i czerpaniu radości z rysowania.",
    id: "08b69b8c-6b14-4710-be75-9f3ccada8929",
    instances: [
      {
        dateStart: "2024-08-02T13:30:00.000+02:00",
        dateEnd: "2024-08-02T15:30:00.000+02:00",
        id: "405e1fd0-98cd-4be9-b968-cc51b6ef392d",
      },
      {
        dateStart: "2024-08-03T13:30:00.000+02:00",
        dateEnd: "2024-08-03T15:30:00.000+02:00",
        id: "e2f24d9c-6505-4332-b59b-4a7ba76071c2",
      },
    ],
  },
  {
    event:
      "STREFA OBSERWATORIUM - Energetyka wiatrowa - fakty i mity. Kobiety w sektorze energetycznym\nPSEW",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "cdf35cbd-8848-4024-b9c1-3ef0e4ef3c32",
    instances: [
      {
        dateStart: "2024-08-02T13:30:00.000+02:00",
        dateEnd: "2024-08-02T14:30:00.000+02:00",
        id: "9364e7b0-834b-4066-b2dd-7e360fe7d241",
      },
    ],
  },
  {
    event: "Zygmunt Miłoszewski",
    place: "Duży Namiot ASP",
    kind: "Spotkanie",
    description:
      'Zygmunt Miłoszewski, jeden z najpopularniejszych polskich pisarzy w kraju i za granicą. To powieściopisarz, scenarzysta i działacz społeczny, znany m.in. z trylogii kryminalnej o prokuratorze Teodorze Szackim. Autor wielokrotnie nagradzany, m.in. Paszportem "Polityki" w 2015 roku oraz Nagrodą Wielkiego Kalibru za całokształt twórczości w 2020 roku, i tłumaczony na kilkanaście języków. Jest także współautorem scenariusza do serialu "Prokurator", który w 2016 roku zdobył nagrodę Orła w kategorii Najlepszy Filmowy Serial Fabularny.  \n \n  #ASP',
    id: "8871147d-667a-44a1-afe3-8f251796e573",
    instances: [
      {
        dateStart: "2024-08-02T13:30:00.000+02:00",
        dateEnd: "2024-08-02T14:50:00.000+02:00",
        id: "21e52952-351b-4005-a407-29fedcc255ad",
      },
    ],
  },
  {
    event:
      "Czy można wydłużyć Pol’and’Rock? - czyli o dylatacji czasu, paradoksie bliźniąt i skąd to się wszystko wzięło\nPolitechnika Gdańska",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Wykład przeprowadzony przez dwie absolwentki Politechniki Gdańskiej - fizyczkę oraz nanotechnolożkę, które postarają się Wam przybliżyć wiedzę fizyczną w prosty, obrazowy sposób z elementami performance’u i żartu. Tematyką wykładu będą podstawy teorii względności, czasoprzestrzeń, dylatacja czasu, paradoks bliźniąt. Jeśli oglądałeś film Interstellar - ten wykład jest dla Ciebie. Jeśli nie - pewnie obejrzysz go jak tylko wrócisz z festiwalu.",
    id: "1881d333-2907-4ccc-b763-2d1e7054bbc4",
    instances: [
      {
        dateStart: "2024-08-02T14:00:00.000+02:00",
        dateEnd: "2024-08-02T15:00:00.000+02:00",
        id: "0e9f2937-e27f-4ad3-a69a-2fa63385f03d",
      },
    ],
  },
  {
    event:
      "Pokazy technik interwencyjnych Grupy Interwencyjnej Służby Więziennej\nOkręgowa Izba Radców Prawnych w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Pokaz obezwładniania osób niebezpiecznych, konwojowania osadzonego niebezpiecznego, praktycznego używania środków przymusu bezpośredniego .",
    id: "3ee511e8-f9cf-4d55-8aad-6103faf701bf",
    instances: [
      {
        dateStart: "2024-08-02T14:00:00.000+02:00",
        dateEnd: "2024-08-02T14:30:00.000+02:00",
        id: "311a3be0-c1c0-4286-a36c-87c614bffb1b",
      },
    ],
  },
  {
    event: "Warsztaty origami\nFUNDACJA HACKERSPACE KRAKÓW",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      '"Podczas warsztatów będzie można nauczyć się jak ze zwykłych kartek papieru zrobić proste ruchome zabawki, które pod zręcznymi palcami ożywają. Pod czujnym okiem instruktora własnoręcznie złożycie modele, które wywołają uśmiech na twarzy. Zapewniamy papier i świetną zabawę!\nZapraszamy zarówno dzieci jak i dorosłych."',
    id: "cfb02269-98d7-44d9-85da-4e7539e6f159",
    instances: [
      {
        dateStart: "2024-08-02T14:00:00.000+02:00",
        dateEnd: "2024-08-02T15:30:00.000+02:00",
        id: "8194998f-c701-4971-8bca-8f2e96fdd014",
      },
    ],
  },
  {
    event: "Oskarżam, bronie, kryminalny Netflix\nIzba Adwokacka w Warszawie",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Warsztat poświęcony roli prokuratora i obrońcy w sprawnym, uczciwym przebiegu procesu karnego, pokazany na przykładach z seriali dokumentalnych. Jak nie postępować, co robić by zachować uczciwość, jakich narzędzi w procesie możemy użyć a jakie są niedozwolone, czy cel uświęca środki, czy zwycięstwa w procesach karnych w ogóle są możliwe i co właściwie oznacza „zwycięstwo”? Wreszcie, porozmawiamy o tym czy prawda jest zawsze łatwa do przyjęcia i co decyduje o tym, że czasem prawda sądowa może stać się wielką nieprawdą. Na te i podobne pytania będziemy chcieli porozmawiać z uczestnikami Festiwalu, wykorzystując udokumentowane serialowo przypadki.",
    id: "be7f8092-6fc9-4f93-8fc0-94a0719e9154",
    instances: [
      {
        dateStart: "2024-08-02T14:00:00.000+02:00",
        dateEnd: "2024-08-02T15:30:00.000+02:00",
        id: "999cb8f7-5609-45f2-9031-ee5323f25041",
      },
    ],
  },
  {
    event:
      "OTOZ Animals w służbie zwierzętom, czyli jak wyglądają interwencje\nOTOZ Animals",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Podczas warsztatów przedstawimy najczęściej spotykane sytuacje oraz przypadki zastane podczas podejmowanych działań interwencyjnych. Omówimy poszczególne interwencje i sprawdzimy, czy sam/sama będziesz w stanie wskazać zaistniałe zaniedbania. Przedstawimy ci narzędzia pomocne w skutecznym reagowaniu w sytuacjach, gdy jesteś świadkiem niehumanitarnego traktowania zwierzęcia. Na warsztatach zostaną zaprezentowane przepisy Ustawy o Ochronie Zwierząt. Przedstawimy też przypadki znęcania się lub zaniedbania zwierząt, które możesz znać z mediów.",
    id: "c0f5d77c-943c-44b1-bb1e-245dac8fb4b8",
    instances: [
      {
        dateStart: "2024-08-02T14:00:00.000+02:00",
        dateEnd: "2024-08-02T15:00:00.000+02:00",
        id: "c3758c4e-b499-44f6-b08b-d29866d58647",
      },
      {
        dateStart: "2024-08-03T14:00:00.000+02:00",
        dateEnd: "2024-08-03T15:00:00.000+02:00",
        id: "81dcb50a-68dc-416d-8370-969885ebfd33",
      },
    ],
  },
  {
    event:
      "Oskarżam, bronie, kryminalny Netflix\nStowarzyszenie Prokuratorów Lex Super Omnia",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Warsztat poświęcony roli prokuratora i obrońcy w sprawnym, uczciwym przebiegu procesu karnego, pokazany na przykładach z seriali dokumentalnych. Jak nie postępować, co robić by zachować uczciwość, jakich narzędzi w procesie możemy użyć a jakie są niedozwolone, czy cel uświęca środki, czy zwycięstwa w procesach karnych w ogóle są możliwe i co właściwie oznacza „zwycięstwo”? Wreszcie, porozmawiamy o tym czy prawda jest zawsze łatwa do przyjęcia i co decyduje o tym, że czasem prawda sądowa może stać się wielką nieprawdą. Na te i podobne pytania będziemy chcieli porozmawiać z uczestnikami Festiwalu, wykorzystując udokumentowane serialowo przypadki.",
    id: "8bd370de-e20f-4a87-aff3-6cf4510493e5",
    instances: [
      {
        dateStart: "2024-08-02T14:00:00.000+02:00",
        dateEnd: "2024-08-02T15:30:00.000+02:00",
        id: "8b20384e-b729-44c6-9772-b8678f768ae3",
      },
    ],
  },
  {
    event: "Skuteczne rozwiązywanie problemów\nToastmasters",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Każdy ma swoje problemy, ale jak je rozwiązać? Branże specjalistyczne opracowały „skuteczne rozwiązywanie problemów” do perfekcji – poznałam to i mogę się tym z Wami podzielić.\nSkąd wiemy, że mamy problem? Czy to dobrze czy źle, że wiemy?\nCzy zagrożenie i ryzyko to to samo? Jak oszacować ryzyko? Jak je minimalizować? \nLepiej, szybciej, taniej… ale jak to zrobić? \n\nKatarzyna Kabat Absolwentka Politechniki Poznańskiej w zakresie technologii chemicznej oraz zarządzania jakością i WSB w zakresie zarządzania operacyjnego.\nOd 2 lat rozwija rodzinną firmę, skupiając się na wsparciu liderów. Wcześniej przed kilka lat inzynierka jakości i audytorka w branżach automotive, medycznych i przemysłowych. Ambasadorka Debat Oksforskich i członek fundacji Lean Education. W Toastmasters od 2017 roku.",
    id: "2a4c921f-8fe4-4cac-b35b-136d1e476f2a",
    instances: [
      {
        dateStart: "2024-08-02T14:00:00.000+02:00",
        dateEnd: "2024-08-02T15:00:00.000+02:00",
        id: "dbfd3a05-f25e-4faa-a48a-2993aad34a96",
      },
    ],
  },
  {
    event: "SAMOBÓJSTWA DZIECI\nStowarzyszenie Kongres Kobiet",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "SAMOBÓJSTWA DZIECI problem przemocy rówieśniczej, depresji, dyskryminacji i wzrost\nsamobójstw wśród dzieci i młodzieży. Jak temu zapobiec? Prewencja suicydalna to temat spotkania z\nDanutą Sowińską i Anetą Kowalewską, z autorkami książki’ “O przemocy. Rozmowy ze wstydem”.",
    id: "bc177aa6-22aa-4507-823d-f6548504f546",
    instances: [
      {
        dateStart: "2024-08-02T14:00:00.000+02:00",
        dateEnd: "2024-08-02T15:00:00.000+02:00",
        id: "991b3896-47ee-4023-9f49-2bba45214bf3",
      },
    ],
  },
  {
    event:
      'Debata "Jajka od szczęśliwych kur - prawda czy fikcja?"\nAnonymous for the Voiceless',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy na debatę na temat popularnego mitu - możliwe jest pozyskiwanie jajek bez krzywdzenia kur.",
    id: "d527e4e9-d05d-43e4-b4de-031fd77c7ee1",
    instances: [
      {
        dateStart: "2024-08-02T14:00:00.000+02:00",
        dateEnd: "2024-08-02T15:00:00.000+02:00",
        id: "01bc6e66-aafc-4f4e-9671-a4ded223de0f",
      },
    ],
  },
  {
    event:
      '"Uśmiech się!" czyli podstawowe warsztaty improwizacji teatralnej dla każdego!\nStowarzyszenie Twórców Sztuki "Współ.gra"',
    place: "Strefa Działań Twórczych ASP",
    kind: "Warsztat",
    description:
      'Tak jak w poprzednich latach, mamy przyjemność zaprosić uczestników festiwalu na godzinne warsztaty improwizacji "Uśmiech się!". Podczas spotkania skupimy się na odczuwaniu teraźniejszości i bezpośrednim reagowaniu na otaczającą rzeczywistość poprzez aktywne słuchanie, spontaniczne reakcje, a także szerokie uśmiechy i czystą frajdę. Wspólnie stworzymy bezpieczną przestrzeń do teatralnych zabaw.\n\nNasze warsztaty opierają się na grach teatralnych Violi Spolin, ćwiczeniach Keitha Johnstone\'a i krótkich grach improwizowanych, które znacie z telewizyjnego show "Whose Line Is It Anyway?". Warsztaty poprowadzą doświadczeni improwizatorzy znani z bydgoskiej grupy teatralnej Blender oraz Stowarzyszenia Twórców Sztuki Współ.gra. \n\nImprowizacja to wyjątkowa forma teatralna, w której wszystkie sceniczne działania powstają bez wcześniej przygotowanego scenariusza, czy dialogów. Kreowane na oczach widzów historie powstają w oparciu o ich sugestie. Improwizacja teatralna to radość tworzenia w najczystszej postaci!',
    id: "e265938f-426b-4ac5-86a5-5f4009eabd79",
    instances: [
      {
        dateStart: "2024-08-02T14:00:00.000+02:00",
        dateEnd: "2024-08-02T15:00:00.000+02:00",
        id: "9ccaf6f1-6dab-4c5c-b9c1-3b72154ef0ef",
      },
      {
        dateStart: "2024-08-03T14:00:00.000+02:00",
        dateEnd: "2024-08-03T15:00:00.000+02:00",
        id: "ebb9b622-90b7-4911-8ff7-690ef9f11a22",
      },
    ],
  },
  {
    event: "Chąśnicy - słowiańscy piraci Bałtyku\nWioska Słowiańska",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Przeniesiemy uczestników w czasy wczesnego średniowiecza. Opowiemy o kontaktach między Słowianami a Wikingami w rejonie Pomorza, przedstawiając ważne porty handlowe, takie jak Arkona, Jomsborg i Wineta. Na mapie zaprezentujemy miejsca osiedlania się Wikingów i ich najazdów, a także omówimy ekwipunek, łodzie i styl walki chąśników. Poznamy wyprawy słowiańskich piratów na tereny niemieckie, duńskie i szwedzkie. Wykład zakończymy opisem wielkiego najazdu na Konungahelle, zniszczeniem słowiańskiej świątyni w Arkonie oraz krótką uwagą o chrystianizacji Pomorza i końcu ery słowiańskich piratów.",
    id: "d192f05f-88bc-48dd-9650-af10d5bbe135",
    instances: [
      {
        dateStart: "2024-08-02T14:00:00.000+02:00",
        dateEnd: "2024-08-02T15:00:00.000+02:00",
        id: "93aca685-4988-4528-be10-f656e078fe3a",
      },
    ],
  },
  {
    event:
      "STREFA DZIECIĘCA GWIAZDA -  Kosmiczna odyseja - sensoplastyczna podróż po Planetach\nPolitechnika Koszalińska",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "46cebeb0-776b-499a-9cbb-cf20398dff71",
    instances: [
      {
        dateStart: "2024-08-02T14:30:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "2e05be5a-7931-421a-b6cb-e9d6d2c895e5",
      },
    ],
  },
  {
    event:
      "Prezentacja sprzętu i wyposażenia Służby Więziennej\nOkręgowa Izba Radców Prawnych w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Możliwość wypróbowania sprzętu, w tym: kajdanki, gejsza oraz możliwość założenia wyposażenia ochronnego Służby Więziennej",
    id: "db773616-bcf0-4de7-b9ed-1ee7630757b1",
    instances: [
      {
        dateStart: "2024-08-02T14:30:00.000+02:00",
        dateEnd: "2024-08-02T15:00:00.000+02:00",
        id: "8b601770-e3db-4575-91c9-bb24cd7ebbab",
      },
    ],
  },
  {
    event:
      "STREFA KOSMICZNA PRACOWNIA - Warsztaty tworzenia toreb z t-shirtów\nReMakeIt",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "8093dd0a-4710-4ed0-9ef5-f6022dc12807",
    instances: [
      {
        dateStart: "2024-08-02T14:30:00.000+02:00",
        dateEnd: "2024-08-02T16:00:00.000+02:00",
        id: "558a55be-540b-4fad-be37-2b48d92755aa",
      },
    ],
  },
  {
    event:
      "Odczarujmy spadki - czyli jak nie odziedziczyć kłopotów\nIzba Notarialna w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Prowadzący warsztat opowiedzą o zasadach dziedziczenia ustawowego po ostatnich zmianach Kodeksu cywilnego. Poruszone zostaną takie kwestie, jak odrzucenie spadku w imieniu małoletnich, co należy sprawdzić i w jaki sposób to sprawdzić, aby świadomie podjąć decyzję o przyjęciu lub odrzuceniu spadku,  o jakich terminach należy pamiętać gdy dowiemy się, że czeka na nas spadek.",
    id: "04813b86-9afb-41fe-86f5-60007ce96621",
    instances: [
      {
        dateStart: "2024-08-02T15:00:00.000+02:00",
        dateEnd: "2024-08-02T15:55:00.000+02:00",
        id: "17c11cb8-1e96-4687-bb11-7e8264874f16",
      },
    ],
  },
  {
    event:
      "Seksowne nauki przedmałżeńskie\nPikantna Edukacja - Monika Gałuszkiewicz",
    place: "Namiot Warsztatowy ASP",
    kind: "Warsztat",
    description:
      "Słyszeliście o naukach przedmałżeńskich? A o seksownych naukach przedmałżeńskich?\nNajlepiej gdy zaliczycie je przed ślubem, jednak zawsze można nadrobić braki i reanimować seks w małżeństwie.\nCzy wiesz co zrobić by seks nie zniknął po ślubie? Jak cieszyć się dobrą relacją i fajnym seksem przez lata? Czy można nie utracić libido w ciąży i z maleńkim dzieckiem? Czy słyszałeś o wersji DEMO relacji? Zapraszam Cię na spotkanie, na którym zobaczysz, co warto omówić przed ślubem czy wspólnym zamieszkaniem. \nBędziemy rozmawiać o seksie i nie tylko.\nPomogę Ci ustalić momenty krytyczne w relacji, które powodują, że zdycha seks i dam narzędzia jak się do takich momentów przygotować. Seks to relacja. Sekretem relacji jest komunikacja, zaufanie i szacunek.\nPokażę Ci jak nie zawsze oczywiste rzeczy wpływają na odmowę jej lub jego. Wiesz, że dużo łatwiej się rozebrać i wskoczyć na siebie, niż porozmawiać o swoich potrzebach w seksie? Będę mówić o tym, jak ustalić czy mamy podobne potrzeby w sypialni. Co może sygnalizować przyszłe problemy? \nTo jak gotowy na rozmowę o seksie? \nNa koniec będziesz mógł bezpłatnie pobrać sobie listę z podstawowymi pytaniami do ukochanej osoby.\nZapraszam serdecznie Monika Seks Mentorka",
    id: "7a1d41be-f516-46f9-b014-fbbf3dfd740b",
    instances: [
      {
        dateStart: "2024-08-02T15:00:00.000+02:00",
        dateEnd: "2024-08-02T16:00:00.000+02:00",
        id: "20b213bd-d614-4bc5-b4e8-8027d4b02385",
      },
    ],
  },
  {
    event: "Jak się dogadać w relacji.\nStowarzyszenie MONAR",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Test 5 języków miłości i panel dyskusyjny o komunikacji w relacji",
    id: "97081233-e947-414c-ae43-ae616de39c83",
    instances: [
      {
        dateStart: "2024-08-02T15:00:00.000+02:00",
        dateEnd: "2024-08-02T16:30:00.000+02:00",
        id: "147bb05f-c78b-49fd-8038-43272080b8b0",
      },
    ],
  },
  {
    event: "Łapacze Chmur\nFundacja Szkoła w Chmurze",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Warsztat z rękodzieła "Łapacz Chmur" to okazja do stworzenia własnego, unikalnego łapacz snów. Przy pomocy materiałów plastycznych i pod czujnym okiem wolontariuszy, każda osoba uczestnicząca w warsztacie opuści festiwal w własnym łapaczem snów. Warsztat dedykowany jest szczególnie dla starszych dzieci oraz młodzieży, ale osoby dorosłe także są mile widziane!',
    id: "fbda729e-1944-4301-b11b-c8717f658699",
    instances: [
      {
        dateStart: "2024-08-02T15:00:00.000+02:00",
        dateEnd: "2024-08-02T16:30:00.000+02:00",
        id: "807fc374-5070-4577-80ff-5375184b007e",
      },
    ],
  },
  {
    event:
      "Odczarujmy spadki - czyli jak nie odziedziczyć kłopotów\nOkręgowa Izba Radców Prawnych w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Opis: Prowadzący warsztat opowiedzą o zasadach dziedziczenia ustawowego\npo ostatnich zmianach Kodeksu cywilnego. Poruszone zostaną takie\nkwestie, jak odrzucenie spadku w imieniu małoletnich, co należy\nsprawdzić i w jaki sposób to sprawdzić, aby świadomie podjąć decyzję o\nprzyjęciu lub odrzuceniu spadku,   o jakich terminach należy pamiętać\ngdy dowiemy się, że czeka na nas spadek.",
    id: "43bf229e-c57a-4839-b00e-e155aa59878f",
    instances: [
      {
        dateStart: "2024-08-02T15:00:00.000+02:00",
        dateEnd: "2024-08-02T15:55:00.000+02:00",
        id: "41804bca-4bc1-4c8b-865c-77738dd0d387",
      },
    ],
  },
  {
    event: "ENEJ",
    place: "Duża Scena",
    kind: "Koncert",
    description:
      "Enej to polski zespół muzyczny, grający szeroko rozumianą muzykę folkową z dodatkiem wielu innych gatunków. Kapela powstała w 2002 roku w Olsztynie. Ich przygoda nabrała rozpędu w roku 2010, gdy zespół wziął udział w eliminacjach do Przystanku Woodstock i przebojem wdarł się na Dużą Scenę, niemal z marszu zdobywając rzeszę wiernych fanów. Na jubileuszowy, 30. Pol'and'Rock Festival przygotowali projekt, jakiego Najpiękniejszy  Festiwal Świata jeszcze nie widział — przyjdźcie i sprawdźcie sami!  \n \n  #folk",
    id: "4ab07ea3-838d-46ec-8fa1-f384b22edb90",
    instances: [
      {
        dateStart: "2024-08-02T15:00:00.000+02:00",
        dateEnd: "2024-08-02T16:10:00.000+02:00",
        id: "9c512653-3c16-4e66-9ed8-0e5d1c4894fa",
      },
    ],
  },
  {
    event: "Mityczny Milion na Emeryturze i inne bajki finansowe\nToastmasters",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Latami wymyślano wiele mitów i bajek finansowych przez które wiele osób później traci pieniądze lub zarabia mniej niż na lokacie... W trakcie warsztatów: - pokażę jak unikać powszechnych błędów finansowych - zobaczysz jak zbudować półroczną finansową poduszkę bezpieczeństwa w 24 godziny - policzymy czy na pewno warto nadpłacać kredyt hipoteczny - i proste pytanie którym zweryfikujesz wiedzę doradcy finansowego Każdy uczestnik otrzyma zeszyt ćwiczeń do analizy rodzinnych finansów. Obiecuję zero teorii i nudnych wzorów. Będzie humorystycznie, teatralnie i merytorycznie. A po tym warsztacie nic już nie będzie takie jak wcześniej...\nRemigiusz Stanisławek autor portali wiedzowych, pogromca mitów inwestowania, ekspert finansów osobistych, certyfikowany doradca finansowy,",
    id: "a4b86dae-706d-48f8-b846-df186f7be85e",
    instances: [
      {
        dateStart: "2024-08-02T15:00:00.000+02:00",
        dateEnd: "2024-08-02T16:00:00.000+02:00",
        id: "f6c12998-fa0a-4286-81d3-e9ca971d3032",
      },
    ],
  },
  {
    event:
      'Debata "Zoo - ochrona przyrody czy więzienie?"\nAnonymous for the Voiceless',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy na debatę na temat popularnego mitu - ogrody zoologiczne służą przyrodzie i edukują.",
    id: "04cfb913-2b13-4c81-b61a-aa5283b2cdfd",
    instances: [
      {
        dateStart: "2024-08-02T15:00:00.000+02:00",
        dateEnd: "2024-08-02T16:00:00.000+02:00",
        id: "62f32b48-7ff9-48f0-a8e1-71e4bc317861",
      },
    ],
  },
  {
    event:
      "Poznaj Futbol Amerykański z Warsaw Sirens\nStowarzyszenie Kobiecej Drużyny Futbolu Amerykańskiego - Klub Sportowy Warsaw Sirens",
    place: "Strefa Działań Twórczych ASP",
    kind: "Warsztat",
    description:
      "Warsaw Sirens zapraszają na wyjątkowy wykład o futbolu amerykańskim kobiet na scenie ASP podczas Pol'and'Rock Festival. Nasze zawodniczki opowiedzą o swojej pasji do tego dynamicznego sportu. W trakcie wykładu:\n\nPodzielimy się naszą pasją i tym, co nas motywuje do gry.\nZobaczysz profesjonalny sprzęt futbolowy i dowiesz się, jak jest używany.\nWeźmiesz udział w interaktywnych ćwiczeniach, które pozwolą Ci poczuć atmosferę prawdziwego treningu futbolowego.\nNasze zawodniczki zaprezentują na żywo różne elementy gry i zachęcą do aktywnego udziału. To doskonała okazja, aby poczuć adrenalinę futbolu amerykańskiego i zrozumieć, co sprawia, że ten sport jest tak porywający. Dołącz do nas i odkryj fascynujący świat futbolu amerykańskiego z Warsaw Sirens!",
    id: "e3873bb8-97c5-4574-89f2-d5aff4b6aa2e",
    instances: [
      {
        dateStart: "2024-08-02T15:00:00.000+02:00",
        dateEnd: "2024-08-02T16:00:00.000+02:00",
        id: "4b32bd17-cf63-4f1e-bcb8-bb55a01870f7",
      },
      {
        dateStart: "2024-08-03T15:00:00.000+02:00",
        dateEnd: "2024-08-03T16:00:00.000+02:00",
        id: "f5ca86df-f6ec-44a9-94c7-32f8f4cd9267",
      },
    ],
  },
  {
    event: "What does the fox say? Quiz\nStowarzyszenie Otwarte Klatki",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "What does the fox say? Quiz  - drużynowy turniej wiedzy o lisach. Na zwycięzców czekają nagrody!",
    id: "b4225246-7e44-4c29-8870-d457872ad9fc",
    instances: [
      {
        dateStart: "2024-08-02T15:30:00.000+02:00",
        dateEnd: "2024-08-02T16:30:00.000+02:00",
        id: "aeae61d0-b047-40bf-a50b-815c046b42a4",
      },
    ],
  },
  {
    event:
      "Debata „Dzieci z doświadczeniem uchodźctwa”\nBiuro Rzecznika Praw Obywatelskich",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Debata „Dzieci z doświadczeniem uchodźctwa” – Traktowanie uchodźców oraz osób poszukujących ochrony międzynarodowej przez Polskę w wielu obszarach wciąż odbiega od międzynarodowych standardów. Sytuacja tych osób może zależeć od ich narodowości oraz tego, którą granicę przekraczają. W debacie zastanowimy się, w jakim stopniu oraz w których obszarach problemy te dotykają także dzieci z doświadczeniem uchodźstwa oraz co należałoby zrobić, żeby dostosować polskie prawo i praktykę do wiążących Polskę standardów praw człowieka.\nModeracja: Maciej Grześkowiak",
    id: "077f7405-d7cd-490b-a603-6eec72ff7b5d",
    instances: [
      {
        dateStart: "2024-08-02T15:30:00.000+02:00",
        dateEnd: "2024-08-02T17:00:00.000+02:00",
        id: "34e0625d-6ee9-4caa-b627-d3d5b21edd7d",
      },
    ],
  },
  {
    event:
      'Rozmowy o zachodzie słońca: cyberprzemoc na co to komu?!\nStowarzyszenie Sędziów Polskich  "Iustitia"',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "spotkanie o zachodzie słońca w trakcie którego sprobujemy w gronie fachowców porozmawiać o tym :  kto, dlaczego i jak krzywdzi w Internecie , jak sobie radzić z tą formą przemocy, co zrobić , żeby nie być ofiarą? ale jak się zachowywać w siedzi , żeby nie być sprawcą?",
    id: "7c5eaf55-5ffc-4d68-85b5-4ee81905c0dd",
    instances: [
      {
        dateStart: "2024-08-02T16:00:00.000+02:00",
        dateEnd: "2024-08-02T17:00:00.000+02:00",
        id: "50b4c8ce-283f-4152-8059-a0c08fe197b6",
      },
    ],
  },
  {
    event:
      "Kolaż\nUniwersyetet Artystyczny im. Magdaleny Abakanowicz w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Możliwość pracy indywidualnej, w parach lub w grupach. Przedstawienie różnorodnych technik w celu pobudzenia zmysłów; np. frotaż czy exquisite corpse, które będzie można uprzednio wykonać w celu uwzględnienia powstałych elementów w kolażach. Do dyspozycji osób uczestniczących będą czasopisma, gazety, najróżniejsze skrawki, fragmenty tkanin i tworzyw, farby, węgiel rysunkowy, atrament i fragmenty wcześniej wykonanych dzieł malarskich/rysunkowych. Zachęcenie do osobistego eksperymentowania z technikami i tym czym może być kolaż.",
    id: "1cd19bec-2857-4882-ac86-6151fa73284f",
    instances: [
      {
        dateStart: "2024-08-02T16:00:00.000+02:00",
        dateEnd: "2024-08-02T18:30:00.000+02:00",
        id: "d39f915b-e935-4d40-81d2-446733ac9b6c",
      },
    ],
  },
  {
    event:
      "Warsztaty uwalniające głos\nFundacja Avalon Bezpośrednia Pomoc Niepełnosprawnym",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Głos jest naszym fonicznym przedłużeniem. Głos wyraża naszą osobowość i nasze emocje.  Głos, który sprawia nam przyjemność to głos otwarty, głęboki i oswojony – w zgodzie z nami. Warsztaty uwalniające głos otworzą przed Tobą drogę do autentyczności, uznania swojego prawa do mówienia, docenienie swojego głosu. Podczas warsztatów, pod okiem neurologopedki z Fundacji Avalon, dowiesz się w jaki sposób zadbać o swój głos, poszukamy nowych brzmień, poeksperymentujemy z głosem, będziemy śpiewać, krzyczeć, mruczeć i wydobywać z siebie różne dźwięki.",
    id: "545445ab-5d10-4ee1-ae3d-62b39a80d807",
    instances: [
      {
        dateStart: "2024-08-02T16:00:00.000+02:00",
        dateEnd: "2024-08-02T17:30:00.000+02:00",
        id: "47b916d0-ee40-4b73-a4f7-57528b204df0",
      },
    ],
  },
  {
    event:
      "Jak rozpoznać czy to już dyskryminacja, czy to już mobbing?\nOkręgowa Izba Radców Prawnych w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Case study. Radcowie na przykładach wytłumaczą jak rozpoznać, czy dana sytuacja służbowa nosi cechy dyskryminacji lub mobbingu.",
    id: "6cd02ff1-4eef-4aa5-adea-1eb1e9e1d1a3",
    instances: [
      {
        dateStart: "2024-08-02T16:00:00.000+02:00",
        dateEnd: "2024-08-02T16:55:00.000+02:00",
        id: "42531eaf-3c67-48d4-9615-00d4e7bdb5be",
      },
    ],
  },
  {
    event: "Zawody wspinaczkowe\nPolish Outdoor Group",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "3,2,1 Start! To będą prawdziwe, sportowe emocje i widowiskowa rywalizacja! Zapraszamy na kolejną edycję naszych zawodów wspinaczkowych, które jak zawsze otwarte są dla wszystkich chętnych. Rywalizacja zostanie poprzedzona wstępną selekcją. Przybywajcie wcześniej, aby potrenować na naszej ściance. Zachęcamy do udziału nie tylko zawodników, ale także kibiców. Czekają na Was wspinaczkowe nagrody i upominki od firmy CAMP.",
    id: "88165599-9736-4cad-a4a7-93f069db7593",
    instances: [
      {
        dateStart: "2024-08-02T16:00:00.000+02:00",
        dateEnd: "2024-08-02T19:00:00.000+02:00",
        id: "c22050b5-0ad4-44f5-9f6c-04c73707d2a7",
      },
    ],
  },
  {
    event: "Droga do prawdziwej wolności\nToastmasters",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Wykład dotyczyć będzie kwestii przebaczenia oraz odpowie na pytanie dlaczego jest ono kluczem do prawdziwej wolności oraz szczęśliwszego i bardziej spełnionego życia. W jego trakcie zostaną przedstawione skuteczne techniki i narzędzia wspomagające proces przebaczenia sobie i innym. Gorąco zachęcam do udziału!\nJarosław Jarosz - zawodowy mówca, life coach, trener, terapeuta. Członek Polskiego Stowarzyszenia Terapeutów Terapii Skoncentrowanej na Rozwiązaniach. Doktorant Uniwersytetu Gdańskiego, aktywnie uczestniczący w konferencjach naukowych i panelach dyskusyjnych. Autor artykułów oraz współauto książki "Sztuka inspirowania".',
    id: "bfdfbaea-154b-4d2a-9221-f5ce68e625e3",
    instances: [
      {
        dateStart: "2024-08-02T16:00:00.000+02:00",
        dateEnd: "2024-08-02T17:00:00.000+02:00",
        id: "e3ca37e8-5c8b-44ab-8beb-166fe3a8fe52",
      },
    ],
  },
  {
    event: "Autoprezentacja\nFundacja Feminoteka",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Warsztat poświęcony zwiększaniu świadomości, jaką rolę odgrywa mowa ciała i inne komunikaty niewerbalne, jaki mają wpływ na innych i na nas samych/same w życiu osobistym czy zawodowym. W trakcie spotkania ćwiczymy nie tylko pracę z ciałem, ale i uważność oraz szacunek wobec różnic indywidualnych, stawianie granic i ich poszanowanie, co pomoże zadbać o zdrowe, wyważone relacje, a także rozpoznawać zachowania przemocowe w sytuacjach prywatnych i w środowisku pracy oraz im przeciwdziałać.",
    id: "a139b1bd-d46b-40bb-9717-ec5df9629466",
    instances: [
      {
        dateStart: "2024-08-02T16:30:00.000+02:00",
        dateEnd: "2024-08-02T18:30:00.000+02:00",
        id: "8faa16b9-3177-4d2e-b252-ca438aad7675",
      },
    ],
  },
  {
    event: "Flapjack",
    place: "Duża Scena",
    kind: "Koncert",
    description:
      'Flapjack to nie tylko zespół! To legenda, która zrodziła się w 1993 roku. Założycielami grupy byli wokalista Grzegorz "Guzik" Guziński, gitarzysta Jahnz oraz część składu Acid Drinkers. Ich debiutancki album "Ruthless Kick" w 1994 roku przyniósł im nominację do nagrody Fryderyk w kategorii "Fonograficzny Debiut Roku”. Ich koncert to niezwykła okazja dla fanów prawdziwego brzmienia buntu, którzy chcą doświadczyć energii i mocy! \n  \n \n  #hard rock',
    id: "5ef53974-5bba-4b74-b04b-3e4d9db31412",
    instances: [
      {
        dateStart: "2024-08-02T16:30:00.000+02:00",
        dateEnd: "2024-08-02T17:40:00.000+02:00",
        id: "e76f0f7c-c2d6-4e48-8d9e-1bb7b3ff2bec",
      },
    ],
  },
  {
    event: "Jak złączyć naród\nToastmasters",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Warsztat o podstawowych technikach zwiększenia rozumienia drugiej osoby co jest fundamentem stworzenia zdrowego, zjednoczonego społeczeństwa poprowadzi Paweł Żurek",
    id: "b321e03c-27b8-439b-8265-13576a62a488",
    instances: [
      {
        dateStart: "2024-08-02T17:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "a6d7dbe0-d391-4e16-8246-60c5bb0aa508",
      },
    ],
  },
  {
    event:
      "Prawo sportowe: kontrakt, menadżer, finansowanie, spory\nOkręgowa Izba Radców Prawnych w Poznaniu",
    place: "Namiot Warsztatowy ASP",
    kind: "Warsztat",
    description:
      "Gośćmi specjalnymi będą: piłkarka Jolanta Ożga, oraz piłkarz Błażej Telichowski. \nW programie dyskusja na tematy: \n* Na jakiej zasadzie zawodnik staje się uczestnikiem klubu sportowego?\n* Dlaczego uprawiać dyscyplinę w klubie?\n* Czy sport kobiecy jest dyskryminowany (sponsoring i zarobki)?\n* Czy młodemu zawodnikowi potrzebny jest menadżer?\n* Co to jest kontrakt sportowy?\n* Na czym polegają transfery zawodników (prawo Bosmana) ?\n* Zawodnik = niewolnik (?), czy młody sportowiec może stać się zakładnikiem klubu/menadżera?\n* Czy prawnik - specjalista nie tylko od prawa sportowego - może uchronić młodego sportowca przed uzależnieniem się od menadżera lub klubu? \n* Jakiego wsparcia od działaczy oczekują młodzi sportowcy?\n* Najważniejsze problemy sportu osób niepełnosprawnych.\n* Kontuzje i ubezpieczenie.\n* Kontuzje z winy złego planu treningowego.\n* Doping.\n* Sport jako źródło utrzymania / zabezpieczenie społeczne ZUS.\n* Kontuzja sportowa jako przyczyna niezdolności do pracy.\n* Ryzyka związane z indywidualnym uprawianiem sportu  bez menadżera i zaplecza organizacyjnego na przykładzie sportów walki.\n* Rady doświadczonych sportowców dla młodzieży.\n* Prawne zabezpieczenie sportowca jako szansa.",
    id: "8977b07f-bd27-4f0e-bf0c-ab0e44a86425",
    instances: [
      {
        dateStart: "2024-08-02T17:00:00.000+02:00",
        dateEnd: "2024-08-02T18:00:00.000+02:00",
        id: "25de8417-7cb7-43aa-b133-53f17cbffc96",
      },
    ],
  },
  {
    event: "Insekt Orkiestra",
    place: "Mała Scena",
    kind: "Koncert",
    description:
      "INSEKT to trio, które w swoich kompozycjach lawiruje między rockiem lat 90., bujającym grungem i brudnym garażowym punkiem. Na przestrzeni lat wypracowali własne, charakterystyczne brzmienie, które przyciąga dziś uwagę fanów zarówno rocka alternatywnego, jak i szeroko pojętego metalu. Od wielu lat marzyli o stworzeniu aranżacji z orkiestrą i tak powstał INSEKT ORKIESTRA. Zebrali ekipę profesjonalnych muzyków: sekcję dętą oraz smyczkową, z którymi ich utwory nabierają zupełnie innego brzmienia. Jesteśmy pewni, że tak jak podbili serca słuchaczy Eliminacji, tak zdobędą serca Najpiękniejszej Publiczności Świata!  \n \n  #rock  \n  \n  #punk",
    id: "17a2ce4f-ad01-4f23-a028-53f65a5df814",
    instances: [
      {
        dateStart: "2024-08-02T17:45:00.000+02:00",
        dateEnd: "2024-08-02T18:25:00.000+02:00",
        id: "c47ec146-3de4-4299-96fe-c5413217aa08",
      },
    ],
  },
  {
    event: "Co słychać w świecie migracji?\nIzba Notarialna w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Kolejna odsłona tematu poruszanego w Namiocie Radców Prawnych w 2022 r. oraz 2023 r. Radcowie odpowiedzą na pytania: - co w praktyce oznacza pakt migracyjny? - polska polityka migracyjna - w jakim kierunku idziemy? - nowe rozwiązania dla obywateli Ukrainy? - czy polskie prawo migracyjne podąża za zmieniającą się rzeczywistością? Notariusze przedstawią praktyczny aspekt kontaktu imigrantów z notariuszami.",
    id: "cfd6613f-7b6f-4698-aecf-ca02b11a9576",
    instances: [
      {
        dateStart: "2024-08-02T18:00:00.000+02:00",
        dateEnd: "2024-08-02T18:33:00.000+02:00",
        id: "bb284f77-5492-4d7c-a16a-1075a812c86f",
      },
    ],
  },
  {
    event:
      "Tylko Dwa Słowa – panel dyskusyjny\nCompass Public Relations s. c. K.Waligóra, A.Pawlikowska",
    place: "Namiot Warsztatowy ASP",
    kind: "Warsztat",
    description:
      "Co powiedzieć osobie chorej na nowotwór? Z takim pytaniem musiała zmierzyć się ponad połowa z nas, gdy bliska osoba usłyszała diagnozę: rak. W tej trudnej sytuacji zazwyczaj towarzyszy nam bezradność, a jednocześnie czujemy odpowiedzialność za losy chorego. Pragniemy wyrazić słowa wsparcia, ale też staramy się znaleźć rozwiązanie dotykającej naszego znajomego lub członka rodziny tragedii. Zastanawiamy się, jak dobrać właściwe słowa oraz co zrobić, aby realnie pomóc. \n\nDiagnoza onkologiczna to moment kryzysu. Wprowadza do naszego życia poczucie zagrożenia i niepewność dalszego losu. Odczuwamy wtedy lęk, strach, przygnębienie oraz smutek. Mimo postępu medycyny i faktu, że raka można dziś w wielu przypadkach skutecznie leczyć, to stereotypy na temat chorób onkologicznych są wciąż obecne w świadomości społecznej. Już od pierwszych chwil, życie po diagnozie trzeba ułożyć na nowo. Dotyczy to zarówno sytuacji chorego, jak i jego bliskich. Choroby nowotworowe są specyficzne, obciążone szeregiem negatywnych odniesień i skutków ubocznych. \n\nW ramach Akademii Sztuk Przepięknych chcemy pokazać jak rozwinęła się współczesna medycyna i odczarować postrzeganie nowotworów, a także skupić się na wsparciu psychoonkologicznym.  Odpowiednio dobrane słowa, takie jak: „kocham Cię”, „jestem obok”, „wspieram Cię” czy „poszukuje informacji” mają ogromną moc - dają nadzieję i określają drogę.\n\nPanel dyskusyjny przybliży uczestnikom tematykę psychoonkologii i wsparcia, którego potrzebują zarówno pacjenci, jak i ich bliscy. Wspólnie obalimy mity społeczne dotyczące chorób nowotworowych oraz przekażemy Wam praktyczne narzędzia do wspierania osób z diagnozą onkologiczną oraz opowiemy Wam o postępie w medycynie w kontekście leczenia nowotworów.\n\nAutentyczne historie zmagań z nowotworem, przybliżą Was do zrozumienia potrzeb i uczuć, które towarzyszą pacjentom onkologicznym i osobom z ich najbliższego otoczenia. W ramach dyskusji zaprosimy jednego z ambasadorów kampanii „Tylko Dwa Słowa”, który podzieli się z Wami swoją historią i przemyśleniami z tym związanymi. Do grona naszych ambasadorów należą: Krystyna Kofta, Karolina Nowakowska, Oliwia Bieniuk, Jarosław Bieniuk oraz Artur Barciś. W dyskusji udział weźmie również psychoonkolog, który opowie o możliwościach wsparcia pacjenta onkologicznego oraz osoby wspierającej, o tym jak rozmawiać z pacjentem i jaka rolę odgrywa psychoonkolog. W spotkaniu weźmie także udział jeden z przedstawicieli organizacji pacjenckiej, który opowie jakie zmiany nastąpiły w medycynie w zakresie onkologii. Coraz szersza wiedza o mechanizmach powstawania nowotworów przyczynia się do rozwoju nowoczesnych terapii, w tym terapii personalizowanych, dzięki którym zwiększa szansę na zahamowanie choroby lub jej całkowite wyleczenie. W trakcie panelu stworzymy wspólnie „mapy wsparcia”, przedstawimy praktyczne pomysły i razem je omówimy. Porozmawiamy o najlepszych praktykach wsparcia oraz o tym jak je wdrażać w codziennym życiu. \n\nDoświadczenia organizacji pacjenckich ze współpracy z pacjentami, a także wyniki zrealizowanego w ramach kampanii „Tylko Dwa Słowa” badania opinii społecznej, potwierdziły potrzebę prowadzenia szerokiej edukacji nt. diagnostyki molekularnej i medycyny personalizowanej oraz zwrócenia szczególnej uwagi na towarzyszące pacjentom onkologicznym i ich bliskim emocje. W badaniu 6 na 10 ankietowanych przyznało, że w gronie ich najbliższych jest lub była osoba chorująca na nowotwór, ale 70% z nich nie wiedziało, co w takiej sytuacji powiedzieć osobie chorej, a najczęściej towarzyszącym uczuciem była bezradność. Leczenie nowotworów złośliwych wciąż utożsamiane jest głównie z chemioterapią, a spersonalizowane terapie jeszcze niedostatecznie zagościły w świadomości społecznej.",
    id: "3505cce3-1a78-4a67-8152-b648c38f1c70",
    instances: [
      {
        dateStart: "2024-08-02T18:00:00.000+02:00",
        dateEnd: "2024-08-02T19:00:00.000+02:00",
        id: "8547dc4b-2f75-4e37-8556-840cd6e6ebfa",
      },
    ],
  },
  {
    event:
      "Co słychać w świecie migracji?\nOkręgowa Izba Radców Prawnych w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Kolejna odsłona tematu poruszanego w Namiocie Radców Prawnych w 2022 r. oraz 2023 r. Radcowie odpowiedzą na pytania: \n- co w praktyce oznacza pakt migracyjny? \n- polska polityka migracyjna - w jakim kierunku idziemy? \n- nowe rozwiązania dla obywateli Ukrainy? \n- czy polskie prawo migracyjne podąża za zmieniającą się rzeczywistością?",
    id: "90400c88-3dd0-4833-85ff-ae8d7b4192d2",
    instances: [
      {
        dateStart: "2024-08-02T18:00:00.000+02:00",
        dateEnd: "2024-08-02T18:33:00.000+02:00",
        id: "742b9196-c144-4d77-a221-856c040b73da",
      },
    ],
  },
  {
    event:
      "Twoje prawa a uprawnienia różnych służb\nBiuro Rzecznika Praw Obywatelskich",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Twoje prawa a uprawnienia różnych służb – Mamy wiele różnych służb, które mogą ingerować w swobodę obywatela – legitymowanie, zatrzymanie, kontrola osobista i kontrola bagażu, przeszukanie, stosowanie środków przymusu, kontrola operacyjna, inwigilacja, dostęp do danych telekomunikacyjnych, internetowych i pocztowych. Jakie uprawnienia wobec obywatela mają: Policja, Straż Miejska, Straż Graniczna, Agencja Bezpieczeństwa Wewnętrznego, Centralne Biuro Antykorupcyjne, Służba Ochrony Państwa, Agencja Wywiadu (AW), Służba Kontrwywiadu Wojskowego (SKW), Służba Wywiadu Wojskowego (SWW), Inspektorat Wewnętrzny Służby Więziennej (IWSW), Służba Celno-Skarbowa, Żandarmeria Wojskowa czy też nadane postanowieniem Prezydenta RP uprawnienia żołnierzy NATO. Dużo służb i dużo uprawnień, warto zatem wiedzieć której z nich i w jakim zakresie jesteśmy winni posłuszeństwo",
    id: "153e67e7-4aba-490d-8ae6-53e023a07ec6",
    instances: [
      {
        dateStart: "2024-08-02T18:00:00.000+02:00",
        dateEnd: "2024-08-02T19:00:00.000+02:00",
        id: "a950715e-c5e4-4b07-9364-35d71a5943e3",
      },
    ],
  },
  {
    event: "Myrath",
    place: "Duża Scena",
    kind: "Koncert",
    description:
      "Myrath to oszałamiające połączenie bliskowschodnich instrumentów z mocnym brzmieniem metalu i progresywnego rocka. Zespół założony w nadmorskim miasteczku Ezzahra w Tunezji w 2001 roku, zręcznie stworzył swój własny, unikalny gatunek melodyjnego heavy metalu, czerpiąc z bogatej kultury regionu północnej Afryki i napełniając każdą nutę i riff dawką wiary i nadziei. Myrath zarówno w bardziej subtelnych brzmieniowo balladach, jak i cięższych kawałkach, eksploruje głębiny emocji i zawiłości życia, oferując muzyczną podróż wykraczającą daleko poza schemat.\n\n  \n \n  #metal",
    id: "647fc790-2844-4095-9d6b-15b262da0b48",
    instances: [
      {
        dateStart: "2024-08-02T18:00:00.000+02:00",
        dateEnd: "2024-08-02T19:10:00.000+02:00",
        id: "826aed09-614d-4574-91a7-a4ac21b27e42",
      },
    ],
  },
  {
    event: "Toastmasters- byłem, jestem, będę.\nToastmasters",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Czyli co każdy może nauczyć się, rozwinie dzięki Toastmasters, kto jest lub chce być liderem(-ką), przywódcą(-czynią), kierownikiem(-czką), matką, ojcem, przyjacielem(-ką). I co daje dodatkowo bycie wśród pozytywnie zakręconych ludzi.",
    id: "5cdde381-1469-48c5-817e-c9e957040f80",
    instances: [
      {
        dateStart: "2024-08-02T18:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "19387419-b74d-41bb-9196-6257b162c843",
      },
    ],
  },
  {
    event:
      "Ochrona prawna utworów sztucznej inteligencji\nOkręgowa Izba Radców Prawnych w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Podczas warsztatu uczestnicy omówią wyzwania związane z prawami autorskimi do dzieł generowanych przez AI oraz potrzebę zaistnienia zrównoważonych rozwiązań prawnych, które ochronią interesy twórców i użytkowników tej technologii.",
    id: "97aa3616-efb4-4c7f-8f0e-c7f2c5ea57c1",
    instances: [
      {
        dateStart: "2024-08-02T18:35:00.000+02:00",
        dateEnd: "2024-08-02T19:22:00.000+02:00",
        id: "80ec5176-694d-4bd8-9e58-fd8ab1828c81",
      },
    ],
  },
  {
    event: "Antyrefleks",
    place: "Mała Scena",
    kind: "Koncert",
    description:
      "AntyRefleks to zespół, który pięknie wziął sobie do serca  powiedzenie - „Punk Rock to nie rurki z kremem”. Mają wysokie aspiracje i przystojnego perkusistę. Kiedyś prawie zagrali koncert z Metallica (co prawda Metallica się nie zgodziła, ale chłopaki byli gotowi!). Maurycy, Młody, Poniat, Wiktor, oraz Patryk potrafią naprawdę dużo, ale wzięli się za muzykę. Jaki zespół, takie tango.  Przyjdźcie na ich koncert na Małej Scenie 30. Pol'and'Rock Festival i dajcie się ponieść punkrockowej mocy!  \n \n  #punk",
    id: "6e40cdb9-00b4-40db-b735-c673d9be991b",
    instances: [
      {
        dateStart: "2024-08-02T18:40:00.000+02:00",
        dateEnd: "2024-08-02T19:20:00.000+02:00",
        id: "99f53f89-ea7d-4e8d-8587-a9b3ee30914f",
      },
    ],
  },
  {
    event:
      '"100 pytań do..." spotkanie z sędziami Anną Marią Wesolowską i Igorem Tuleyą\nStowarzyszenie Sędziów Polskich  "Iustitia"',
    place: "Namiot Warsztatowy ASP",
    kind: "Warsztat",
    description:
      "Nieformalne spotkanie z ikonicznymi polskimi sędziami Anną Marią Wesołowską i Igorem Tuleyą na podstawie pytań publiczności o prawie i zasadach.  W trakcie spotkania każdy festiwalowicz będzie mógł zadać pytanie naszym gościom na temat prawa , wymiaru sprawiedliwości . Pytania będzie można wrzucać do specjalnej skrzynki na naszym stoisku od pierwszego dnia Pol'and'rock. Wybierzemy najlepsze! wszystkich zapraszamy!",
    id: "c33c8cfe-f469-409c-ac17-ec777a5ded98",
    instances: [
      {
        dateStart: "2024-08-02T19:00:00.000+02:00",
        dateEnd: "2024-08-02T20:00:00.000+02:00",
        id: "fb97f3e1-14d3-46eb-9eaa-d9498eb56c99",
      },
    ],
  },
  {
    event: "Clawfinger",
    place: "Duża Scena",
    kind: "Koncert",
    description:
      "Od debiutanckiego albumu „Deaf Dumb Blind”, który podbił serca fanów na całym świecie, Clawfinger pozostaje ikoną w świecie muzyki metalowej. Ich przeboje, takie jak „The Truth” czy „Warfair”, nadal są punktem odniesienia dla wielu artystów, a ich teksty społecznie świadome wciąż mają ogromne znaczenie. Mieszanka agresji, rytmu i przemyślanych słów sprawia, że Clawfinger to nie tylko zespół, ale również głos pokolenia, który wciąż przemawia do naszych serc i umysłów.  \n \n  #metal",
    id: "536bcbdc-5191-41ab-a494-bb282f9b0164",
    instances: [
      {
        dateStart: "2024-08-02T19:30:00.000+02:00",
        dateEnd: "2024-08-02T20:40:00.000+02:00",
        id: "2e4e4bd8-9aa9-48c8-8f4a-7f58fe6ac611",
      },
    ],
  },
  {
    event: "Ptaky",
    place: "Mała Scena",
    kind: "Koncert",
    description:
      "PTAKY – polski zespół rockowy, założony w Gdańsku w 2003 roku, przez Piotra Łukaszewskiego, gitarzystę grającego wcześniej m.in. w zespołach: TSA-Evolution, Skawalker, IRA oraz KarmaComa. Pierwsze dwa krążki „PTAKY” (2004 r.) i „Szkoła Latania (2008 r.) na stałe wpisały się do kanonu polskiej muzyki rockowej.  Utwór „Chroń to co masz” był oficjalnym singlem promującym w Polsce film „Spider Man2”     \n \n  #rock",
    id: "62ec3d6d-9468-403d-b6c0-70057b2fcc31",
    instances: [
      {
        dateStart: "2024-08-02T19:35:00.000+02:00",
        dateEnd: "2024-08-02T20:20:00.000+02:00",
        id: "d0b1f31a-b909-4e9c-a1e2-eb1b4dae2ced",
      },
    ],
  },
  {
    event: "Divine Shade",
    place: "Mała Scena",
    kind: "Koncert",
    description:
      "Divine Shade to założony w 2014 roku w Lyonie (Francja) projekt wykonujący neo-industrial rock. Kapela zręcznie łączy style i wpływy inspirowane kulturą cold wave, muzyką industrialną i elektroniczną. Na swoim koncie mają ciepło przyjęte przez krytyków dwie EP-ki oraz trzy trasy koncertowe po Europie. Divine Shade mogą pochwalić się występami w legendarnych miejscach, takich jak Wembley Arena (jako support przed Garym Numanem) przed 12 000 osób!  \n \n  #rock",
    id: "adf08db4-bdbf-4caf-a8c5-45ec83a2d839",
    instances: [
      {
        dateStart: "2024-08-02T20:35:00.000+02:00",
        dateEnd: "2024-08-02T21:25:00.000+02:00",
        id: "3699121d-d97e-4f21-be24-2fc6965b19e8",
      },
    ],
  },
  {
    event: "Kasia Kowalska: 30 lat Gemini",
    place: "Duża Scena",
    kind: "Koncert",
    description:
      'Kasia Kowalska — niebanalna postać, która debiutując równo 30 lat temu, wstrząsnęła polską sceną muzyczną, wraca na deski Najpiękniejszego Festiwalu Świata! Przez 30 lat działalności scenicznej nagrała 9 solowych albumów studyjnych, zdobyła wiele nagród, między innymi Fryderyka. Wystąpiła również w filmie "Nocne Graffiti" (1996 rok), czym udowodniła swój ogromny talent i wszechstronność! W 2018 roku, z okazji 25-lecia działalności artystycznej, powróciła na scenę, nadając swoim doskonale przez wszystkich znanym utworom nowego, rockowego brzmienia, co przywitało się z ogromnym entuzjazmem publiki. W 2024 roku wokalistka obchodzi jubileusz 30-lecia działalności scenicznej, co składa się w idealną całość z jubileuszem 30-lecia Najpiękniejszego Festiwalu Świata.   \n \n  #rock',
    id: "8d628b8e-9cfc-43da-97b3-117d588cbe59",
    instances: [
      {
        dateStart: "2024-08-02T21:00:00.000+02:00",
        dateEnd: "2024-08-02T22:10:00.000+02:00",
        id: "9ccc7d99-5dca-47e2-865d-32e37bf41852",
      },
    ],
  },
  {
    event: "Mery Spolsky",
    place: "Mała Scena",
    kind: "Koncert",
    description:
      "Mery Spolsky to artystka, obok której trudno przejść obojętnie. Otwarcie mówiła, że występ na Najpiękniejszym Festiwalu Świata jest jej ogromnym marzeniem i właśnie to marzenie spełni się już tego lata podczas jej koncertu na Małej Scenie 30. Pol'and'Rock Festival! Kilkukrotnie nominowana do nagrody Fryderyka, zdobyła tytuł Kobiety Roku miesięcznika Glamour, jest także laureatką Nagrody im. Grzegorza Ciechowskiego. Zagrała setki koncertów, w tym spełniła swoje marzenie, grając support przed zespołem Coldplay na Stadionie Narodowym. Obecnie artystka promuje swój trzeci album „EROTIK ERA”.  \n \n  #muzyka elektroniczna",
    id: "412d2cfc-927d-4c93-92d7-a674d1f84882",
    instances: [
      {
        dateStart: "2024-08-02T21:40:00.000+02:00",
        dateEnd: "2024-08-02T22:40:00.000+02:00",
        id: "49482744-d419-46f6-b0c4-8542622f545f",
      },
    ],
  },
  {
    event: "Motionless in White",
    place: "Duża Scena",
    kind: "Koncert",
    description:
      "Motionless In White okiełznali moc mrocznego połączenia industrialnego metalowego dysonansu, urzekającego gotyckiego popu i ikonografii godnej wielkiego ekranu, aby wyłonić się jako najbardziej niepokorna i filmowa siła rocka naszej generacji. Grupa znana jest ze współpracy z Jonathanem Davisem z Korn, Marią Brink z In This Moment i Danim Filthem z Cradle of Filth. Przygotuj się na ich spektakularny koncert na Pol'and'Rock Festival 2024!  \n \n  #metal",
    id: "0547dfa3-d25f-4244-8cc4-c6d7db174427",
    instances: [
      {
        dateStart: "2024-08-02T22:30:00.000+02:00",
        dateEnd: "2024-08-02T23:40:00.000+02:00",
        id: "e9ab66fc-c247-410b-810a-682d0d790e8d",
      },
    ],
  },
  {
    event: "Zenek Kupatasa",
    place: "Mała Scena",
    kind: "Koncert",
    description:
      "Zenek to wieloletni przyjaciel Najpiękniejszego Festiwalu Świata! W tym roku zagra dla Was na Małej Scenie i jesteśmy przekonani, że wielu z Was czekało na ten powrót z utęsknieniem – takiej energii i otwartości na publikę jak Zenek Kupatasa nie ma nikt inny! Zagrał dwa razy na Najpiękniejszym Festiwalu Świata – na Scenie Lecha na 24. Pol'and'Rock Festival w 2018 roku oraz na Najpiękniejszego Domówce Świata w 2020 roku.  \n \n  #rock",
    id: "0aeb349e-1c89-4427-8498-b31612024ba1",
    instances: [
      {
        dateStart: "2024-08-02T22:55:00.000+02:00",
        dateEnd: "2024-08-03T00:05:00.000+02:00",
        id: "4387ec88-87d8-47aa-9c9f-2a304b65ead1",
      },
    ],
  },
  {
    event: "Rotting Christ",
    place: "Duża Scena",
    kind: "Koncert",
    description:
      'Rotting Christ to zespół, który od ponad trzech dekad kształtuje krajobraz metalu ekstremalnego. Założony w 1987 roku przez braci Sakisa i Themisa Tolisów, zespół szybko zyskał uznanie sceny blackmetalowej, swoim niezwykle mrocznym i oryginalnym brzmieniem. Ich debiutancki album "Thy Mighty Contract" (1993) ustanowił podwaliny ich kariery, łącząc w sobie elementy death, heavy i gothic metalu z niezmiennie obecnym duchem black metalu. Ich najnowszy album "Pro Xristou" jest kolejnym kamieniem milowym w ich 35-letniej historii, głęboko zakorzenionym w starożytnej i pogańskiej mądrości.  \n \n  #metal',
    id: "70be86f2-27c3-46c9-93bf-055d8a68169f",
    instances: [
      {
        dateStart: "2024-08-03T00:00:00.000+02:00",
        dateEnd: "2024-08-03T01:10:00.000+02:00",
        id: "cae06afe-3dd4-4e00-898d-321fe268747a",
      },
    ],
  },
  {
    event: "Adrian Sherwood",
    place: "Mała Scena",
    kind: "Koncert",
    description:
      "Adrian Sherwood — brytyjski DJ i producent muzyczny, niekwestionowany mistrz dubu i produkcji muzycznej. Przesunął granice gatunków muzycznych, eksplorując reggae, post-punk, muzykę industrialną i basową. Jego nazwisko kojarzone jest z przełomowymi produkcjami, zarówno w mainstreamie, jak i w bardziej eksperymentalnych kręgach muzycznych. Sherwood nadal pozostaje w centrum uwagi jako producent, kurator i twórca, kontynuując swoje eksploracje dźwięku i współpracując z różnorodnymi artystami.  \n \n  #reggae  \n  \n  #muzyka elektroniczna",
    id: "2dc3910f-1320-4c28-9137-6da5c8a966c3",
    instances: [
      {
        dateStart: "2024-08-03T00:15:00.000+02:00",
        dateEnd: "2024-08-03T01:45:00.000+02:00",
        id: "e08fee11-751f-499a-8c83-30502d345fc2",
      },
    ],
  },
  {
    event: "Bohemian Betyars",
    place: "Duża Scena",
    kind: "Koncert",
    description:
      "Bohemian Betyars od 2009 roku zarażają publiczność na całym świecie swoją eklektyczną mieszanką speed-folk-freak-punku doprawionego węgierską muzyką ludową! Pochodzący z Budapesztu muzycy łączą w swoim brzmieniu elementy punku z węgierskimi, bałkańskimi i romskimi motywami. Ich koncerty to prawdziwe muzyczne huragany, które porwały już publiczność w USA, Hiszpanii, Chinach i Japonii. Niezależnie od tego, czy grają na ulicy, w klubie czy na festiwalu, chwytliwe melodie Bohemian Betyars wyrywają słuchaczy z codziennej rutyny i przenoszą w odmęty muzycznego szaleństwa. Pora przygotować się na tańce do białego rana i ogromną dawkę pozytywnej energii!  \n \n  #folk",
    id: "9447795e-db14-4132-b97f-db32f7027f11",
    instances: [
      {
        dateStart: "2024-08-03T01:30:00.000+02:00",
        dateEnd: "2024-08-03T02:40:00.000+02:00",
        id: "499e7eda-bd6b-4385-bf0d-3e8d673bd792",
      },
    ],
  },
  {
    event: "STREFA KOSMICZNA PRACOWNIA - Kosmiczna moda\nMBP Borne Sulinowo",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "0051bc49-ab7e-4798-8462-22405e225c67",
    instances: [
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T13:00:00.000+02:00",
        id: "9b6b87c5-da25-4fac-b44d-329ee4bdcdf1",
      },
    ],
  },
  {
    event: "Konsultacje z fizjoterapeutą\nKrajowa Izba Fizjoterapeutów",
    place: "Pomorze Zachodnie",
    kind: "Inne",
    description: "",
    id: "a4d18a24-6d77-4792-b1f4-bead6299c963",
    instances: [
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "301bbfc0-ebce-44bd-943d-7c2a3126b75c",
      },
    ],
  },
  {
    event: 'Gra "kim jestem"?\nStowarzyszenie Sędziów Polskich  "Iustitia"',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "gra,  w której uczestnicy wylosują profesję lub postać związaną z wymiarem sprawiedliwości  i na podstawie pytań zadawanych innym  będą musili odpowiedzieć kim są , jaki zawód  lub jaką postać  reprezentują, \ndo wylosowania będą takie profesje jak sędzia, adwokat, prokurator, radca prawny, notariusz, kurator, asystent sędziego, referendarz sądowy, komornik...",
    id: "4d767fd3-d378-43b0-b330-5f7965dae705",
    instances: [
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T11:00:00.000+02:00",
        id: "211e6e18-5e4e-4717-b91e-7f2d2f0ed1c4",
      },
    ],
  },
  {
    event: "Prawa zwierząt pozaludzkich\nOTOZ Animals",
    place: "Namiot Warsztatowy ASP",
    kind: "Warsztat",
    description:
      "Jak na przestrzeni lat zmienia się stosunek Polakow do jednej z najważniejszych aktów prawnych regulujących prawa zwierząt pozaludzkich? O co walczymy i co jeszcze można zmienić? Gdzie są instytucje państwowe, które powinny stać na straży praw zwierząt? Porozmawiaj z prawniczką i praktykami na temat obecnego systemu prawnego i dowiedz się co możesz zrobić, aby zagwarantować lepszą ochronę praw zwierząt pozaludzkich. W ramach praktycznej części warsztatu pokażemy również kilka najważniejszych elementów udzielania pierwszej pomocy medycznej dla psa na specjalnie przygotowanym do tego celu fantomie.",
    id: "c1f7d92f-423a-46e1-b2f7-85cc107bc586",
    instances: [
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T11:00:00.000+02:00",
        id: "4aeaaf49-33ac-4a2d-b8a4-0a8d1f5a3d43",
      },
    ],
  },
  {
    event: "W (S)PRAWACH KOBIET WRE\nStowarzyszenie Amnesty International",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Sobotę 03.08, w namiocie Amnesty poświęcamy (s)prawom kobiet, przemocy ze względu na płeć, prawu aborcji jako prawu człowieka. Przez cały dzień zapraszamy do podpisania petycji, uzupełnienia Alfabetu Praw Człowieka o (s)prawach kobiet, samodzielnego wykonania przypinki/badża poświęconego (s)prawom kobiet. O godz.10-12 – zapraszamy na malowanie plakatów w (s)prawach kobiet, szczególnie nt. prawa do aborcji. O godz.12 – krótka prelekcja o Konwencji Stambulskiej i jej znaczeniu dla kobiet i dzieci w Polsce, po której zapraszamy do dialog o prawach kobiet (w kręgach podzielimy się naszymi przekonaniami i spróbujemy usłyszeć osoby o innych poglądach). O godz. 13.30 – Bezprzemocowa Akcja Bezpośrednia w obronie prawa do aborcji, czyli spotkanie z aktywistkami, Justyną Wydrzyńską i Natalią Broniarczyk, które wzięły sprawy w swoje ręce i pomagają osobom potrzebującym aborcji, po spotkaniu około godz. 14.30 – zapraszamy do dialogu o prawie do aborcji (w kręgach z udziałem aktywistek ADT, będziemy mogły i mogli się podzielić własnymi doświadczeniami i przekonaniami związanymi z aborcją). UWAGA – film „Nie jesteś sama” poświęcony aktywistkom ADT pokażemy na ścianie naszego namiotu w środę 31.07 o godz 21.",
    id: "2d942002-ab43-4e5b-9363-7e20d87c1cc5",
    instances: [
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "dde3f189-c7a9-4ca0-9393-e9efbf01f7be",
      },
    ],
  },
  {
    event:
      "STREFA DZIECIĘCA GWIAZDA - Nie-ziemskie doświadczenia i eksperymenty z żywiołami\nPolitechnika Koszalińska",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "58ab35e4-393a-4e9b-a206-b4f4ef59d186",
    instances: [
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T13:30:00.000+02:00",
        id: "35216d5c-f6d6-4c16-8ef0-a09c5efa2bfc",
      },
      {
        dateStart: "2024-08-03T14:30:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "488708d2-9dc5-4fe5-8db4-ef912120554d",
      },
    ],
  },
  {
    event: "Kobieca cykliczność & biohacking dla kobiet\nNatalia Knopek",
    place: "Strefa Działań Twórczych ASP",
    kind: "Warsztat",
    description:
      "Spotkanie na którym porozmawiamy sobie o tym, w jak różnych rytmach (choćby z hormonalnego punktu widzenia) działają kobiety i mężczyźni. O rytmie dobowym i księżycowym. O biohackingu dla kobiet, bo niestety zwykle badania odbywają się na mężczyznach. O tym jak dopasować się do swojej cykliczności, jak zrobić z niej swój super power - przede wszystkim poprzez zrozumienie jej :)",
    id: "d1f9074f-8180-4d4c-b69e-91b1042b03b6",
    instances: [
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T11:00:00.000+02:00",
        id: "8f7c16f9-f159-4ea9-a68d-c8714b0c983d",
      },
    ],
  },
  {
    event:
      "Napisz pocztówkę do polityków w sprawie zakazu hodowli zwierząt na futra\nStowarzyszenie Otwarte Klatki",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Napisz pocztówkę do polityków w sprawie zakazu hodowli zwierząt na futra",
    id: "91ac29a1-e338-4c20-80fb-0e81d0a812f6",
    instances: [
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "5a5c9f0b-72bf-45db-bc2e-8224552a1f41",
      },
    ],
  },
  {
    event:
      "STREFA PLANETA ZDROWIA - Spotkanie z kardiologiem- określenie stopnia ryzyka sercowo-naczyniowego, omówienie wyników, zalecenia dla pacjenta\nNarodowy Instytut Kardiologii",
    place: "Pomorze Zachodnie",
    kind: "Inne",
    description: "",
    id: "55e1091e-9626-4f3c-b782-4e9b5341f257",
    instances: [
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "be2d565f-605f-4bf5-a9a0-2fa0ea3b246d",
      },
    ],
  },
  {
    event:
      "Spotkania z historią średniowiecza w opowieści Stowarzyszenia Historyczno-Kulturalnego Tempelburg\nGmina Czaplinek",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Stowarzyszenie Historyczno-Kulturalne Tempelburg na Pol'and'Rock 2024\nZapraszamy wszystkich miłośników historii do odwiedzenia stoiska Stowarzyszenia Historyczno-Kulturalnego Tempelburg, gdzie przeniesiemy Was w fascynujące czasy średniowiecza. Nasze stowarzyszenie, od lat działające na rzecz ochrony polskiego dziedzictwa kulturowego, przygotowało bogaty program, który przybliży Wam życie codzienne oraz historię miasta Czaplinek-Tempelburg.\n\nCo Czeka na Odwiedzających?\n1. Prezentacja Strojów Średniowiecznych\nNa dwóch manekinach zaprezentujemy autentyczne stroje z epoki średniowiecza. Odwiedzający będą mogli z bliska przyjrzeć się detalom ubrań, które noszono na co dzień oraz podczas ważnych wydarzeń. Nasz przewodnik opowie o ich symbolice, funkcjonalności oraz o tym, jak zmieniała się moda w tamtych czasach.\n\n2. Scenki z Życia Codziennego\nOdegramy scenki przedstawiające życie codzienne ludzi w średniowieczu. Będzie można zobaczyć, jak wyglądały ich codzienne obowiązki, rozrywki, a także ważne momenty w ich życiu.\n\n3. Prezentacja Uzbrojenia i Przedmiotów z Epoki\nZaprezentujemy kolekcję średniowiecznego uzbrojenia i przedmiotów codziennego użytku:\n\nHełmy i tarcze: Zobaczycie różnorodność form i funkcji średniowiecznych hełmów oraz tarcz.\nMiecze i proporce: Poznacie różne rodzaje mieczy oraz symbolikę proporców używanych w tamtych czasach.\nDrewniane miski i inne naczynia: Przybliżymy, jak wyglądała średniowieczna kuchnia i jakie naczynia były wówczas używane.\n4. Opowieści o Powstaniu Czaplinka-Tempelburga\nOdwiedzający będą mogli wysłuchać fascynujących opowieści o założeniu miasta Czaplinek-Tempelburg. Przedstawimy historię jego powstania, ważne wydarzenia z jego dziejów oraz jego rozwój na przestrzeni wieków.\n\nMateriały Promocyjne i Pamiątki\nPrzygotowaliśmy również szereg materiałów promocyjnych:\n\nFoldery Stowarzyszenia: Odwiedzający otrzymają dwa foldery opisujące działania naszego stowarzyszenia na rzecz ochrony i popularyzacji polskiego dziedzictwa kulturowego.\nSmycze z Logo Stowarzyszenia: Każdy odwiedzający otrzyma pamiątkową smycz z naszym logo.\n\nSerdecznie zapraszamy do odwiedzenia naszego stoiska i zanurzenia się w atmosferze średniowiecza!",
    id: "d354ac21-4810-4949-8ec7-8d237495852c",
    instances: [
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T11:30:00.000+02:00",
        id: "2c1950cf-76de-4c9f-9f58-5b7218d877db",
      },
    ],
  },
  {
    event:
      "Dostępność dla osób z niepełnosprawnościami\nBiuro Rzecznika Praw Obywatelskich",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Dostępność dla osób z niepełnosprawnościami – Warsztat dotyczący dostępności w przestrzeni fizycznej. Celem warsztatów jest uzmysłowienie uczestnikom, jak dostępność przestrzeni publicznej jest istotna z perspektywy osób z niepełnosprawnością",
    id: "4edf532c-d54f-4157-86d5-4f16a900c098",
    instances: [
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T11:00:00.000+02:00",
        id: "49b9aaac-4fe9-4ee2-b836-2975fd8adce9",
      },
    ],
  },
  {
    event: "Michał Figurski",
    place: "Duży Namiot ASP",
    kind: "Spotkanie",
    description:
      'Michał Figurski to współtwórca i autor wielu audycji radiowych, związany z takimi rozgłośniami jak Eska Rock, Radio Zet, Muzo FM oraz Antyradio. Współtwórca oraz autor nazwy stacji Antyradio. Swoją debiutancką audycję "Chóśtafka" prowadził w Rozgłośni Harcerskiej w latach 1993-1995. Jest jedną z najbardziej znanych osób w Polsce, które otwarcie mówią o swojej chorobie, czyli cukrzycy typu 1. W roku 2023 Michał Figurski wydał autobiografię pt. "Najsłodszy. Autobiografia pisana kciukiem".  \n \n  #ASP',
    id: "d15b66d1-5e66-4e3a-b340-8f5a1fe62564",
    instances: [
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T11:20:00.000+02:00",
        id: "1ba85faf-c528-4b32-ac0b-2e5d704f1f26",
      },
    ],
  },
  {
    event: "Algorytm talentów\nToastmasters",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Na wykładzie dowiesz się:  Jak zdefiniować talent i jak odróżnić go od zainteresowania, pasji czy hobby.  Jak odkryć własne talenty za pomocą testów, ankiet, kwestionariuszy, feedbacku czy coachingu.  Jak rozwijać własne talenty poprzez ustalanie celów, planów i strategii rozwojowych, oraz wybieranie odpowiednich szkoleń, kursów, warsztatów czy mentoringu.  Jak korzystać z talentów w życiu osobistym i zawodowym poprzez łączenie talentów z wartościami, misją i wizją, oraz wykorzystywanie talentów do osiągania sukcesu, spełnienia i szczęścia.\nŁukasz Chomicz  Holistyczny menedżer. Trener. Jego misją jest pokazywanie, jak dbać o zespół, a jednocześnie skutecznie realizować KPI firmy. \nWspółautor książek: Sztuka inspirowania. Wiedza Warta Miliony. Potęga Samodoskonalenia.",
    id: "7638a383-4730-4c75-86f2-9c3391e0665f",
    instances: [
      {
        dateStart: "2024-08-03T10:00:00.000+02:00",
        dateEnd: "2024-08-03T11:00:00.000+02:00",
        id: "d8bdef63-8eb1-4574-a405-0dd32873b69f",
      },
    ],
  },
  {
    event: "warsztaty antydyskryminacyjne\nStowarzyszenie Kongres Kobiet",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description: "warsztaty antydyskryminacyjne",
    id: "306f3d0e-7760-4229-877e-3dc1fe8bf6b7",
    instances: [
      {
        dateStart: "2024-08-03T11:00:00.000+02:00",
        dateEnd: "2024-08-03T12:00:00.000+02:00",
        id: "341b9030-d6c2-4d01-9cba-1034694739b1",
      },
    ],
  },
  {
    event:
      "Prokurator na miejscu zdarzenia\nStowarzyszenie Prokuratorów Lex Super Omnia",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zdarza się, że znajdujemy się w sytuacji awaryjnej - długiego oczekiwania w korku na drodze, czy w unieruchomionym pociągu. Często powodem jest wypadek, a w oczekiwaniu na rozładowanie zatoru pojawia się informacja, że wszyscy czekają na przyjazd prokuratora. Czy zawsze na miejsce przybywa prokurator? Co tam robi? Jaka jest rola Policji i innych służb, a jaka prokuratora? Kiedy prokurator ma obowiązek przybyć na miejsce zdarzenia? Na te i inne pytania postarają się odpowiedzieć prokuratorzy: Alfred Staszak i Piotr Wójtowicz oraz technik policyjny.",
    id: "83cc1e92-11ce-45f8-86d5-2e7c0b82b3cb",
    instances: [
      {
        dateStart: "2024-08-03T11:00:00.000+02:00",
        dateEnd: "2024-08-03T12:00:00.000+02:00",
        id: "8945da2f-c439-435f-9709-cbbe7e9ba063",
      },
    ],
  },
  {
    event: "Wygonić toksyczność zostawić człowieka\nToastmasters",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Na spotkaniu zostaną przedstawione mechanizmy powielania niechcianych zachowań, które zostały wcześniej nabyte. Nieświadome nauczanie dzieci krzywdzących zachowań może przyczynić się do wystąpienia takich zachowań w przyszłych relacjach dzieci. Ważne jest również, aby samemu pozbyć się niechcianych zachowań, które nieświadomie przyjęliśmy. Dzięki temu unikniemy dziedziczenia toksyczności i dalszego przekazywania tych złych nawyków.\nStanisław Kalicki Coach związków i relacji. Uczy technik tworzenia szczęśliwego życia w związku. Prowadzi warsztaty "Moc Pary dla Pary". Kanclerz Fundacji Już Pomagam, vice prezesem Fundacji Zdrowia ESCO, współzałożycielem Stowarzyszenia na rzecz pomocy dzieciom z chorobam nowotworowymi Pomóż dziecku wyzdrowieć, Stowarzyszenia Krewaktywni.',
    id: "11676881-e7ce-48c5-ac43-5218c216d848",
    instances: [
      {
        dateStart: "2024-08-03T11:00:00.000+02:00",
        dateEnd: "2024-08-03T12:00:00.000+02:00",
        id: "8233a778-1866-4d27-9f6c-f1b773059d97",
      },
    ],
  },
  {
    event: "Rok obrzędowy Słowian\nWioska Słowiańska",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Nasi słowiańscy przodkowie od zawsze żyli w zgodzie z naturą i podporządkowywali się jej rocznemu cyklowi. Podczas wykładu będzie można się dowiedzieć jak wyglądały (i nadal wyglądają) święta i obrzędy związane z rokiem liturgicznym i wegetacyjnym. Opowiemy również o stałych elementach obrzędowości dotyczących wszystkich (zaróno głównych jak i pomniejszych świąt). Opiszemy takie święta koła rocznego jak Jare Gody, Kupała, Plony czy Szczodre Gody oraz takie rytuały przejścia jak Postrzyżyny/Kosopleciny czy Swadźba.",
    id: "42172a48-b31d-4349-9bf6-497b5242699e",
    instances: [
      {
        dateStart: "2024-08-03T11:00:00.000+02:00",
        dateEnd: "2024-08-03T12:00:00.000+02:00",
        id: "7b6d380c-99e4-4259-b030-f1d14f45c518",
      },
    ],
  },
  {
    event:
      "Festiwalowy Pałac Ślubów -  śluby wyznaczonych wcześniej 10 par\nUSC Czaplinek",
    place: "Pomorze Zachodnie",
    kind: "Inne",
    description: "",
    id: "471b37ff-cf42-4f28-8c60-0e36a56ee7bc",
    instances: [
      {
        dateStart: "2024-08-03T11:00:00.000+02:00",
        dateEnd: "2024-08-03T13:00:00.000+02:00",
        id: "06c797f2-9d80-4114-ab0b-f6ce3573bf0f",
      },
    ],
  },
  {
    event:
      "Warsztaty artystyczne z Uniwersytetem Ludowym\nNarodowy Instytut Wolności - Centrum Rozwoju Społeczeństwa Obywatelskiego",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Warsztaty artystyczne z Uniwersytetem Ludowym, realizowane w 4 obszarach.\n•\tTworzenie pamiątkowych kafli z gliny\nUczestnicy zanurzą się w świat ceramiki i stworzą własnoręcznie unikalne kafle (małe formy dekoracyjne) z gliny. Ten efektowny warsztat to doskonała okazja, aby wyrazić swoją kreatywność i zabrać ze sobą niezapomnianą pamiątkę z festiwalu.  Dzięki własnoręcznemu kształtowaniu i zdobieniu swoich dzieł, uczestnicy odkrywają radość pracy z gliną. Kafle staną się wyjątkowym elementem dekoracyjnym w domu lub oryginalnym prezentem dla bliskiej osoby.\n•\tArtystyczne wzory liści na torbach płóciennych\nPrzeniesiemy naturę na materiał i stworzymy wyjątkowe torby płócienne, używając prawdziwych liści i młotków. To warsztat, który łączy kreatywność z ekologicznym podejściem, oferując unikalne efekty. Każda torba będzie jedyna w swoim rodzaju, odzwierciedlając piękno natury w artystyczny sposób. Uczestnicy cieszyć się będą radością tworzenia czegoś pięknego i praktycznego.\n•\tMalowanie festivalowych kamieni ("Co komu w duszy gra!")\nDamy upust naszej wyobraźni i pomalujemy kamienie w kolorowe wzory, które odzwierciedlają Nasze wewnętrzne uczucia. Ten barwny warsztat to idealny sposób na odkrycie artystycznej duszy każdego uczestnika. Wszyscy zabiorą ze sobą unikalne kamienie jako pamiątkę lub będą mogli podarować je wybranej osobie jako oryginalny prezent. Dajmy się ponieść magii kolorów i stwórzmy coś wyjątkowego!\n•\tMakramowe zawieszki festivalowe\nNauczymy się techniki makramy i stworzymy piękne, ręcznie wykonane zawieszki, dekoracje pod okiem doświadczonego instruktora. To doskonała pamiątka z festiwalu, którą również będzie można zabrać ze sobą do domu. Uczestnicy zrelaksują się i dadzą się ponieść procesowi tworzenia, splatając nici w finezyjne wzory. Makramowe zawieszki będą unikalnym dodatkiem do wnętrza lub wspaniałym upominkiem.\nWarsztaty prowadzone przez instruktorów Uniwersytetu Ludowego w Radawnicy wspieranego przez NIW-CRSO w ramach programu Uniwersytety Ludowe.',
    id: "984ee20f-bf28-4a29-9281-1b4ecd6630df",
    instances: [
      {
        dateStart: "2024-08-03T11:00:00.000+02:00",
        dateEnd: "2024-08-03T12:00:00.000+02:00",
        id: "78bac6cf-639b-426b-92f2-5634ee08ced0",
      },
      {
        dateStart: "2024-08-03T13:00:00.000+02:00",
        dateEnd: "2024-08-03T14:00:00.000+02:00",
        id: "67c1e814-778e-4c82-a2db-1af39d932ca3",
      },
      {
        dateStart: "2024-08-03T15:00:00.000+02:00",
        dateEnd: "2024-08-03T16:00:00.000+02:00",
        id: "8a44b167-b3ad-44ee-b719-414421438d4b",
      },
    ],
  },
  {
    event: "Prokurator na miejscu zdarzenia\nIzba Adwokacka w Warszawie",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zdarza się, że znajdujemy się w sytuacji awaryjnej - długiego oczekiwania w korku na drodze, czy w unieruchomionym pociągu. Często powodem jest wypadek, a w oczekiwaniu na rozładowanie zatoru pojawia się informacja, że wszyscy czekają na przyjazd prokuratora.\nCzy zawsze na miejsce przybywa prokurator? Co tam robi? Jaka jest rola Policji i innych służb, a jaka prokuratora? Kiedy prokurator ma obowiązek przybyć na miejsce zdarzenia? Na te i inne pytania postarają się odpowiedzieć prokuratorzy: Alfred Staszak i Piotr Wójtowicz oraz technik policyjny.",
    id: "07194327-de10-4880-b797-2c7b38440741",
    instances: [
      {
        dateStart: "2024-08-03T11:00:00.000+02:00",
        dateEnd: "2024-08-03T12:00:00.000+02:00",
        id: "8cd9f65c-1604-42f9-a930-7d76c16653f5",
      },
    ],
  },
  {
    event:
      'Jak depresja wpływa na życie seksualne"\nOgólnopolski Strajk Kobiet',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Spotkanie z terapeutką poprzez otwartą dyskusję i fachowe wskazówki zagłębimy temat i zapoznamy się jak należy zrozumieć wpływ depresji na sferę Intymną. Warsztaty mają na celu stworzenie bezpiecznej przestrzeni do wymiany doświadczeń oraz zdobycie praktycznych narzędzi wspierających zdrowe funkcjonowanie seksualne pomimo depresji.",
    id: "189b602d-2152-4cd9-b332-e4ae912a017a",
    instances: [
      {
        dateStart: "2024-08-03T11:00:00.000+02:00",
        dateEnd: "2024-08-03T12:00:00.000+02:00",
        id: "009e4bc8-7643-4125-8747-e73a9ee6387e",
      },
    ],
  },
  {
    event:
      "„Twoje prawa, nasza sprawa” – prawa obywatela\nBiuro Rzecznika Praw Obywatelskich",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "„Twoje prawa, nasza sprawa” – prawa obywatela. Zajęcia prowadzone na bazie wydanej przez BRPO publikacji i na podstawie spraw, jakie są zgłaszane do Rzecznika Praw Obywatelskich. Warsztat na temat promowania wiedzy obywatelskiej i wszelkich działań na rzecz praw człowieka",
    id: "407daa4b-71c4-4e7b-85df-42ec5fa167f0",
    instances: [
      {
        dateStart: "2024-08-03T11:00:00.000+02:00",
        dateEnd: "2024-08-03T12:00:00.000+02:00",
        id: "a2b9a387-81f5-4582-8798-63abea5f11d8",
      },
    ],
  },
  {
    event:
      "Jak podróżować i pracować z dzieckiem? Vanlife, workaway, praca zdalna i sezonowa.\nzbusovani",
    place: "Strefa Działań Twórczych ASP",
    kind: "Warsztat",
    description:
      "Zbusovani to rodzina, która kilka lat temu postanowiła zmienić swoje życie na nieco niestandardowe. Ania, Krzysiu, ich syn Olek oraz trzy psiaki, rzucili dotychczasowe prace, zbudowali kampervana i wyruszyli w podróż. W podróż nie tylko liczoną w kilometrach.\nNa swoich spotkaniach opowiadają o podróżowaniu z dzieckiem, o pracy sezonowej w Polsce, workaway oraz pracy zdalnej z kampervana. Swoimi przygodami dzielą się również w mediach społecznościowych, gdzie pokazują swoją twórczość. Głównym celem zbusovanych jest zachęcić rodziny z dziećmi lub czworonożnymi przyjaciółmi do ruszenia w świat, do podróży i otwartości na nowe i zmienne. Dzieci chłoną wiedzę jak gąbka, codziennie uczą się nowych rzeczy, nabywają nowe umiejętności, których nie nauczą się w przedszkolu. Podróż oczami dziecka może wiele nauczyć również i nas dorosłych. Wspomnimy też o tym, że jeśli się czegoś bardzo chce to można, bez względu na wielkość budżetu. \n\nJuż nie możemy się doczekać spotkania z Wami! Do zobaczenia :)",
    id: "f8389d89-414c-43bb-bb09-cabe4bc5a9c6",
    instances: [
      {
        dateStart: "2024-08-03T11:00:00.000+02:00",
        dateEnd: "2024-08-03T12:00:00.000+02:00",
        id: "6ee69796-814d-4926-89cb-9eb4440825c5",
      },
    ],
  },
  {
    event: "Sylwia Zientek",
    place: "Duży Namiot ASP",
    kind: "Spotkanie",
    description:
      "Sylwia Zientek – z wykształcenia prawniczka, która po 13 latach w korporacji rzuciła pracę, aby skupić się na pisaniu. Teksty biograficzne publikowała w Wysokich Obcasach Extra, Skarpie Warszawskiej, L’Officiel Polska i wielu innych. Pomysłodawczyni i współscenarzystka serialu kostiumowego „Matylda”. Znawczyni Paryża i kultury francuskiej. Pasjonatka sztuki — obecnie studiuje historię sztuki nowoczesnej w Instytucie Sztuki PAN. Prywatnie mama trójki dzieci, wielbicielka muzyki (od grunge’u po jazz i klasykę), kolekcjonerka obrazów. Podróżuje śladami artystów i nieustannie poszukuje informacji o zapomnianych malarkach i rzeźbiarkach.  \n \n  #ASP",
    id: "bc936418-cdb7-489f-b4f7-c879a650bb99",
    instances: [
      {
        dateStart: "2024-08-03T11:30:00.000+02:00",
        dateEnd: "2024-08-03T13:00:00.000+02:00",
        id: "3998e9b3-769b-4fda-9aad-c5bfbea1314d",
      },
    ],
  },
  {
    event:
      'Dla dzieci co to jest - zabawa w ukryty przedmiot\nStowarzyszenie Sędziów Polskich  "Iustitia"',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "zabawa dla dzieci w ukryty przedmiot związany z wymiarem sprawiedliwości ,  dzieci najpierw  odgadną jaki to jest przedmiot , a potem sprobujemy wspólnie wyjaśnić do czego służy , w ten sposób przybliżymy dzieciom zasady funkcjonowania wymiaru sprawiedliwości",
    id: "a2c01ba9-de55-452d-b20e-3ead29ca5c98",
    instances: [
      {
        dateStart: "2024-08-03T11:30:00.000+02:00",
        dateEnd: "2024-08-03T12:30:00.000+02:00",
        id: "c4fff1b8-a750-4dba-b55e-33066f7ec140",
      },
    ],
  },
  {
    event:
      "Dziecka prawa - moja sprawa\nOkręgowa Izba Radców Prawnych w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Co to jest prawo? Do czego dziecko ma prawo? Do czego rodzic nie ma prawa?  Odpowiedzi na te i inne pytania związane z prawami dziecka.",
    id: "8582a4b6-4c0a-4036-a0e9-89ab8c589af7",
    instances: [
      {
        dateStart: "2024-08-03T11:30:00.000+02:00",
        dateEnd: "2024-08-03T12:00:00.000+02:00",
        id: "d97dce4b-b239-48c2-80bf-2b0901383965",
      },
    ],
  },
  {
    event: "Why does the fox suffer?\nStowarzyszenie Otwarte Klatki",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Why does the fox suffer? - za pomocą gogli VR zobacz jak wygląda życie na fermie futerkowej",
    id: "d36c267c-c37a-4744-b32a-fd5f1dcbb06d",
    instances: [
      {
        dateStart: "2024-08-03T11:30:00.000+02:00",
        dateEnd: "2024-08-03T13:30:00.000+02:00",
        id: "964b9a5f-3d87-46d6-a48c-b65bacadd246",
      },
    ],
  },
  {
    event: "MOCne Ozdoby: Wyraź Siebie!\nFundacja Złotowianka",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Chcesz poczuć moc swojej kreatywności? Dołącz do naszych warsztatów, gdzie stworzysz unikalne ozdoby, które będą wyrażać Twoją osobowość i styl! Każdy uczestnik otrzyma zestaw do tworzenia zabawnych, ciekawych, i ekstrawaganckich bransoletek, kolczyków oraz innych ozdób. Poczuj się jak artysta i pozwól swojej wyobraźni szaleć!",
    id: "3ab88403-f2ae-4d6f-a2bf-21f92b2e8805",
    instances: [
      {
        dateStart: "2024-08-03T11:30:00.000+02:00",
        dateEnd: "2024-08-03T14:00:00.000+02:00",
        id: "5af8e4fe-1a4a-40ea-a2a2-8d70bd196495",
      },
    ],
  },
  {
    event: "LUKA PŁACOWA\nStowarzyszenie Kongres Kobiet",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Dlaczego kobiety na całym świecie zarabiają mniej niż mężczyźni i jak\nto zmienić - pogadanka interaktywna o luce płacowej nt projektu ustawy autorstwa Kongresu Kobiet.\nOpiekunka tematu; Jolanta Niezgodzka, posłanka na Sejm.",
    id: "2b03497c-0ef4-4ccf-81c1-cf2f281d5803",
    instances: [
      {
        dateStart: "2024-08-03T12:00:00.000+02:00",
        dateEnd: "2024-08-03T13:00:00.000+02:00",
        id: "a2667713-952f-4f42-868d-13171a546176",
      },
    ],
  },
  {
    event: "Don't judge the jar by the label\nFundacja Feminoteka",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Warsztat poświęcony uprzedzeniom i ćwiczeniu otwartości połączony z działaniem performatywnym, gdzie osoby uczestniczące wypełniają używane wcześniej słoiki lub butelki z etykietami nową "treścią", np. słoik po dżemie zostaje wypełniony ziarnami fasoli, a butelka po soku pomarańczowym - solą. Każda osoba ma wkład w wystawę, którą tworzą wszystkie naczynia. Tak stworzone przedmioty wykorzystamy też jako środek własnego wyrazu w komunikowaniu swojej postawy otwartości i braku zgody na osądzanie czy przemoc.',
    id: "eaf35b80-2b37-4188-a920-3c8f6d0453c4",
    instances: [
      {
        dateStart: "2024-08-03T12:00:00.000+02:00",
        dateEnd: "2024-08-03T13:30:00.000+02:00",
        id: "5f3e947c-88f3-4b28-a963-87fb66c1857f",
      },
    ],
  },
  {
    event: "Zrób pierwszy krok\nToastmasters",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Agnieszka Brak opowie nam o strachu. Nasz gadzi mózg wiedząc, że planujesz zrobić coś pierwszy raz lub to robisz reaguje w trybie awaryjnym gdy tylko wyczuje zagrożenie, czyli ucieczka, atak, ukrywania się, zamrożenia i wzywanie pomocy. Właśnie w tym momencie należy sobie uświadomić, że można to przezwyciężyć. Warto wiedzieć, że stres to nie tylko czynnik, który nas powstrzymuje przed działaniem. Jest też dobrym motywatorem do działania mimo wszystko. W jaki sposób można przerobić stres oddziałujący na nas negatywnie na pozytywny? O tym opowiem w moim wystąpieniu. Wyjaśnię dlaczego warto umieć zarządzać swoimi emocjami, unikając sytuacji kiedy to emocje rządzą nami. W jaki sposób zaprzyjaźnić się z Naszym stresem, aby nam pomagał w realizacji celu/ celów?",
    id: "37f726a3-ec73-446b-ac9c-c07db7d6a72e",
    instances: [
      {
        dateStart: "2024-08-03T12:00:00.000+02:00",
        dateEnd: "2024-08-03T13:00:00.000+02:00",
        id: "a3950864-dadf-4271-8cf1-57b77fc911ce",
      },
    ],
  },
  {
    event: "Konkurs wiedzy o egzekucji.\nKrajowa Rada Komornicza",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Konkurs wiedzy o komorniku i egzekucji. Czekają na Was ciekawe nagrody.",
    id: "484488c9-40e6-4ceb-a96e-f4c183f83e10",
    instances: [
      {
        dateStart: "2024-08-03T12:00:00.000+02:00",
        dateEnd: "2024-08-03T14:00:00.000+02:00",
        id: "0a66b0e6-6322-418a-9d16-068716c51b5e",
      },
    ],
  },
  {
    event:
      "GDZIE SIĘ  PODZIAŁY TAMTE PRYWATKI?-JAK SIĘ BAWIĘ NA TRZEŹWO?\nFundacja Biuro Służby Krajowej Anonimowych Alkoholików w Polsce",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Warsztat pt. "Gdzie się podziały tamte prywatki?- Jak się bawię na trzeźwo?" Na spotkaniu spiker wypowie się w temacie swojego uczestnictwa w imprezach, koncertach, najróżniejszych eventach - czy jako alkoholik może się stawiać w takich miejscach? Osoby, które trafiają do AA często są przekonane o rychłym końcu ich życia towarzyskiego. Porozmawiamy o tym, jak się dobrze bawić i nie zwariować :-))',
    id: "b1298a9e-cf43-4cc9-bbe5-830942cb6d7a",
    instances: [
      {
        dateStart: "2024-08-03T12:00:00.000+02:00",
        dateEnd: "2024-08-03T13:00:00.000+02:00",
        id: "b7ec82de-5be6-4466-a91c-ee4bfdaa6476",
      },
    ],
  },
  {
    event:
      "KONWENCJA STAMBULSKA i JEJ ZNACZENIE DLA KOBIET W POLSCE\nStowarzyszenie Amnesty International",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy do namiotu Amnesty na krótką PRELEKCJĘ o Konwencji Stambulskiej i jej znaczeniu dla kobiet i dzieci w Polsce, po której zapraszamy do DIALOGU O (S)PRAWACH KOBIET. W kręgach podzielimy się naszymi przekonaniami i spróbujemy usłyszeć osoby o odmiennych poglądach.",
    id: "6eb3697e-4415-4d75-8b5f-5c79148ca388",
    instances: [
      {
        dateStart: "2024-08-03T12:00:00.000+02:00",
        dateEnd: "2024-08-03T13:30:00.000+02:00",
        id: "d3ed2105-1fb8-4dfc-8041-cade97a157d8",
      },
    ],
  },
  {
    event:
      "Młotkowanie roślin na torbach eko z motywem słowiańskim\nWioska Słowiańska",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Słowianie zawsze byli blisko natury i roślin. Na warsztatach, będzie można zagłębić się w technikę młotkowania, czyli dekorowania materiału za pomocą młotka i żywych roślin. Każdy uczestnik będzie mógł wykonać własną eko torbę z motywami roślinnymi i słowiańskimi.",
    id: "85b56f13-e69e-41f2-942e-604f0fc550fa",
    instances: [
      {
        dateStart: "2024-08-03T12:00:00.000+02:00",
        dateEnd: "2024-08-03T13:00:00.000+02:00",
        id: "3ea36003-3876-4641-9671-b0789c6d5565",
      },
    ],
  },
  {
    event:
      "Sekcja zwłok: co, jak, w jakiej kolejności  i dlaczego?  - zajęcia z Prokuratorem Krajowym\nOkręgowa Izba Radców Prawnych w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "W warsztacie - wszystko co chcielibyście wiedzieć o sekcji zwłok, a o co boicie się zapytać? Pokaz z użyciem manekina. Q&A.",
    id: "79b72596-df5f-46e4-8b9f-71987a9a29a7",
    instances: [
      {
        dateStart: "2024-08-03T12:00:00.000+02:00",
        dateEnd: "2024-08-03T12:55:00.000+02:00",
        id: "8a14e7d2-3f8e-4f49-9724-3d4cfe2378a4",
      },
    ],
  },
  {
    event:
      'Przekuj pasję w swoją firmę i "NIE PRACUJ" do końca życia. Warsztat z nagrodami| ULTRAMASZYNA, na zaproszenie mBanku.\nmBank',
    place: "Namiot Warsztatowy ASP",
    kind: "Warsztat",
    description:
      "Na pewno znasz ten cytat - wybierz pracę, którą kochasz, a nie przepracujesz ani jednego dnia - ale jak to zrobić? \nPrzyjdź na warsztat i posłuchaj, jak zrobiła to Ewa Wójcik założycielka firmy ULTRAMASZYNA, która zajmuje się kursami szycia stacjonarnie. \n\nDlaczego warto przyjść?\n- poznasz historię Ewy, jak z pasji zrodził się sposób na życie\n- przerobisz swoją koszulkę, która będzie świetną pamiątką z 30. Pol’and’Rock Festival\n- dowiesz się, jak najprościej założyć firmę i jakie wsparcie możesz dostać\n- możesz zgarnąć gadżety od mBanku, fajne gadżety!",
    id: "74ee86eb-703c-4ec3-9423-3db7ef4eef57",
    instances: [
      {
        dateStart: "2024-08-03T12:00:00.000+02:00",
        dateEnd: "2024-08-03T13:00:00.000+02:00",
        id: "889c1f35-f86b-4e59-b423-aaa55bb3a9ae",
      },
    ],
  },
  {
    event: "Alimenty nie prezenty\nOgólnopolski Strajk Kobiet",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "W Polsce ok. 1 miliona dzieci nie dostaje alimentów od swojego rodzica. Spotkanie z autorką zmian legislacyjnych - mec. Danutą Wawrowską.",
    id: "6cfdfe5f-af49-4615-98c7-f460c6aa3b53",
    instances: [
      {
        dateStart: "2024-08-03T12:30:00.000+02:00",
        dateEnd: "2024-08-03T13:30:00.000+02:00",
        id: "369b057d-8334-41ec-a432-2108bc90d489",
      },
    ],
  },
  {
    event:
      "Prawo kanoniczne - śluby, rozwody, apostazja.\nOkręgowa Izba Radców Prawnych w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "W programie warsztatu: jak przeprowadzić procedurę apostazji, jak się rozwieść i wiele innych.",
    id: "74d5fbd3-411b-4d8c-9c04-6768cc79db4f",
    instances: [
      {
        dateStart: "2024-08-03T13:00:00.000+02:00",
        dateEnd: "2024-08-03T13:55:00.000+02:00",
        id: "f38f5496-a84d-4c6d-889d-1ca06cf342ea",
      },
    ],
  },
  {
    event:
      'Debata "Media społecznościowe a wolność wypowiedzi"\nBiuro Rzecznika Praw Obywatelskich',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'Debata "Media społecznościowe a wolność wypowiedzi" – Zapraszamy na panel dyskusyjny poświęcony zagadnieniu praw człowieka w mediach społecznościowych! Środowisko mediów społecznościowych daje złudzenie anonimowości, co sprzyja szerzeniu się na tego typu portalach dezinformacji i mowy nienawiści. W debacie poruszymy skomplikowany problem zależności między wolnością słowa a innymi prawami człowieka, w specyficznym kontekście debaty publicznej toczonej w mediach społecznościowych. Porozmawiamy także o problemach związanych z moderacją treści w tych mediach i odpowiedzialnością  za posty i komentarze.',
    id: "91c51d33-6079-4546-855b-9ce468b46b78",
    instances: [
      {
        dateStart: "2024-08-03T13:00:00.000+02:00",
        dateEnd: "2024-08-03T14:30:00.000+02:00",
        id: "f94adfe8-1aa6-46bc-abe7-18903358f1c0",
      },
    ],
  },
  {
    event:
      "Obywatelskie śledztwo w Internecie\nStowarzyszenie Prokuratorów Lex Super Omnia",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Mało kto zdaje sobie sprawę, jak wielu sprawców przestępstw w Internecie „wpadło” dlatego, że podało o sobie publicznie o jedną informację za dużo: wakacyjne zdjęcie stóp nad basenem, krótki komentarz w grupie absolwentów liceum, lajk pod zdjęciem zadbanego ogródka cioci. Chociaż organy ścigania dysponują zaawansowanymi możliwościami technicznymi i dostępem do mnóstwa chronionych danych, to wiele udanych śledztw i dochodzeń opiera się w całości o „biały wywiad” – pozyskiwanie informacji z powszechnie dostępnych źródeł. W czasie warsztatu będziecie mogli spróbować swoich sił w tej dziedzinie pod okiem prokuratora Macieja Młynarczyka, doświadczonego w ściganiu internetowych hejterów.",
    id: "38936707-136f-4014-a9c8-bb15cd0c6bdd",
    instances: [
      {
        dateStart: "2024-08-03T13:00:00.000+02:00",
        dateEnd: "2024-08-03T14:30:00.000+02:00",
        id: "117a30b6-b91b-4044-9971-3106faf6a690",
      },
    ],
  },
  {
    event:
      "Panel dyskusyjny - Moc Pasji: Wolontariat, który Zmienia Świat\nFundacja Złotowianka",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Angażujesz się w działalność wolontariacką? A może chcesz dowiedzieć się więcej o nowoczesnych i skutecznych formach pomocy innym?\nZapraszamy do dyskusji:\nPoznasz niesamowite opowieści wolontariuszy, którzy zmieniają życie innych swoją pasją i zaangażowaniem.\nOdkryjesz, jak można pomagać innym w dzisiejszych czasach, wykorzystując swoje umiejętności, czas i energię.\nDowiesz się, jak efektywnie angażować się w wolontariat i jakie są najlepsze sposoby, aby Twój wkład był jak najbardziej wartościowy.\nSpotkasz osoby o podobnych wartościach i pasjach, z którymi będziesz mógł wymieniać się doświadczeniami i pomysłami",
    id: "fa8856fe-ddf9-4796-b6bf-034315dca60b",
    instances: [
      {
        dateStart: "2024-08-03T13:00:00.000+02:00",
        dateEnd: "2024-08-03T15:00:00.000+02:00",
        id: "a945c65e-cd7d-47c8-832d-086997b15837",
      },
    ],
  },
  {
    event: "DROGA KOBIET do polityki\nStowarzyszenie Kongres Kobiet",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "dlaczego warto brać udział w wyborach i dlaczego wciąż w\npolityce jest tak mało kobiet – dyskusja na podstawie badań i doświadczeń kobiet startujących w\nwyborach parlamentarnych i samorządowych moderowana przez Joannę Czerską-Thomas, radną m.\nBydgoszcz, Społeczniczkę Roku „Newsweek Polska” 2022.",
    id: "13e9f1bf-ab44-49c7-a364-19bcf09df6af",
    instances: [
      {
        dateStart: "2024-08-03T13:00:00.000+02:00",
        dateEnd: "2024-08-03T14:00:00.000+02:00",
        id: "add35c05-2903-4022-aeb5-af7ada22a05b",
      },
    ],
  },
  {
    event: "Zawody Slackline\nPolish Outdoor Group",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Szukasz wyzwania i chcesz sprawdzić swoje umiejętności na slackline? A może chcesz zobaczyć widowiskowe przejścia na naszej taśmie? Zapraszamy na kolejną edycję zawodów, które rozegramy w na terenie Himalayan Camp. Będzie to idealna okazja, aby spotkać innych miłośników tej ciekawej dyscypliny. Zawody są otwarte dla wszystkich i zostaną poprzedzone wstępną selekcją. Pamiętaj – zabierz ze sobą swoich wiernych fanów! Dla najlepszych zawodników (i kibiców) przewidziane są nagrody i upominki!",
    id: "914da44e-3f61-4f0a-9838-1282f6aebd9a",
    instances: [
      {
        dateStart: "2024-08-03T13:00:00.000+02:00",
        dateEnd: "2024-08-03T15:00:00.000+02:00",
        id: "1fa56500-c6bf-43fc-ae95-475984e67f82",
      },
    ],
  },
  {
    event: "Z pasją przez kryzys depresyjny\nToastmasters",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "65% osób w wieku 13-28 lat deklaruje poczucie samotności (badanie w ramach projektu MindGenic AI – październik 2023). Co by było, gdyby okazało się, że nie trzeba daleko szukać towarzystwa? Może nosisz je w sobie i owa kompanka nazywa się Pasja? Podczas spotkania przyjrzymy się wpływowi zainteresowań na Twój dobrostan psychiczny.\nNatalia Zakolska na co dzień członkini zespołu #MentalPower Jakuba B. Bączka. Lubi zbierać nowe doświadczenia i dzielić się nimi z innymi. Wychodzi z założenia, że każdy człowiek ma w sobie coś z artysty. Nie wierzy w przypadki (chyba, że w gramatyce). Wierzy za to w ludzi pomagając wydobyć z nich potencjał. Wyznaje zasadę „przykład, a nie wykład”. Podobno zaraża uśmiechem, jednak o tym najlepiej można przekonać się spotykając Natalię na żywo!",
    id: "1d3bddfd-f341-431d-9f68-f038052989ed",
    instances: [
      {
        dateStart: "2024-08-03T13:00:00.000+02:00",
        dateEnd: "2024-08-03T14:00:00.000+02:00",
        id: "3b090922-bc19-49a1-97ab-38f7790dd13b",
      },
    ],
  },
  {
    event: 'zabawa połącz w pary\nStowarzyszenie Sędziów Polskich  "Iustitia"',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "autorska zabawa,  w której uczestnikom zostaną rozdane tablice z cytatami znajdujące się na budynku Sądu Najwyższego , każdy z cytatów będzie podzielny na dwie części zadaniem uczestników będzie dobranie się w prawidłowe pary",
    id: "90af01fd-cdfc-471e-bf1d-0767534cedd6",
    instances: [
      {
        dateStart: "2024-08-03T13:00:00.000+02:00",
        dateEnd: "2024-08-03T14:00:00.000+02:00",
        id: "a3006a48-adc1-48d1-9cfb-614eda0d6572",
      },
    ],
  },
  {
    event:
      "Zatańczmy Pol'and'Rockowego Poloneza! (start: pasaż przy Strefie Pomorza Zachodniego)",
    place: "Pomorze Zachodnie",
    kind: "Inne",
    description: "",
    id: "f4c7f313-afe4-4663-a01f-461ad8f8f6a0",
    instances: [
      {
        dateStart: "2024-08-03T13:00:00.000+02:00",
        dateEnd: "2024-08-03T14:00:00.000+02:00",
        id: "5e0c0975-fcaf-4597-b409-3dfb5cdfb819",
      },
    ],
  },
  {
    event:
      "Patenty na festiwalu? NO JASNE!\nPolska izba rzeczników patentowych",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Prawo patentowe to jedna z dziedzin, w której rzecznicy patentowi nie mają sobie równych. No a skoro tak, to dzielimy się wiedzą ze wszystkimi, w których głowach pojawia się pomysł, aby mogli skutecznie chronić swoją kreatywność i pracę PATENTEM NA WYNALAZEK! Doradzamy, kiedy warto przyjść do rzecznika patentowego, na którym etapie warto myśleć o ochronie patentowej, a przede wszystkim rozprawiamy się z mitami - wyjaśniamy czym tak naprawdę jest wynalazek i patent oraz że nie zawsze jest to tym, co nam się wydaje; zrywamy z mitem, że ochrona patentowa jest tylko dla bogatych, a na koniec pokazujemy kilka ciekawych przykładów zabawnych wynalazków, które może nie zrewolucjonizowały świata(?) ale z pewnością znacznie go ubarwiły i np. rozwiązały problem techniczny w postaci braku możliwości stabilnego trzymania piwa bez uronienia cennych kropli i aktywnego tańca na festiwalu ;)",
    id: "2428f765-3d0f-47ec-ae73-2cff0efe4634",
    instances: [
      {
        dateStart: "2024-08-03T13:00:00.000+02:00",
        dateEnd: "2024-08-03T14:00:00.000+02:00",
        id: "60c8ec69-d283-4eda-be76-a53dfb9c696b",
      },
    ],
  },
  {
    event: "Recykling na sportowo\nFundacja RECAL",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Ideą projektu „Sport powszechny przyjazny dla środowiska” (Environmentally sustainable Sport for All – EnvInSport) jest podnoszenie świadomości na temat korzyści płynących z zagadnień zrównoważonego rozwoju w sporcie dla wszystkich. Jej celem jest podejście zrównoważone środowiskowo w działaniach sportowych.",
    id: "952bbed4-a93d-4499-9277-b93092237f3b",
    instances: [
      {
        dateStart: "2024-08-03T13:00:00.000+02:00",
        dateEnd: "2024-08-03T14:00:00.000+02:00",
        id: "38aca60c-f8f8-45ec-a096-771234824fcd",
      },
    ],
  },
  {
    event: "Remigiusz Mróz",
    place: "Duży Namiot ASP",
    kind: "Spotkanie",
    description:
      "Remigiusz Mróz — doktor nauk prawnych, aktywista społeczny i najpopularniejszy polski powieściopisarz ostatnich lat. Jego imię stało się synonimem literackiego mistrzostwa, a jego książki zdobyły serca milionów czytelników nie tylko w Polsce, ale na całym świecie. Remigiusz Mróz jest autorem niezwykle różnorodnych dzieł, od trzymających w napięciu kryminałów po mądrą publicystykę, odważnie podnoszącą społeczne tematy. Teraz będziemy mieli niepowtarzalną szansę poznać go bliżej, zanurzając się w jego fascynującym światku literackich tajemnic.  \n \n  #ASP",
    id: "abc8bd15-7a63-4c75-aa0d-34dadf2c1aaf",
    instances: [
      {
        dateStart: "2024-08-03T13:30:00.000+02:00",
        dateEnd: "2024-08-03T14:50:00.000+02:00",
        id: "042ce7d8-1673-481b-ae3f-574c6008ca68",
      },
    ],
  },
  {
    event:
      "Razem w akcji! Warsztaty integrujące dla dzieci i rodziców\nFundacja Avalon Bezpośrednia Pomoc Niepełnosprawnym",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Warsztaty mają na celu integrację, wzmocnienie i zacieśnianie relacji oraz wspólne spędzanie czasu w kreatywny i angażujący sposób w atmosferze współpracy. Serdecznie zapraszamy wszystkie rodziny do udziału w naszych warsztatach! Razem twórzmy niezapomniane wspomnienia! To będzie prawdziwa zabawa i relaks w przyjaznej, wspierającej atmosferze na stoisku Fundacji Avalon",
    id: "f1eb536f-2b4f-477d-968c-b0cc8831dab4",
    instances: [
      {
        dateStart: "2024-08-03T13:30:00.000+02:00",
        dateEnd: "2024-08-03T15:00:00.000+02:00",
        id: "cc80db1c-357b-4ecf-b3b4-0a69675eee9b",
      },
    ],
  },
  {
    event: "„Obywatelskie śledztwo w Internecie.”\nIzba Adwokacka w Warszawie",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Mało kto zdaje sobie sprawę, jak wielu sprawców przestępstw w Internecie „wpadło” dlatego, że podało o sobie publicznie o jedną informację za dużo: wakacyjne zdjęcie stóp nad basenem, krótki komentarz w grupie absolwentów liceum, lajk pod zdjęciem zadbanego ogródka cioci. Chociaż organy ścigania dysponują zaawansowanymi możliwościami technicznymi i dostępem do mnóstwa chronionych danych, to wiele udanych śledztw i dochodzeń opiera się w całości o „biały wywiad” – pozyskiwanie informacji z powszechnie dostępnych źródeł. W czasie warsztatu będziecie mogli spróbować swoich sił w tej dziedzinie pod okiem prokuratora Macieja Młynarczyka, doświadczonego w ściganiu internetowych hejterów.",
    id: "36134620-a481-41c0-894b-fe40234b1bcb",
    instances: [
      {
        dateStart: "2024-08-03T13:30:00.000+02:00",
        dateEnd: "2024-08-03T14:30:00.000+02:00",
        id: "66a4def9-5f73-4c9f-933d-398bb2bc888a",
      },
    ],
  },
  {
    event:
      "STREFA KOSMICZNA PRACOWNIA - Zaplatanie gwiezdnych łapaczy snów\nCZOK",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "6d961914-2be6-460e-8ab8-a022b272d518",
    instances: [
      {
        dateStart: "2024-08-03T13:30:00.000+02:00",
        dateEnd: "2024-08-03T15:30:00.000+02:00",
        id: "4783efa6-0326-446b-bcd4-e368ff26514b",
      },
    ],
  },
  {
    event:
      "BEZPRZEMOCOWA AKCJA BEZPOŚREDNIA w OBRONIE PRAWA DO ABORCJI\nStowarzyszenie Amnesty International",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy do namiotu Amnesty na spotkanie z aktywistkami Justyną Wydrzyńską i Natalią Broniarczyk, które wzięły sprawy w swoje ręce i pomagają osobom potrzebującym aborcji. Nasze gościnie to bohaterki wieloletniej bezprzemocowej akcji bezpośredniej w obronie prawa do aborcji (ABO NVDA - nonviolent direct action). Opowiedzą nam o tym, jak praktyce zadbać o swoje prawa. Po spotkaniu zapraszamy do dialogu o prawie do aborcji - w kręgach z udziałem aktywistek ADT, będziemy mogły i mogli się podzielić własnymi doświadczeniami i przekonaniami związanymi z aborcją.",
    id: "68159cce-7258-4a88-bd9e-feb27689760b",
    instances: [
      {
        dateStart: "2024-08-03T13:30:00.000+02:00",
        dateEnd: "2024-08-03T15:00:00.000+02:00",
        id: "f167b81f-f911-41dc-9396-f60b249744ae",
      },
    ],
  },
  {
    event:
      "Gdy pęknie rura w mieszkaniu\nOkręgowa Izba Radców Prawnych w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Rzecz o tym jak skutecznie egzekwować swoje prawa lokatorskie, właścicielskie. Jak postępować w kontaktach z ubezpieczycielem.",
    id: "ddb2470f-d3ac-451f-8832-887c6f6382d3",
    instances: [
      {
        dateStart: "2024-08-03T14:00:00.000+02:00",
        dateEnd: "2024-08-03T14:55:00.000+02:00",
        id: "0e0a48f4-f8ef-4cc6-822b-2a08bcdc0237",
      },
    ],
  },
  {
    event: "Moje Drzewo Mocy\nFundacja Feminoteka",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Praca nad własnymi zasobami i potencjałem z wykorzystaniem kart Dixit, medytacji prowadzonej i wizualizacji. Przyglądamy się temu, co nas wzmacnia, co daje motywację i siłę do działania oraz podążania swoją ścieżką. Pracujemy nad budowaniem pewności siebie, sprawczości i stawianiem granic w kontekście zapobiegania przemocy.",
    id: "5b9ec28b-2884-4f2c-b94f-9f8cf8c760d3",
    instances: [
      {
        dateStart: "2024-08-03T14:00:00.000+02:00",
        dateEnd: "2024-08-03T15:30:00.000+02:00",
        id: "98b2ab9a-7d49-4a18-84fb-81519113313e",
      },
    ],
  },
  {
    event: "Herstoria – kobiety i historia\nOgólnopolski Strajk Kobiet",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Kilka słów o (nie)znanych dokonaniach kobiet - Starożytne władczynie i Filozofki min. Atena Barbarzynka - Władczyni Petry, Hypatia, naukoznawczynie nowożytne Rosalind Franklin, Karen Horney - Cecyli Payne Gaposching.\nCo jest tego przyczyną, czyli min o efekcie Matyldy i znaczeniu feminatywów w kształtowaniu rzeczywistości społecznej. \nDobra sztuka sama się obroni? Czyli dlaczego wiele kobiet ominęła kariera artystki.\nPodsumowanie Herstoria - szanse I wyzwania.",
    id: "e66f5c34-fee0-486b-8e25-4471fb579922",
    instances: [
      {
        dateStart: "2024-08-03T14:00:00.000+02:00",
        dateEnd: "2024-08-03T15:00:00.000+02:00",
        id: "c0876dd5-bce5-4f84-a239-7100bc1e4376",
      },
    ],
  },
  {
    event: "14.00-15.00 KOBIETY A POLITYKA.\nStowarzyszenie Kongres Kobiet",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Męska gra i męskie zasady. Kongres Kobiet wprowadził do kodeksu\nwyborczego kwoty, ale nadal polityka to męska gra. Skąd się biorą wyborcze sukcesy mężczyzn i\npolityczna niedoreprezentacja kobiet? Debata z kongresowymi parlamentarzystkami; senatorką\nJoanną Sekułą, posłankami Anitą Kucharską-Dziedzic i Jolantą Niezgodzką oraz Violettą Ratajczak,\nradną Sejmiku.",
    id: "07697264-5655-440d-b528-d1ef060b9e42",
    instances: [
      {
        dateStart: "2024-08-03T14:00:00.000+02:00",
        dateEnd: "2024-08-03T15:00:00.000+02:00",
        id: "b8f0ff37-f234-42c2-99ba-04d57ec0e328",
      },
    ],
  },
  {
    event:
      "Kochanie potrzymaj pieluchę idę robić biznes - jak zmienić ścieżkę kariery gdy zmienia się Twoje życie\nToastmasters",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Osobistą historia Dominiki Karczmarczyk, która dotyczy zmiany jej ścieżki zawodowej po narodzinach dziecka. Był to punkt zwrotny, który skłonił ją do refleksji nad priorytetami i marzeniami. Opowie o wyzwaniach, jak się zmagała, jak stopniowo znajdowała równowagę między życiem rodzinnym a zawodowym. Podzieli się również doświadczeniami z poszukiwania nowej drogi, w której mogłaby realizować się zarówno jako rodzic, jak i kobieta spełniona zawodowo. Jej historia jest dla tych, którzy również stoją przed decyzją o zmianie kariery, pokazując, że z odpowiednim podejściem i determinacją, można znaleźć spełnienie i satysfakcję w nowym, bardziej harmonijnym życiu zawodowym.\nOd 10 lat z pasją zajmuję się rozwojem osobistym. Jest coachem oraz trener biznesu. Założycielka bloga Ocean Możliwości.",
    id: "92d05def-69b0-4625-acb4-2c3ab9228477",
    instances: [
      {
        dateStart: "2024-08-03T14:00:00.000+02:00",
        dateEnd: "2024-08-03T15:00:00.000+02:00",
        id: "76bb3c41-3a8c-49a7-9ba9-d9d26e972ab9",
      },
    ],
  },
  {
    event:
      "STREFA PLANETA WIEDZY - Gdy silna wola jest za słaba. Dlaczego ciężko walczyć z uzależnieniami\nSPSZOP Zdroje",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "e1a8c878-59e4-4042-918f-e88b6fe321a6",
    instances: [
      {
        dateStart: "2024-08-03T14:00:00.000+02:00",
        dateEnd: "2024-08-03T15:00:00.000+02:00",
        id: "af62b816-ba62-48d0-b297-2824c7322cf5",
      },
    ],
  },
  {
    event:
      "STREFA OBSERWATORIUM - Kto choruje na raka jelita grubego? Dieta, ruch i geny - na co mam wpływ\nZCO",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "37401f04-074b-440a-86bf-a5623d99600c",
    instances: [
      {
        dateStart: "2024-08-03T14:00:00.000+02:00",
        dateEnd: "2024-08-03T15:30:00.000+02:00",
        id: "45a7d4ea-02e0-4661-ae46-3eb2863bfc80",
      },
    ],
  },
  {
    event:
      'Dla kogo "trudne zachowania" są trudne? O emocjach i samoregulacji osób w spektrum autyzmu.\nPrzylądek Dobrej Nadziei',
    place: "Namiot Warsztatowy ASP",
    kind: "Warsztat",
    description:
      "Sztywność i intensywne emocje... – dlaczego dzieci krzyczą, płaczą i uderzają siebie lub innych? – jak działać podczas takich momentów? – istota i rola działań regulacyjnych Nie będzie o tym, jak ,,wygaszać’’… Nie będzie o tym, jak ,,zastępować’’… Nie będzie o tym, jak ,, przekierowywać uwagę’’… Będzie o tym jak wspierać. Będzie o tym, jak zadbać o bezpieczeństwo. Będzie trochę o granicach. Będzie o tym co możemy zmienić w sobie. Będzie dużo o emocjach i samoregulacji. Będzie to godzinny warsztat z prostymi ćwiczeniami w grupie oraz szeregiem eksperymentów myślowych, które posłużą nam do szukania rozwiązań i sposobów wspierania osób w spektrum w trudnych dla nich momentach.",
    id: "7d103281-5180-4f3c-930a-e274ec6fea7e",
    instances: [
      {
        dateStart: "2024-08-03T15:00:00.000+02:00",
        dateEnd: "2024-08-03T16:00:00.000+02:00",
        id: "1ccc0010-96d4-460e-b6a1-4ba5e584f891",
      },
    ],
  },
  {
    event:
      "Cyberwyzwania i cyberzagrożenia – jak mądrze korzystać z nowych technologii\nNASK - Państwowy Instytut Badawczy",
    place: "Namiot Warsztatowy ASP",
    kind: "Warsztat",
    description:
      "W sobotę 3 sierpnia o godzinie 15.000 zapraszamy na spotkanie z Radosławem Nielkiem, dyrektorem NASK, który przedstawi największe zagrożenia w cyberprzestrzeni i wytłumaczy, jak się przed nimi bronić. Dyrektor opowie o horyzoncie wyzwań technologicznych, które stoją przed młodym pokoleniem Polaków, pracy w branży ICT oraz o tym jak być odpornym na manipulację i dezinformację w sieci",
    id: "bcbc1a78-f525-450c-b2e9-adf5b988a337",
    instances: [
      {
        dateStart: "2024-08-03T15:00:00.000+02:00",
        dateEnd: "2024-08-03T16:00:00.000+02:00",
        id: "7e9f9db0-f8b6-49ec-aea0-dcefce349178",
      },
    ],
  },
  {
    event: "Krąg społecznościowy o Edukacji\nFundacja Szkoła w Chmurze",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Krąg społecznościowy będący otwartą przestrzenią do dialogu na zaproponowany temat. Osoby uczestniczące w kręgu zostaną zaproszone do refleksji nad alternatywnymi sposobami realizacji obowiązku szkolnego i prawa do nauki, w duchu wolności, różnorodności i w odpowiedzi na indywidualne potrzeby. Krąg jest przestrzenią otwartą dla wszystkich chętnych i chcących zabrać głos osób. Krąg będzie prowadzony przez doświadczoną osobę facylitująca przy udziale wolonatriuszy.",
    id: "ca6051fe-a3fd-4c4e-b00f-9cf40c2fdfd5",
    instances: [
      {
        dateStart: "2024-08-03T15:00:00.000+02:00",
        dateEnd: "2024-08-03T16:30:00.000+02:00",
        id: "b495543e-e2c0-4638-bf7f-a1c6cd985bf9",
      },
    ],
  },
  {
    event:
      "Pierwsza pomoc prawna dla początkujących twórców - jak się zabezpieczyć rozpoczynając działalność artystyczną ?\nOkręgowa Izba Radców Prawnych w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Warsztat o tym, co każdy młody twórca wiedzieć powinien. Jak zabezpieczyć siebie oraz swoją twórczość. Podpowiedzi, wymiana doświadczeń, Q&A.",
    id: "a4fb6012-ca9c-45aa-83e7-1dad57537f65",
    instances: [
      {
        dateStart: "2024-08-03T15:00:00.000+02:00",
        dateEnd: "2024-08-03T15:55:00.000+02:00",
        id: "913d0452-72f6-40f3-b1ab-24cf4d4e0ca3",
      },
    ],
  },
  {
    event: "Jak przemawianie publiczne może zmienić świat?\nToastmasters",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Mówi się, że dobre lub złe rzeczy w historii wydarzyły się bo dobrzy lub źli ludzie dostali prawo do publicznego przemawiania. Chciałabym przedstawić przykłady zmieniających świat przemówień i zwrócić uwagę na ich wartość retoryczną. Przemawianie to silne i efektywne narzędzie do zmieniania świata wokół nas i nośnik wartościowych idei. Każdy z nas ma do niego dostęp, trzeba tylko wiedzieć jak i kiedy go użyć.\nAnna Wasilewska filolog i psycholog z wykształcenia, lektorka i trenerka z zawodu, mówczyni i aktorka-amatorka z pasji, pasjonatka języków i wielojęzyczności, mama 2 dzieci bo których nigdy nie powiedziała słowa po polsku. Była stewardessa. Od 5 lat aktywna Toastmasterka i finalistka wielu konkursów przemówień",
    id: "71e29756-b80f-455e-9265-3059a8216fed",
    instances: [
      {
        dateStart: "2024-08-03T15:00:00.000+02:00",
        dateEnd: "2024-08-03T16:00:00.000+02:00",
        id: "6f140b09-df6f-431e-b54f-1dce621fccdc",
      },
    ],
  },
  {
    event:
      "STREFA PLANETA WIEDZY - Zdrowie psychiczne naszych pociech w centrum uwagi\nSPSZOP Zdroje",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "4b8c1994-8235-4046-85e7-efecefc44def",
    instances: [
      {
        dateStart: "2024-08-03T15:00:00.000+02:00",
        dateEnd: "2024-08-03T16:00:00.000+02:00",
        id: "8040e1c7-ec5f-428d-8d8b-f41ebcd3caa0",
      },
    ],
  },
  {
    event:
      "Debata „Służba wojskowa w razie zarządzenia mobilizacji”\nBiuro Rzecznika Praw Obywatelskich",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Debata „Służba wojskowa w razie zarządzenia mobilizacji” – debata o przesłankach zarządzenia mobilizacji, kto jej podlega i na jakich zasadach, jakie są skutki mobilizacji dla zwykłego obywatela, o ochotniczej służbie wojskowej i służbie wojskowej kobiet – żyjemy w niespokojnych czasach i to są tematy, o których warto rozmawiać i zadać pytania specjalnym gościom naszej debaty.\nModeracja: Tomasz Oklejak",
    id: "13a721e7-8e44-4132-93a7-bfe6188810ea",
    instances: [
      {
        dateStart: "2024-08-03T15:30:00.000+02:00",
        dateEnd: "2024-08-03T17:30:00.000+02:00",
        id: "576106ba-ecef-44e7-96af-461e56e3e14b",
      },
    ],
  },
  {
    event:
      "STREFA OBSERWATORIUM - Ile gwiazd w kosmosie, tyle różnych aromatów kawy!\nA. Małachowski Qualia Caffe",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "707d8bce-1591-44f2-aaec-694cd46f9863",
    instances: [
      {
        dateStart: "2024-08-03T15:30:00.000+02:00",
        dateEnd: "2024-08-03T16:30:00.000+02:00",
        id: "4a03b646-6286-4075-9800-b7834e6040e8",
      },
    ],
  },
  {
    event:
      'Sportowa Olimpiada Sądowa\nStowarzyszenie Sędziów Polskich  "Iustitia"',
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      'zabawa wymagająca wiedzy i umiejętności w trakcie,  której będzie można się sprawdzić w typowych czynnościach sądowych , dla trzech najlepszych osób przewidziano nagrody, dla zwycięzcy puchar i uścisk "ręki prezesa" ;) . \nWśród konkurencji taki zdania jak nieomylne  czytanie  wyroków  czy szycie akt,.....zapraszamy do wspólnej zabawy. \nCałość zostanie zakończona wręczeniem nagród i wspólnym pamiątkowym zdjęciem!',
    id: "3e5deb0d-34a3-40fe-ab10-d3da2059835b",
    instances: [
      {
        dateStart: "2024-08-03T15:30:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "d67d1a8f-555e-46c1-8cc4-def7c422c652",
      },
    ],
  },
  {
    event:
      "Demoscena, czyli sztuka według hakerów\nFUNDACJA HACKERSPACE KRAKÓW",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "W trakcie tego pokazu dowiecie się, czym jest demoscena: najbardziej hakerska ze wszystkich dziedzin sztuki, która od samego początku jest mocno związana ze starymi komputerami, a początek dało jej komputerowe piractwo, jeszcze przed czasami powszechnego dostępu do internetu. Poznacie, jaka jest jej geneza, jakie rządzą nią reguły, oraz zobaczycie kilka sztandarowych produkcji, wraz ciekawostkami na temat ich powstania.",
    id: "c2757867-234d-4cc1-9dfb-446aafad5c30",
    instances: [
      {
        dateStart: "2024-08-03T16:00:00.000+02:00",
        dateEnd: "2024-08-03T17:30:00.000+02:00",
        id: "87b632da-d5c0-4903-a7aa-e5c2cbc05d7f",
      },
    ],
  },
  {
    event:
      "STREFA KOSMICZNA PRACOWNIA - Warsztaty lawendowe - mydełka\nBarbara Opar",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "4f2119ad-ea0b-4864-9180-1c2675af4de9",
    instances: [
      {
        dateStart: "2024-08-03T16:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "de990003-f3ad-4de3-8b9e-47a0e671ed63",
      },
    ],
  },
  {
    event:
      "Z Tobą na chacie\nOkręgowa Izba Radców Prawnych w Poznaniu i Izba Notarialna w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Warsztat o tym: jak bezpiecznie wynająć pierwsze mieszkanie? Do czego lokator ma prawo? Jakie obowiązki spoczywają ma właścicielu mieszkania ?  Kto odpowiada za powstałe długi w trakcie wynajmu, co to jest najem okazjonalny, co to jest najem instytucjonalny ?",
    id: "d9088458-f2de-404d-965a-8bcc5e29277b",
    instances: [
      {
        dateStart: "2024-08-03T16:00:00.000+02:00",
        dateEnd: "2024-08-03T16:55:00.000+02:00",
        id: "a6b07c05-4598-47ac-a515-87ce13d68398",
      },
    ],
  },
  {
    event: "Debata cyberprzemoc\nFundacja Feminoteka",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Jakie zagrożenia niesie ze sobą cyberprzemoc? Naucz się rozpoznawać różne rodzaje cyberprzemocy i zdobądź wiedzę o tym, jak się przed nią chronić (podstawy cyberbezpieczeństwa).",
    id: "97aa06b8-5933-4b97-8357-cd2883c313b1",
    instances: [
      {
        dateStart: "2024-08-03T16:00:00.000+02:00",
        dateEnd: "2024-08-03T17:30:00.000+02:00",
        id: "a881670e-3425-4b9a-a0d3-6def1458f6e5",
      },
    ],
  },
  {
    event: "Zawody Table boulder’owe\nPolish Outdoor Group",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "To chyba najbardziej pojechane zawody wspinaczkowe, które co roku przyciągają do naszej wioski grono zapaleńców boulderowych! Zawody table boulderowe są konkurencją, która polega na przejściu krótkich tras (tzw. boulderów) umieszczonych na ...stole. Zawodnicy starają się pokonać trasę, rozpoczynając w pozycji siedzącej. W tej konkurencji nie używa się liny, trasy są krótkie, ale wymagające od zawodników siły, zręczności i techniki. Zawody zostaną poprzedzone wstępną selekcją. Pamiętajcie, aby przybywać ze swoimi fanami! Dla najlepszych zawodników (i kibiców) - jak zawsze - nagrody i upominki ;)",
    id: "1ecee766-dc05-4c8f-a23e-f0015b59f7b4",
    instances: [
      {
        dateStart: "2024-08-03T16:00:00.000+02:00",
        dateEnd: "2024-08-03T19:00:00.000+02:00",
        id: "31c6cf47-79c9-49fa-8a33-0e54ba942fa4",
      },
    ],
  },
  {
    event:
      "Kreatywna inkluzja – warsztaty malowania koszulek\nFundacja Avalon Bezpośrednia Pomoc Niepełnosprawnym",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy wszystkich na wyjątkowe warsztaty z malowania koszulek z inkluzywnymi hasłami. Te interaktywne zajęcia są idealne dla osób w każdym wieku, które chcą wyrazić swoje wartości i wsparcie dla różnorodności, równości i integracji poprzez twórczość artystyczną. To doskonała okazja, aby spędzić czas w twórczej i przyjaznej atmosferze, a jednocześnie przyczynić się do promowania wartości, które są nam bliskie. Na stoisku Fundacji Avalon chcemy stworzyć przestrzeń, gdzie każdy w bezpieczny sposób będzie mógł wyrazić swoje przekonania i uczucia za pomocą kreatywności.",
    id: "518d9678-22c0-474d-bc60-375c66bee3b0",
    instances: [
      {
        dateStart: "2024-08-03T16:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "e320306e-8a9a-453c-b5f2-463c89267d12",
      },
    ],
  },
  {
    event:
      "Handel ludźmi - filmowa fikcja czy realne zagrożenie?\nStowarzyszenie Bez mizoginii, wyzysku, przemocy",
    place: "Namiot Warsztatowy ASP",
    kind: "Warsztat",
    description:
      "Handel ludźmi to ogromne i wciąż aktualne zjawisko, które w dużej mierze dotyka młode kobiety, wykorzystywane między innymi poprzez zmuszanie ich do prostytucji. O tym, jak wygląda proces handlu ludźmi i rzeczywistość seksbiznesu opowiedzą reprezentantki Fundacji Czas Wolności oraz Stowarzyszenia Bez. Przyjrzymy się temu, jak ukształtowane jest prawo dotyczące handlu ludźmi i sutenerstwa, w jakich krajach narażenie na bycie wykorzystanym jest największe, opowiemy o taktykach manipulacyjnych sprawców i uczulimy na to, jak można się przed nim uchronić oraz zastanowimy się, jaką rolę pełni w tym wszystkim stosunek do seksbiznesu i prawo go określające. Wierzymy, że dzięki świadomości problemu i funkcjonowania całego zjawiska możemy w jakimś stopniu uchronić przed nim siebie i naszych bliskich. Zapraszamy Was serdecznie do udziału w spotkaniu - przyjdźcie, posłuchajcie, podyskutujcie z nami!",
    id: "e0cbcafb-49a3-4a9b-b202-ee4ef3f62e94",
    instances: [
      {
        dateStart: "2024-08-03T16:00:00.000+02:00",
        dateEnd: "2024-08-03T17:00:00.000+02:00",
        id: "a0cf19a4-065f-4669-84ee-de3dae37b61f",
      },
    ],
  },
  {
    event: "Wielkie zdjęcie Toastmastrsów i sympatyków\nToastmasters",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zdjęcie Obecnych byłych członków Toastmasters oraz sympatyków na PolandRock Festiwal. Taka chwila dla Fotoreportera. W namiocie również dalsza część spotkania. Integracja, rozmowy i dyskusje o Toastmasters i wspomnienia starych czasów",
    id: "d75172a6-b0b9-464d-8aec-b02b2cdda77b",
    instances: [
      {
        dateStart: "2024-08-03T16:00:00.000+02:00",
        dateEnd: "2024-08-03T17:00:00.000+02:00",
        id: "c0be6b0b-0e76-43d5-ade6-278151946889",
      },
    ],
  },
  {
    event:
      "STREFA PLANETA WIEDZY - Jak będąc młodym dostrzegać problemy starszych\nSPSZOP Zdroje",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "c66c568a-ca99-4e49-a58f-acaec258b585",
    instances: [
      {
        dateStart: "2024-08-03T16:00:00.000+02:00",
        dateEnd: "2024-08-03T17:00:00.000+02:00",
        id: "fad8ad9a-8eb0-49b5-8f12-0b23b7f387dc",
      },
    ],
  },
  {
    event:
      "Gra memory\nUniwersyetet Artystyczny im. Magdaleny Abakanowicz w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Podczas warsztatów uczestnicy tworzą wspólnie unikalną grę memory za pomocą kwadratów z białych kartek. Malowanie, kolorowanie i ozdabianie kart jest według własnego pomysłu. Zachęcamy również do używania różnych technik. Karty mogą zostać stworzone za pomocą różnych tekstur lub materiałów (np. tkaniny, folie) dla urozmaicenia gry. Warsztaty artystyczne związane z tworzeniem gry memory to doskonały sposób na rozwijanie kreatywności oraz umiejętności manualnych, a także na integrację i wspólną zabawę.",
    id: "35685a24-531d-407f-a685-064ee6513eea",
    instances: [
      {
        dateStart: "2024-08-03T16:00:00.000+02:00",
        dateEnd: "2024-08-03T18:30:00.000+02:00",
        id: "2c1ec071-6ad2-472d-af0a-231b1c0d81a6",
      },
    ],
  },
  {
    event:
      "STREFA KOSMICZNA PRACOWNIA - Warsztaty lawendowe - olejowe perfumy\nBarbara Opar",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "aed34c80-fcca-4724-bda8-7ed89b1fed44",
    instances: [
      {
        dateStart: "2024-08-03T16:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "943dde2c-52eb-41c1-b069-a38405700496",
      },
    ],
  },
  {
    event: "STREFA OBSERWATORIUM - Cosmos school\nMłodzieżowy Sejmik WZP",
    place: "Pomorze Zachodnie",
    kind: "Warsztat",
    description: "",
    id: "0ed7949e-20f1-416c-976e-773fb4504462",
    instances: [
      {
        dateStart: "2024-08-03T16:30:00.000+02:00",
        dateEnd: "2024-08-03T17:30:00.000+02:00",
        id: "5c0140f4-4e40-4498-af40-62515c13d096",
      },
    ],
  },
  {
    event: "Paktofonika Live Band",
    place: "Duża Scena",
    kind: "Koncert",
    description:
      "Fokus i Rahim to raperzy doskonale znani polskiej publiczności oraz scenie hip-hopowej. Do 2003 roku współtworzyli legendarny skład Paktofonika, który po śmierci Magika zakończył swoją działalność. Wspólnie podjęli decyzję o kontynuacji przygody z rapem i w 2003 roku stworzyli Pokahontaz. Obu raperów cechuje dość ciekawe postrzeganie świata, które od zawsze przenoszą na kartki papieru, a następnie do studia, dając swoim fanom nietuzinkowe albumy. Na 30. Pol'and'Rock Festival spotkamy się z nimi jako Paktofonika Live Band, co zwiastuje sentymentalną podróż do największych utworów artystów w całkiem nowych aranżacjach, wykonanych wspólnie z rozbudowanym zespołem muzyków.  \n \n  #hip-hop",
    id: "22ae1738-295c-44b5-9060-4c1fedda9534",
    instances: [
      {
        dateStart: "2024-08-03T16:30:00.000+02:00",
        dateEnd: "2024-08-03T17:40:00.000+02:00",
        id: "b4076d72-99a8-4633-9e63-0e69c12e375b",
      },
    ],
  },
  {
    event:
      "Rozwój AI - szansa czy zagrożenie? Warsztat z udziałem Prezesa UODO\nOkręgowa Izba Radców Prawnych w Poznaniu",
    place: "Namiot Warsztatowy ASP",
    kind: "Warsztat",
    description:
      "Z uwagi na bardzo szybki rozwój sztucznej inteligencji chcemy porozmawiać z zaproszonymi gośćmi oraz widownią na tematy:\n\n1. Jak AI ingeruje w naszą prywatność.\n\n2. Dźwięki i obrazy „deepfake” i wynikające z nich okoliczności prawne.\n\n3. Modele treningowe AI a prawo do prywatności. Czy przed AI można się obrobić?\n\n4. Dezinformacja. „Halucynacje” modelu językowego.\n\n5. Omówienie sprawa aktualnie prowadzonej przez Prezesa UODO przeciwko OpenAI.\n\n6. Połączenie „na żywo” z ChatGPT 4-omni. Sesja pytań przygotowanych przez autorów warsztatu i pytania „z sali”. Przykłady do późniejszej dyskusji.\n\n7. Dyskusja – Czy należałoby wprowadzić globalne regulacje prawne ograniczające rozwój AI i dostęp AI do danych treningowych?",
    id: "56425f0d-7c9c-4909-b807-185c1f3b7133",
    instances: [
      {
        dateStart: "2024-08-03T17:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "1da6cfb3-4267-4b5c-94f0-82341fdd8f1c",
      },
    ],
  },
  {
    event: "Od marzenia do mistrzostwa\nToastmasters",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Marzyłem, żeby robić w życiu to co kocham. Żeby kiedyś mieszkać w wielkim mieście. Żeby zamieszkać przy lesie, żeby móc rano przed pracą biegać z psem po lesie pachnącym deszczem. Żebym został ojcem wtedy, kiedy będę na to gotowy, a nie wtedy kiedy wszyscy mówią mi kiedy mam to zrobić. Żeby mieć cywilną odwagę nie klękać przed ludźmi, którzy na to nie zasługują. Żeby w życiu realizować najbardziej szalone marzenia nie poświęcając swoich bliskich. Jeśli interesuje Cię tematyka skutecznego, metodycznego, systemowego podejścia do realizacji marzeń, zajrzyj do mnie. Nazywam się Piotr Rudzki. \nPasjonat i praktyk wystąpień publicznych, aktualnie Mistrz Polski Wystąpień Publicznych 2023. Lektor, mówca i trener wystąpień publicznych.",
    id: "f64df306-1cd0-4fbf-9d7d-ed6d2a0e8fb9",
    instances: [
      {
        dateStart: "2024-08-03T17:00:00.000+02:00",
        dateEnd: "2024-08-03T18:00:00.000+02:00",
        id: "59f92567-d162-4d1f-8db7-e54c2f1032ce",
      },
    ],
  },
  {
    event:
      "Gra we flagówkę: Ekscytujący futbol amerykański w bezpiecznej formie!\nStowarzyszenie Kobiecej Drużyny Futbolu Amerykańskiego - Klub Sportowy Warsaw Sirens",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Zapraszamy serdecznie każdą kobietę, faceta, dziewczynę, czy chłopaka do wspólnej gry we flagówkę! Na wstępie szybko wytłumaczymy zasady gry i zagramy w formule 5 na 5. Flagówka jest bezkontaktową formą futbolu amerykańskiego, w której każdy zawodnik dostaje pasek z dwiema flagami wiszącymi na biodrach, których zerwanie jest jednoznaczne z powaleniem zawodnika na ziemi. Większość zasad pozostaje jednak podobna! Flagówka od tego roku będzie sportem Olimpijskim, co czyni tę formę gry jeszcze bardziej ekscytującą. Niezależnie od Twojej płci, wieku czy doświadczenia sportowego, ta gra jest dla Ciebie. Dołącz do naszej społeczności i odkryj radość oraz emocje towarzyszące flagówce. Musisz spróbować!",
    id: "f5befcd9-936c-414a-b321-56085f04700b",
    instances: [
      {
        dateStart: "2024-08-03T17:00:00.000+02:00",
        dateEnd: "2024-08-03T18:30:00.000+02:00",
        id: "86e4442e-7b78-47c5-847d-876cb78210fa",
      },
    ],
  },
  {
    event:
      "Quiz z wiedzy o festiwalu Pol’and’Rock\nStowarzyszenie Otwarte Klatki",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "Quiz z wiedzy o festiwalu Pol’and’Rock. Na zwycięzców czekają nagrody!",
    id: "7fe22ca2-ad10-4c04-a483-11d71e92500c",
    instances: [
      {
        dateStart: "2024-08-03T17:30:00.000+02:00",
        dateEnd: "2024-08-03T18:30:00.000+02:00",
        id: "e9d19388-36e4-442d-9f27-70e3a9000392",
      },
    ],
  },
  {
    event: "Stacja B.",
    place: "Mała Scena",
    kind: "Koncert",
    description:
      "Zespół Stacja B. powstał w 2015 roku z inicjatywy gitarzysty Marka Babiarza i wokalisty Michała Śmierciaka podczas koncertu z serii „Ustrzycka Scena Alternatywna” odbywającego się wówczas w ustrzyckiej knajpie „Młyn”. Od tamtej chwili skład zespołu zmienił się jedynie o perkusistę. Nie grają muzyki, która będzie kolejnym trofeum w dorobku gatunku punk. Znają jej fundamenty, ale nigdy nie będą się do nich ograniczać ani na nich poprzestawać. Już dzisiaj wiedzą, że kształtują styl muzyki, jakiego w Polsce sami nie widzieli i z przejrzystością tafli wody pokazują swoje spojrzenie na wcześniej wspomniany punk rock, który w ich wykonaniu ma na celu jedno — zbierać żniwo w postaci energii na zasadach wymiany energii z publiką!  \n \n  #punk rock",
    id: "89bdb6b2-18d7-4300-83d7-11e84004eb11",
    instances: [
      {
        dateStart: "2024-08-03T17:45:00.000+02:00",
        dateEnd: "2024-08-03T18:25:00.000+02:00",
        id: "9503d740-aa7f-4e93-8276-479294ef735b",
      },
    ],
  },
  {
    event:
      "Toastmasters- byłem, jestem, będę- 7 minutowe przemówienia spontaniczne\nToastmasters",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "7 minutowe, spontaniczne realizowane przez byłych i obecnych członków Toastmasters z tych kto chce przedstawić przemówienie z już przedstawionych na konkursach, spotkaniach Toastmasters. Oraz info co każdy może nauczyć się, rozwinie dzięki Toastmasters, kto jest lub chce być liderem(-ką), przywódcą(-czynią), kierownikiem(-czką), matką, ojcem, przyjacielem(-ką). I co daje dodatkowo bycie wśród pozytywnie zakręconych ludzi.",
    id: "42b5c943-84d2-49a5-bcf3-ddd6123d1e2e",
    instances: [
      {
        dateStart: "2024-08-03T18:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "661b7433-7688-4787-ad27-d87113715465",
      },
    ],
  },
  {
    event:
      "Sygnalista czy donosiciel\nOkręgowa Izba Radców Prawnych w Poznaniu",
    place: "Strefa Warsztatów ASP",
    kind: "Warsztat",
    description:
      "W trakcie warsztatu prowadzący wyjaśnią kim jest sygnalista i w\njakich sprawach może on zabrać głos. Czy bycie sygnalistą to ładniejsze,\nnowsze określenie na donosiciela ? Omówienie regulacji prawnych dotyczących sygnalistów oraz ich ochrona w firmie.",
    id: "6a868b31-54fd-401c-aacb-8e1e75515f16",
    instances: [
      {
        dateStart: "2024-08-03T18:00:00.000+02:00",
        dateEnd: "2024-08-03T18:45:00.000+02:00",
        id: "d7b42d5d-d58e-43d5-9478-1db4276133f9",
      },
    ],
  },
  {
    event: "Flogging Molly",
    place: "Duża Scena",
    kind: "Koncert",
    description:
      "Po dziesięciu latach od ich poprzedniego, niezapomnianego występu, Flogging Molly, amerykańska ikona celtycko-punkowego brzmienia, powraca na Dużą Scenę Najpiękniejszego Festiwalu Świata! Ich muzyka, pełna pasji, mocy i melodyjnych ballad, każdorazowo podbija serca publiki! Flogging Molly, to zespół znany ze swojej energetycznej mieszanki irlandzkich dźwięków z punkową zadziornością, jest prawdziwym fenomenem muzycznym!   \n \n  #punk  \n  \n  #folk",
    id: "9ce5e577-60f7-40e5-acfa-19d2b09f4992",
    instances: [
      {
        dateStart: "2024-08-03T18:00:00.000+02:00",
        dateEnd: "2024-08-03T19:10:00.000+02:00",
        id: "52836c5b-0000-40ed-9b28-65c15cfc3bfc",
      },
    ],
  },
  {
    event: "Ich Troje",
    place: "Mała Scena",
    kind: "Koncert",
    description:
      "Ich Troje, powstały w 1995 roku w Łodzi, jest jednym z najbardziej rozpoznawalnych zespołów na polskiej scenie muzycznej. Kapela zdobyła serca fanów i osiągnęła szczyty popularności dzięki takim hitom jak „Powiedz” i „Zawsze z Tobą chciałbym być…”, które do dziś są śpiewane przez kolejne pokolenia Polaków. Do tej pory nagrali 10 albumów studyjnych, a ich piosenki stały się ponadczasowymi przebojami. Zespół śpiewa głównie po polsku, choć w przeszłości tworzył również m.in. w językach: angielskim, niemieckim, hiszpańskim, rosyjskim, włoskim i francuskim. Ich muzyka łączy w sobie elementy popu, rocka i dance, a charyzmatyczne występy, słynące z rozmachu i teatralnych elementów, na długo zapadają w pamięć.  \n \n  #pop rock",
    id: "5288ef12-245f-4bc8-94d5-bdbdd3c131d5",
    instances: [
      {
        dateStart: "2024-08-03T18:40:00.000+02:00",
        dateEnd: "2024-08-03T19:40:00.000+02:00",
        id: "8c1f9c75-9942-49c1-bec3-e34a4171aaf7",
      },
    ],
  },
  {
    event:
      "ZDRADA - czym jest dla Ciebie?\nPikantna Edukacja - Monika Gałuszkiewicz",
    place: "Namiot Warsztatowy ASP",
    kind: "Warsztat",
    description:
      'Podyskutujemy sobie o zdradzie. \nRazem zbudujemy listę czym jest zdrada, a czym nie jest. \nBardzo często nie wiemy jak porozmawiać o pornografii i masturbacji - dla części osób jest to zdrada, a dla części nie. Jak dojść do porozumienia?\nGdzie w internecie postawić granicę, bo jeżeli ustalimy, że pornografia oki! To czy kupowanie zdjęć w sieci jest oki? A kamerki na żywo?\nPorozmawiamy o tym, że nie zawsze winna jest tylko jedna osoba - tu może być gorąca dyskusja.\nDowiecie się jak zdrada niszczy ludzi, co robi ze zdradzoną osobą.\nPorozmawiamy o zabezpieczeniach przed zdradą. Dowiecie się też, że czasem paradoksalnie zdrada może uratować relację?\nDotkniemy też zazdrości i kontroli.\nJeżeli o tym się nie rozmawia, to dochodzi do ranienia ukochanej osoby, czasem niezamierzonego i nieświadomego. Pokażę wam jak nieoczywista jest zdrad, bo wychowujemy się dziś w różnych domach i różnych kulturach i mamy różne definicje. W relacji chodzi o to, by "para" razem stworzyła swoją własną definicję.\nZapraszam do dyskusji.',
    id: "b36103e9-fa07-4257-bbc8-9e82321e2544",
    instances: [
      {
        dateStart: "2024-08-03T19:00:00.000+02:00",
        dateEnd: "2024-08-03T20:00:00.000+02:00",
        id: "8fbc896e-ec8a-4dac-8a6c-2a1c59d15470",
      },
    ],
  },
  {
    event: "T.LOVE",
    place: "Duża Scena",
    kind: "Koncert",
    description:
      "T.Love wracają po 10 latach na Dużą Scenę! To nie tylko ikona polskiego rocka, to także zespół, który od lat inspiruje i porusza serca kolejnych pokoleń słuchaczy. Założony w 1982 roku w Częstochowie, zespół przez lata ewoluował, eksperymentując z różnymi gatunkami muzycznymi, począwszy od surowego punk rocka po radosne rytmy reggae. Ich uniwersalne brzmienie oraz teksty pełne emocji i spostrzeżeń społecznych sprawiły, że stali się jednym z najważniejszych głosów w polskiej muzyce.   \n \n  #rock",
    id: "1721423f-2ca4-4a26-bb50-1bf951efcd6f",
    instances: [
      {
        dateStart: "2024-08-03T19:30:00.000+02:00",
        dateEnd: "2024-08-03T20:40:00.000+02:00",
        id: "0d0b9e2d-c1ca-4f5a-a668-d08c6430068e",
      },
    ],
  },
  {
    event: "Szeptucha",
    place: "Mała Scena",
    kind: "Koncert",
    description:
      "Szeptucha - zespół łączący klasyczną nutę folkową z elektroniczno-rockowym brzmieniem i charyzmatycznym, damskim wokalem. Białostoccy muzycy nie zamykają się w żadnych muzycznych ramach. Echa starych tradycji przeplatają się z nowoczesnymi brzmieniami, które w połączeniu niebanalną acz przystępną warstwą tekstową tworzą niezwykle magiczną i energetyczną całość. Utwór „Szeptanica”, tuż po premierze znalazł się na listach przebojów rozgłośni radiowych w kraju i na świecie, plasując się na wysokich miejscach tabeli.  Muzyka to dla nich przede wszystkim zabawa i radość jej tworzenia.   \n \n  #rock  \n  \n  #folk",
    id: "8f296339-2aa6-4297-b6ad-5b881ad3467d",
    instances: [
      {
        dateStart: "2024-08-03T19:55:00.000+02:00",
        dateEnd: "2024-08-03T20:40:00.000+02:00",
        id: "2de17e90-235b-4666-a9f7-011832a8e711",
      },
    ],
  },
  {
    event: "NiNi",
    place: "Mała Scena",
    kind: "Koncert",
    description:
      "Nini - tegoroczna laureatka Eliminacji zagranicznych zespołów - jest folk-metalową kompozytorką, piosenkarką i multiinstrumentalistką z Tajwanu. W swojej muzyce łączy dźwięki starożytnych azjatyckich instrumentów, takich jak sanxian, ruan i liuqin z nowoczesnymi elementami współczesnego rocka, metalu i EDM. Wynikiem tej fuzji są potężne, emocjonalne i dynamiczne utwory, które opowiadają fascynujące historie tajwańskich legend ludowych. Przygotujcie się na elektryzującą podróż w serce azjatyckiego dziedzictwa muzycznego.  \n \n  #rock  \n  \n  #folk",
    id: "deda97b9-63f4-4751-ac44-3300c8f77253",
    instances: [
      {
        dateStart: "2024-08-03T20:55:00.000+02:00",
        dateEnd: "2024-08-03T21:45:00.000+02:00",
        id: "88b77610-7d73-490d-ac8d-9941837186ee",
      },
    ],
  },
  {
    event: "MEUTE",
    place: "Duża Scena",
    kind: "Koncert",
    description:
      "MEUTE to grupa jedenastu utalentowanych muzyków z Hamburga, którzy przełamują wszystkie reguły, łącząc brzmienie tradycyjnych instrumentów dętych z pulsującymi rytmami techno. Ich improwizowane występy uliczne przyciągają miliony widzów na całym świecie. Techno Marching Band, jak sami się nazywają, mają na koncie 4 albumy studyjne, a ich niepowtarzalne występy uliczne, które regularnie zdobywają miliony wyświetleń w sieci, pokazują, że energia i pasja, które emanują podczas grania, potrafią poruszyć nawet największe tłumy. Od Hamburga po Nowy Jork, zespół w swoich charakterystycznych czerwonych marynarkach przekonuje słuchaczy do magii muzyki elektronicznej robionej w stylu DIY.  \n \n  #muzyka elektroniczna  \n  \n  #world music",
    id: "d3a2a8eb-8340-480e-8e51-f7afd11226b9",
    instances: [
      {
        dateStart: "2024-08-03T21:00:00.000+02:00",
        dateEnd: "2024-08-03T22:10:00.000+02:00",
        id: "80b5421a-ab27-48fc-996c-515060417777",
      },
    ],
  },
  {
    event: "Mr Zoob",
    place: "Mała Scena",
    kind: "Koncert",
    description:
      "Mr Zoob - jedna z najbardziej ikonicznych formacji sceny alternatywnej w Polsce. Założona w 1983 roku w Koszalinie grupa zyskała rozgłos dzięki swojemu niezwykłemu połączeniu rocka, ska i reggae, które nadają ich muzyce charakterystyczny, rozpoznawalny styl. Zespół słynie z takich przebojów jak „Kartka dla Waldka” i „Mój jest ten kawałek podłogi”, które stały się klasykami polskiej muzyki rockowej.  \n \n  #reggae  \n  \n  #ska",
    id: "0d7941ae-d59c-4f32-b1aa-b94875ba4c1c",
    instances: [
      {
        dateStart: "2024-08-03T22:00:00.000+02:00",
        dateEnd: "2024-08-03T23:00:00.000+02:00",
        id: "b46d70df-cd63-4d2f-9994-d8e2f19daffa",
      },
    ],
  },
  {
    event: "Michael Patrick Kelly",
    place: "Duża Scena",
    kind: "Koncert",
    description:
      "Michael Patrick Kelly, znany z takich hitów jak „Beautiful Madness”, „Throwback” i „Blurry Eyes” jest twórcą, który w swojej sztuce doskonale potrafi balansować między artystyczną integralnością, emocjonalnym przesłaniem i pop-rockowymi zabiegami produkcyjnymi. Jego kariera, która zaczęła się od kultowego kolektywu rodzinnego The Kelly Family, obejmuje sprzedaż ponad 20 milionów płyt oraz współpracę z artystami z różnych gatunków muzycznych. Działalność artystyczna M.P Kelly'ego jest dowodem zarówno niezwykłej muzycznej wszechstronności, jak i zaangażowania w aktywizm społeczny.   \n \n  #pop rock",
    id: "bc5db58c-22ef-4ce7-b0d0-9405cc3f151d",
    instances: [
      {
        dateStart: "2024-08-03T22:30:00.000+02:00",
        dateEnd: "2024-08-03T23:40:00.000+02:00",
        id: "d61d5146-3f10-4c28-b00b-9fc63d1e060d",
      },
    ],
  },
  {
    event: "The Bill",
    place: "Mała Scena",
    kind: "Koncert",
    description:
      "The Bill - jedna z największych ikon polskiej sceny punkowej powstali w 1986 roku w Pionkach, z inicjatywy Dariusza „Kefira” Śmietanki oraz Dariusza „Skóry” Stawskiego. Już od pierwszych lat działalności, grupa zyskała uznanie na lokalnych scenach, pomimo częstych zmian składu. Przełomem stał się udział w legendarnym festiwalu Jarocin '92, podczas którego kapela zdobyła nagrodę publiczności. To wydarzenie otworzyło nowy rozdział w zarówno w historii samego zespołu jak i historii polskiego punka. Ich najnowszy album „The Kada” jest dziesiątym w dorobku zespołu i powstał po dziesięciu latach fonograficznej ciszy. To kolejny w wykonaniu kultowej formacji prawdziwy powrót do korzeni polskiego punk rocka!  \n \n  #punk",
    id: "7154e06d-9c9e-466b-a4f4-2a29875b0185",
    instances: [
      {
        dateStart: "2024-08-03T23:15:00.000+02:00",
        dateEnd: "2024-08-04T00:15:00.000+02:00",
        id: "94363783-a0a5-4d97-97d3-e7fb3ed33e9f",
      },
    ],
  },
  {
    event: "Guano Apes",
    place: "Duża Scena",
    kind: "Koncert",
    description:
      'Guano Apes — legendarne rockowe brzmienie, niezapomniane przeboje i niesamowita energia powracają po 15 latach na Dużą Scenę Najpiękniejszego Festiwalu Świata! Kwartet składający się z wokalistki Sandry Nasic, gitarzysty Henninga Rümenappa, basisty Stefana Ude oraz perkusisty Dennisa Poschwatty, szybko zdobył serca fanów swoim oryginalnym brzmieniem łączącym metal, pop i rap. Ich debiutancki singiel "Open Your Eyes" stał się hitem Top Ten w Niemczech i utrzymał się na liście Top 100 przez imponujące 30 tygodni.  \n \n  #rock',
    id: "a6a3cc27-8251-47b4-9994-3e8978f4f23a",
    instances: [
      {
        dateStart: "2024-08-04T00:10:00.000+02:00",
        dateEnd: "2024-08-04T01:20:00.000+02:00",
        id: "353fd4e7-3d52-4675-a63a-4f3f5b4fe9a1",
      },
    ],
  },
  {
    event: "Bukartyk & Ajagore - Oficjalne Zakończenie Festiwalu",
    place: "Duża Scena",
    kind: "Koncert",
    description:
      "Piotr Bukartyk (jak sam o sobie mówi) jest grajkiem. Od mniej więcej czterdziestu lat pisze do rymu, układa do tego melodie, a potem to śpiewa. Niezwykle utalentowany gitarzysta, kompozytor, piosenkarz i tekściarz ponownie zaszczyci nas swoją obecnością na Dużej Scenie, występując w towarzystwie warsztatowiczów, z którymi wspólnie uroczyście zakończą 30. edycję Pol'and'Rock Festival.   \n \n  #poezja śpiewana",
    id: "d097ec02-3870-4c1d-9fa3-5a26cbe97bc5",
    instances: [
      {
        dateStart: "2024-08-04T01:40:00.000+02:00",
        dateEnd: "2024-08-04T02:20:00.000+02:00",
        id: "756a828e-c70c-4154-ba62-ce8ab8db880f",
      },
    ],
  },
];

const daysToDatesMap: Record<Day, Date> = {
  wednesday: new Date("2024-07-31T00:00:00.000+02:00"),
  thursday: new Date("2024-08-01T00:00:00.000+02:00"),
  friday: new Date("2024-08-02T00:00:00.000+02:00"),
  saturday: new Date("2024-08-03T00:00:00.000+02:00"),
};
export const getDayByDate = (_date: string | Date) => {
  const date = z.coerce.date().parse(_date);
  const maybeDay = Object.entries(daysToDatesMap).find((entry) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_day, asDate] = entry;
    if (isSameDay(asDate, date)) {
      return entry;
    }
  })?.[0];
  if (isDay(maybeDay)) {
    return maybeDay;
  }
};
