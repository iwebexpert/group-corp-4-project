import { FilialReportFormStep } from "./schema"

export const step1: FilialReportFormStep = [
  {
    title: 'Добыча нефти из скважин по способам эксплуатации:',
    stringNumber: '001',
    localStorageKey: 'step1',
    fields: [
      {
        name: 'field1_1',
        label: 'Добыча с начала года, т (фактически)',
        type: 'number',
      },
      {
        name: 'field1_2',
        label: 'Число скважино-месяцев с начала года (числившихся)',
        type: 'number',
      },
      {
        name: 'field1_3',
        label: 'Число скважино-месяцев с начала года (отработанных)',
        type: 'number',
      },
      {
        name: 'field1_4',
        label: 'Средний дебит на отработан-ный скважино-месяц, т (фактически) (1:3)',
        type: 'number',
      },
      {
        name: 'field1_5',
        label: 'Число скважин, дающих продукцию на конец отчетного периода',
        type: 'number',
      },
      {
        name: 'field1_6',
        label: 'Извлечено из скважин жидкости с начала года, т',
        type: 'number',
      },
    ],
  },
  {
    title: 'в том числе электропогружными',
    stringNumber: '002',
    fields: [
      {
        name: 'field2_1',
        label: 'Добыча с начала года, т (фактически)',
        type: 'number',
      },
      {
        name: 'field2_2',
        label: 'Число скважино-месяцев с начала года (числившихся)',
        type: 'number',
      },
      {
        name: 'field2_3',
        label: 'Число скважино-месяцев с начала года (отработанных)',
        type: 'number',
      },
      {
        name: 'field2_4',
        label: 'Средний дебит на отработан-ный скважино-месяц, т (фактически) (1:3)',
        type: 'number',
      },
      {
        name: 'field2_5',
        label: 'Число скважин, дающих продукцию на конец отчетного периода',
        type: 'number',
      },
      {
        name: 'field2_6',
        label: 'Извлечено из скважин жидкости с начала года, т',
        type: 'number',
      },
    ],
  },

  {
    title: 'компрессорами (включая бескомпрессорный газлифт)',
    stringNumber: '003',
    fields: [
      {
        name: 'field3_1',
        label: 'Добыча с начала года, т (фактически)',
        type: 'number',
      },
      {
        name: 'field3_2',
        label: 'Число скважино-месяцев с начала года (числившихся)',
        type: 'number',
      },
      {
        name: 'field3_3',
        label: 'Число скважино-месяцев с начала года (отработанных)',
        type: 'number',
      },
      {
        name: 'field3_4',
        label: 'Средний дебит на отработан-ный скважино-месяц, т (фактически) (1:3)',
        type: 'number',
      },
      {
        name: 'field3_5',
        label: 'Число скважин, дающих продукцию на конец отчетного периода',
        type: 'number',
      },
      {
        name: 'field3_6',
        label: 'Извлечено из скважин жидкости с начала года, т',
        type: 'number',
      },
    ],
  },

  {
    title: 'фонтанами',
    stringNumber: '004',
    fields: [
      {
        name: 'field4_1',
        label: 'Добыча с начала года, т (фактически)',
        type: 'number',
      },
      {
        name: 'field4_2',
        label: 'Число скважино-месяцев с начала года (числившихся)',
        type: 'number',
      },
      {
        name: 'field4_3',
        label: 'Число скважино-месяцев с начала года (отработанных)',
        type: 'number',
      },
      {
        name: 'field4_4',
        label: 'Средний дебит на отработан-ный скважино-месяц, т (фактически) (1:3)',
        type: 'number',
      },
      {
        name: 'field4_5',
        label: 'Число скважин, дающих продукцию на конец отчетного периода',
        type: 'number',
      },
      {
        name: 'field4_6',
        label: 'Извлечено из скважин жидкости с начала года, т',
        type: 'number',
      },
    ],
  },

  {
    title: 'прочими способами',
    stringNumber: '005',
    fields: [
      {
        name: 'field5_1',
        label: 'Добыча с начала года, т (фактически)',
        type: 'number',
      },
      {
        name: 'field5_2',
        label: 'Число скважино-месяцев с начала года (числившихся)',
        type: 'number',
      },
      {
        name: 'field5_3',
        label: 'Число скважино-месяцев с начала года (отработанных)',
        type: 'number',
      },
      {
        name: 'field5_4',
        label: 'Средний дебит на отработан-ный скважино-месяц, т (фактически) (1:3)',
        type: 'number',
      },
      {
        name: 'field5_5',
        label: 'Число скважин, дающих продукцию на конец отчетного периода',
        type: 'number',
      },
      {
        name: 'field5_6',
        label: 'Извлечено из скважин жидкости с начала года, т',
        type: 'number',
      },
    ],
  },

  {
    title: 'Итого (001+003+004+005)=(007+010)',
    stringNumber: '006',
    fields: [
      {
        name: 'field6_1',
        label: 'Добыча с начала года, т (фактически)',
        type: 'number',
        summa: ['field1_1', 'field3_1', 'field4_1', 'field5_1'],
      },
      {
        name: 'field6_2',
        label: 'Число скважино-месяцев с начала года (числившихся)',
        type: 'number',
        summa: ['field1_2', 'field3_2', 'field4_2', 'field5_2'],
      },
      {
        name: 'field6_3',
        label: 'Число скважино-месяцев с начала года (отработанных)',
        type: 'number',
        summa: ['field1_3', 'field3_3', 'field4_3', 'field5_3'],
      },
      {
        name: 'field6_4',
        label: 'Средний дебит на отработан-ный скважино-месяц, т (фактически) (1:3)',
        type: 'number',
        summa: ['field1_4', 'field3_4', 'field4_4', 'field5_4'],
      },
      {
        name: 'field6_5',
        label: 'Число скважин, дающих продукцию на конец отчетного периода',
        type: 'number',
        summa: ['field1_5', 'field3_5', 'field4_5', 'field5_5'],
      },
      {
        name: 'field6_6',
        label: 'Извлечено из скважин жидкости с начала года, т',
        type: 'number',
        summa: ['field1_6', 'field3_6', 'field4_6', 'field5_6'],
      },
    ],
  },

  {
    title: 'Добыча нефти по категориям скважин: из старых скважин',
    stringNumber: '007',
    fields: [
      {
        name: 'field7_1',
        label: 'Добыча с начала года, т (фактически)',
        type: 'number',
      },
      {
        name: 'field7_2',
        label: 'Число скважино-месяцев с начала года (числившихся)',
        type: 'number',
      },
      {
        name: 'field7_3',
        label: 'Число скважино-месяцев с начала года (отработанных)',
        type: 'number',
      },
      {
        name: 'field7_4',
        label: 'Средний дебит на отработан-ный скважино-месяц, т (фактически) (1:3)',
        type: 'number',
      },
      {
        name: 'field7_5',
        label: 'Число скважин, дающих продукцию на конец отчетного периода',
        type: 'number',
      },
      {
        name: 'field7_6',
        label: 'Извлечено из скважин жидкости с начала года, т',
        type: 'number',
      },
    ],
  },

  {
    title: 'в том числе перешедших с прошлого года',
    stringNumber: '008',
    fields: [
      {
        name: 'field8_1',
        label: 'Добыча с начала года, т (фактически)',
        type: 'number',
      },
      {
        name: 'field8_2',
        label: 'Число скважино-месяцев с начала года (числившихся)',
        type: 'number',
      },
      {
        name: 'field8_3',
        label: 'Число скважино-месяцев с начала года (отработанных)',
        type: 'number',
      },
      {
        name: 'field8_4',
        label: 'Средний дебит на отработан-ный скважино-месяц, т (фактически) (1:3)',
        type: 'number',
      },
      {
        name: 'field8_5',
        label: 'Число скважин, дающих продукцию на конец отчетного периода',
        type: 'number',
      },
      {
        name: 'field8_6',
        label: 'Извлечено из скважин жидкости с начала года, т',
        type: 'number',
      },
    ],
  },

  {
    title: 'из новых скважин',
    stringNumber: '010',
    fields: [
      {
        name: 'field10_1',
        label: 'Добыча с начала года, т (фактически)',
        type: 'number',
      },
      {
        name: 'field10_2',
        label: 'Число скважино-месяцев с начала года (числившихся)',
        type: 'number',
      },
      {
        name: 'field10_3',
        label: 'Число скважино-месяцев с начала года (отработанных)',
        type: 'number',
      },
      {
        name: 'field10_4',
        label: 'Средний дебит на отработан-ный скважино-месяц, т (фактически) (1:3)',
        type: 'number',
      },
      {
        name: 'field10_5',
        label: 'Число скважин, дающих продукцию на конец отчетного периода',
        type: 'number',
      },
      {
        name: 'field10_6',
        label: 'Извлечено из скважин жидкости с начала года, т',
        type: 'number',
      },
    ],
  },

  {
    title: 'Добыча шахтной, попутной и случайной нефти',
    stringNumber: '011',
    fields: [
      {
        name: 'field11_1',
        label: 'Добыча с начала года, т (фактически)',
        type: 'number',
      },
    ],
  },

  {
    title: 'в том числе при опробовании разведочных скважин',
    stringNumber: '012',
    fields: [
      {
        name: 'field12_1',
        label: 'Добыча с начала года, т (фактически)',
        type: 'number',
      },
    ],
  },

  {
    title: 'Всего добыто нефти (без газового конденсата) (006+011)',
    stringNumber: '013',
    fields: [
      {
        name: 'field13_1',
        label: 'Добыча с начала года, т (фактически)',
        type: 'number',
        summa: ['field6_1', 'field11_1'],
      },
    ],
  },
]

export const step2: FilialReportFormStep = [
  {
    title: 'Всего скважин',
    stringNumber: '041',
    fields: [
      {
        name: 'field41_1',
        label: 'Календарное время эксплуатационного фонда — всего (гр. 2 +5+7)',
        type: 'number',
        summa: ['field41_2', 'field41_5', 'field41_7'],
      },
      {
        name: 'field41_2',
        label: 'В том числе календарное время действующего фонда (всего)',
        type: 'number',
      },
      {
        name: 'field41_3',
        label: 'В том числе календарное время действующего фонда в том числе время эксплуатации',
        type: 'number',
      },
      {
        name: 'field41_4',
        label: 'В том числе календарное время действующего фонда в том числе время простоев',
        type: 'number',
      },
      {
        name: 'field41_5',
        label:
          'В том числе календарное время скважин, не дававших продукцию в последнем месяце отчетного периода (всего)',
        type: 'number',
      },
      {
        name: 'field41_6',
        label:
          'В том числе календарное время скважин, не дававших продукцию в последнем месяце отчетного периода (в том числе в бездействии с прошлых лет)',
        type: 'number',
      },
      {
        name: 'field41_7',
        label:
          'В том числе календарное время скважин, находящихся в ожидании освоения и освоении после бурения',
        type: 'number',
      },
    ],
  },
  {
    title: 'в том числе новых',
    stringNumber: '042',
    fields: [
      {
        name: 'field42_1',
        label: 'Календарное время эксплуатационного фонда — всего (гр. 2 +5+7)',
        type: 'number',
        summa: ['field42_2', 'field42_5', 'field42_7'],
      },
      {
        name: 'field42_2',
        label: 'В том числе календарное время действующего фонда (всего)',
        type: 'number',
      },
      {
        name: 'field42_3',
        label: 'В том числе календарное время действующего фонда в том числе время эксплуатации',
        type: 'number',
      },
      {
        name: 'field42_4',
        label: 'В том числе календарное время действующего фонда в том числе время простоев',
        type: 'number',
      },
      {
        name: 'field42_5',
        label:
          'В том числе календарное время скважин, не дававших продукцию в последнем месяце отчетного периода (всего)',
        type: 'number',
      },
      {
        name: 'field42_7',
        label:
          'В том числе календарное время скважин, находящихся в ожидании освоения и освоении после бурения',
        type: 'number',
      },
    ],
  },
]

export const step3: FilialReportFormStep = [
  {
    title: 'Нефтяные (стр. 053+055+056)',
    stringNumber: '051',
    fields: [
      {
        name: 'field51_1',
        label: 'Новые скважины (всего (гр. 2+3+4))',
        type: 'number',
        summa: ['field51_2', 'field51_3', 'field51_4'],
      },
      {
        name: 'field51_2',
        label: 'Новые скважины в том числе из бурения и освоения после бурения',
        type: 'number',
        summa: ['field53_2', 'field55_2', 'field56_2'],
      },
      {
        name: 'field51_3',
        label: 'Новые скважины в том числе из консервации',
        type: 'number',
        summa: ['field53_3', 'field55_3', 'field56_3'],
      },
      {
        name: 'field51_4',
        label: 'Новые скважины в том числе из других фондов скважин',
        type: 'number',
        summa: ['field53_4', 'field55_4', 'field56_4'],
      },
      {
        name: 'field51_5',
        label: 'Введенные из бездействия (с прошлых лет)',
        type: 'number',
        summa: ['field53_5', 'field55_5', 'field56_5'],
      },
    ],
  },

  {
    title: 'из них: разведочные',
    stringNumber: '052',
    fields: [
      {
        name: 'field52_1',
        label: 'Новые скважины (всего (гр. 2+3+4))',
        type: 'number',
      },
    ],
  },

  {
    title: 'по способам эксплуатации: насосные',
    stringNumber: '053',
    fields: [
      {
        name: 'field53_1',
        label: 'Новые скважины (всего (гр. 2+3+4))',
        type: 'number',
        summa: ['field53_2', 'field53_3', 'field53_4'],
      },
      {
        name: 'field53_2',
        label: 'Новые скважины в том числе из бурения и освоения после бурения',
        type: 'number',
      },
      {
        name: 'field53_3',
        label: 'Новые скважины в том числе из консервации',
        type: 'number',
      },
      {
        name: 'field53_4',
        label: 'Новые скважины в том числе из других фондов скважин',
        type: 'number',
      },
      {
        name: 'field53_5',
        label: 'Введенные из бездействия (с прошлых лет)',
        type: 'number',
      },
    ],
  },

  {
    title: 'в том числе: электропогружными насосами',
    stringNumber: '054',
    fields: [
      {
        name: 'field54_1',
        label: 'Новые скважины (всего (гр. 2+3+4))',
        type: 'number',
        summa: ['field54_2', 'field54_3', 'field54_4'],
      },
      {
        name: 'field54_2',
        label: 'Новые скважины в том числе из бурения и освоения после бурения',
        type: 'number',
      },
      {
        name: 'field54_3',
        label: 'Новые скважины в том числе из консервации',
        type: 'number',
      },
      {
        name: 'field54_4',
        label: 'Новые скважины в том числе из других фондов скважин',
        type: 'number',
      },
      {
        name: 'field54_5',
        label: 'Введенные из бездействия (с прошлых лет)',
        type: 'number',
      },
    ],
  },

  {
    title: 'компрессорные',
    stringNumber: '055',
    fields: [
      {
        name: 'field55_1',
        label: 'Новые скважины (всего (гр. 2+3+4))',
        type: 'number',
        summa: ['field55_2', 'field55_3', 'field55_4'],
      },
      {
        name: 'field55_2',
        label: 'Новые скважины в том числе из бурения и освоения после бурения',
        type: 'number',
      },
      {
        name: 'field55_3',
        label: 'Новые скважины в том числе из консервации',
        type: 'number',
      },
      {
        name: 'field55_4',
        label: 'Новые скважины в том числе из других фондов скважин',
        type: 'number',
      },
      {
        name: 'field55_5',
        label: 'Введенные из бездействия (с прошлых лет)',
        type: 'number',
      },
    ],
  },

  {
    title: 'фонтанные',
    stringNumber: '056',
    fields: [
      {
        name: 'field56_1',
        label: 'Новые скважины (всего (гр. 2+3+4))',
        type: 'number',
        summa: ['field56_2', 'field56_3', 'field56_4'],
      },
      {
        name: 'field56_2',
        label: 'Новые скважины в том числе из бурения и освоения после бурения',
        type: 'number',
      },
      {
        name: 'field56_3',
        label: 'Новые скважины в том числе из консервации',
        type: 'number',
      },
      {
        name: 'field56_4',
        label: 'Новые скважины в том числе из других фондов скважин',
        type: 'number',
      },
      {
        name: 'field56_5',
        label: 'Введенные из бездействия (с прошлых лет)',
        type: 'number',
      },
    ],
  },

  {
    title: 'Нагнетательные',
    stringNumber: '057',
    fields: [
      {
        name: 'field57_1',
        label: 'Новые скважины (всего (гр. 2+3+4))',
        type: 'number',
        summa: ['field57_2', 'field57_3', 'field57_4'],
      },
      {
        name: 'field57_2',
        label: 'Новые скважины в том числе из бурения и освоения после бурения',
        type: 'number',
      },
      {
        name: 'field57_3',
        label: 'Новые скважины в том числе из консервации',
        type: 'number',
      },
      {
        name: 'field57_4',
        label: 'Новые скважины в том числе из других фондов скважин',
        type: 'number',
      },
      {
        name: 'field57_5',
        label: 'Введенные из бездействия (с прошлых лет)',
        type: 'number',
      },
    ],
  },

  {
    title: 'из них после отработки на нефть',
    stringNumber: '058',
    fields: [
      {
        name: 'field58_1',
        label: 'Новые скважины (всего (гр. 2+3+4))',
        type: 'number',
      },
    ],
  },
]

export const step4: FilialReportFormStep = [
  {
    title: 'Всего (стр. 062+064)',
    stringNumber: '061',
    fields: [
      {
        name: 'field61_1',
        label: 'Добыча нефти с применением методов искусственного воздействия на пласт',
        type: 'number',
        summa: ['field62_1', 'field64_1'],
      },
      {
        name: 'field61_2',
        label:
          'В том числе увеличение (прирост) добычи за счет применения этих методов (фактически)',
        type: 'number',
        summa: ['field62_2', 'field64_2'],
      },
    ],
  },

  {
    title: 'Закачки воды',
    stringNumber: '062',
    fields: [
      {
        name: 'field62_1',
        label: 'Добыча нефти с применением методов искусственного воздействия на пласт',
        type: 'number',
      },
      {
        name: 'field62_2',
        label:
          'В том числе увеличение (прирост) добычи за счет применения этих методов (фактически)',
        type: 'number',
      },
    ],
  },

  {
    title: 'в том числе гидродинамические методы',
    stringNumber: '063',
    fields: [
      {
        name: 'field63_1',
        label: 'Добыча нефти с применением методов искусственного воздействия на пласт',
        type: 'number',
      },
      {
        name: 'field63_2',
        label:
          'В том числе увеличение (прирост) добычи за счет применения этих методов (фактически)',
        type: 'number',
      },
    ],
  },

  {
    title: 'Новые методы (стр. 065+066) — всего',
    stringNumber: '064',
    fields: [
      {
        name: 'field64_1',
        label: 'Добыча нефти с применением методов искусственного воздействия на пласт',
        type: 'number',
        summa: ['field65_1', 'field66_1'],
      },
      {
        name: 'field64_2',
        label:
          'В том числе увеличение (прирост) добычи за счет применения этих методов (фактически)',
        type: 'number',
        summa: ['field65_2', 'field66_2'],
      },
    ],
  },

  {
    title: 'в том числе: физико-химические (включая газовые)',
    stringNumber: '065',
    fields: [
      {
        name: 'field65_1',
        label: 'Добыча нефти с применением методов искусственного воздействия на пласт',
        type: 'number',
      },
      {
        name: 'field65_2',
        label:
          'В том числе увеличение (прирост) добычи за счет применения этих методов (фактически)',
        type: 'number',
      },
    ],
  },

  {
    title: 'термические',
    stringNumber: '066',
    fields: [
      {
        name: 'field66_1',
        label: 'Добыча нефти с применением методов искусственного воздействия на пласт',
        type: 'number',
      },
      {
        name: 'field66_2',
        label:
          'В том числе увеличение (прирост) добычи за счет применения этих методов (фактически)',
        type: 'number',
      },
    ],
  },
]

export const step5: FilialReportFormStep = [
  {
    title: 'Дающие нефть и газ',
    stringNumber: '111',
    fields: [
      {
        name: 'field111_1',
        label: 'Число скважин',
        type: 'number',
      },
    ],
  },

  {
    title:
      'Остановленные в последнем месяце отчетного периода из числа давших добычу в этом месяце',
    stringNumber: '112',
    fields: [
      {
        name: 'field112_1',
        label: 'Число скважин',
        type: 'number',
      },
    ],
  },

  {
    title: 'Итого действующих (111+112)',
    stringNumber: '113',
    fields: [
      {
        name: 'field113_1',
        label: 'Число скважин',
        type: 'number',
        summa: ['field111_1', 'field112_1'],
      },
    ],
  },

  {
    title: 'Не дававших продукцию в последнем месяце отчетного периода (бездействующий фонд)',
    stringNumber: '114',
    fields: [
      {
        name: 'field114_1',
        label: 'Число скважин',
        type: 'number',
      },
    ],
  },

  {
    title: 'Осваиваемые и ожидающие освоения после бурения',
    stringNumber: '115',
    fields: [
      {
        name: 'field115_1',
        label: 'Число скважин',
        type: 'number',
      },
    ],
  },

  {
    title: 'в том числе находящиеся в работах по освоению',
    stringNumber: '116',
    fields: [
      {
        name: 'field116_1',
        label: 'Число скважин',
        type: 'number',
      },
    ],
  },

  {
    title: 'Весь эксплуатационный фонд нефтяных скважин (113+114+115)',
    stringNumber: '117',
    fields: [
      {
        name: 'field117_1',
        label: 'Число скважин',
        type: 'number',
        summa: ['field113_1', 'field114_1', 'field115_1'],
      },
    ],
  },

  {
    title: 'из эксплуатационного фонда нефтяных скважин — телемеханизированные',
    stringNumber: '118',
    fields: [
      {
        name: 'field118_1',
        label: 'Число скважин',
        type: 'number',
      },
    ],
  },

  {
    title: 'Кроме того, скважины: водозаборные и дающие йодобромную и техническую воду',
    stringNumber: '119',
    fields: [
      {
        name: 'field119_1',
        label: 'Число скважин',
        type: 'number',
      },
    ],
  },

  {
    title: 'нагнетательные',
    stringNumber: '120',
    fields: [
      {
        name: 'field120_1',
        label: 'Число скважин',
        type: 'number',
      },
    ],
  },

  {
    title: 'в том числе действующие',
    stringNumber: '121',
    fields: [
      {
        name: 'field121_1',
        label: 'Число скважин',
        type: 'number',
      },
    ],
  },

  {
    title: 'контрольные',
    stringNumber: '123',
    fields: [
      {
        name: 'field123_1',
        label: 'Число скважин',
        type: 'number',
      },
    ],
  },

  {
    title: 'поглощающие скважины для сбора сточных вод и прочие',
    stringNumber: '124',
    fields: [
      {
        name: 'field124_1',
        label: 'Число скважин',
        type: 'number',
      },
    ],
  },

  {
    title: 'находящиеся в консервации',
    stringNumber: '125',
    fields: [
      {
        name: 'field125_1',
        label: 'Число скважин',
        type: 'number',
      },
    ],
  },

  {
    title: 'находящиеся в ожидании ликвидации',
    stringNumber: '127',
    fields: [
      {
        name: 'field127_1',
        label: 'Число скважин',
        type: 'number',
      },
    ],
  },

  {
    title: 'ликвидированные после эксплуатации',
    stringNumber: '128',
    fields: [
      {
        name: 'field128_1',
        label: 'Число скважин',
        type: 'number',
      },
    ],
  },

  {
    title: 'ликвидированные после бурения',
    stringNumber: '129',
    fields: [
      {
        name: 'field129_1',
        label: 'Число скважин',
        type: 'number',
      },
    ],
  },

  {
    title: 'Общий фонд скважин (117+119+120+123+124+125+127+128+129)',
    stringNumber: '130',
    fields: [
      {
        name: 'field130_1',
        label: 'Число скважин',
        type: 'number',
        summa: [
          'field117_1',
          'field119_1',
          'field120_1',
          'field123_1',
          'field124_1',
          'field125_1',
          'field127_1',
          'field128_1',
          'field129_1',
        ],
      },
    ],
  },

  {
    title:
      'Принято скважин из бурения с начала года (включая ликвидированные и находящиеся в ожидании ликвидации после эксплуатационного и разведочного бурения)',
    stringNumber: '131',
    fields: [
      {
        name: 'field131_1',
        label: 'Число скважин',
        type: 'number',
      },
    ],
  },

  {
    title: 'Принято из газового фонда',
    stringNumber: '132',
    fields: [
      {
        name: 'field132_1',
        label: 'Число скважин',
        type: 'number',
      },
    ],
  },

  {
    title: 'Прибыло в эксплуатационный фонд нефтяных скважин',
    stringNumber: '141',
    fields: [
      {
        name: 'field141_1',
        label: 'Число скважин',
        type: 'number',
      },
    ],
  },

  {
    title: 'Выбыло из эксплуатационного фонда нефтяных скважин',
    stringNumber: '142',
    fields: [
      {
        name: 'field142_1',
        label: 'Число скважин',
        type: 'number',
      },
    ],
  },
]

export const step6: FilialReportFormStep = [
  {
    title: 'Добыча нефтяного (попутного) газа, тысяч кубических метров',
    stringNumber: '151',
    fields: [
      {
        name: 'field151_1',
        label: 'Добыча газа (фактически)',
        type: 'number',
      },
      {
        name: 'field151_2',
        label: 'Расход газа на собственные нужды разработки месторождения',
        type: 'number',
      },
      {
        name: 'field151_3',
        label: 'Технологические потери при добыче газа',
        type: 'number',
      },
      {
        name: 'field151_4',
        label: 'Сожжено в факелах',
        type: 'number',
      },
    ],
  },
]

export const step7: FilialReportFormStep = [
  {
    title: 'Остаток на начало отчетного года',
    stringNumber: '161',
    fields: [
      {
        name: 'field161_1',
        label: 'Количество',
        type: 'number',
      },
    ],
  },
  
  {
    title: 'Приход: добыто',
    stringNumber: '162',
    fields: [
      {
        name: 'field162_1',
        label: 'Количество',
        type: 'number',
      },
    ],
  },

  {
    title: 'поступило от других предприятий',
    stringNumber: '163',
    fields: [
      {
        name: 'field163_1',
        label: 'Количество',
        type: 'number',
      },
    ],
  },

  {
    title: 'Итого (162+163)',
    stringNumber: '166',
    fields: [
      {
        name: 'field166_1',
        label: 'Количество',
        type: 'number',
        summa: ['field162_1', 'field163_1'],
      },
    ],
  },

  {
    title: 'Расход на производственно-технические нужды',
    stringNumber: '167',
    fields: [
      {
        name: 'field167_1',
        label: 'Количество',
        type: 'number',
      },
    ],
  },

  {
    title: 'Потери — всего',
    stringNumber: '168',
    fields: [
      {
        name: 'field168_1',
        label: 'Количество',
        type: 'number',
      },
    ],
  },

  {
    title: 'Сдано — всего (172+174+175+176+177+178)',
    stringNumber: '171',
    fields: [
      {
        name: 'field171_1',
        label: 'Количество',
        type: 'number',
        summa: ['field172_1', 'field174_1', 'field175_1', 'field176_1', 'field177_1', 'field178_1'],
      },
    ],
  },

  {
    title: 'в том числе: нефтегазоперерабатывающим заводам',
    stringNumber: '172',
    fields: [
      {
        name: 'field172_1',
        label: 'Количество',
        type: 'number',
      },
    ],
  },

  {
    title: 'в том числе газоперерабатывающим',
    stringNumber: '173',
    fields: [
      {
        name: 'field173_1',
        label: 'Количество',
        type: 'number',
      },
    ],
  },

  {
    title: 'сдано широкой фракции от стабилизации нефти',
    stringNumber: '174',
    fields: [
      {
        name: 'field174_1',
        label: 'Количество',
        type: 'number',
      },
    ],
  },

  {
    title: 'экспорт',
    stringNumber: '175',
    fields: [
      {
        name: 'field175_1',
        label: 'Количество',
        type: 'number',
      },
    ],
  },

  {
    title: 'бурению',
    stringNumber: '176',
    fields: [
      {
        name: 'field176_1',
        label: 'Количество',
        type: 'number',
      },
    ],
  },

  {
    title: 'прочим своим предприятиям и организациям',
    stringNumber: '177',
    fields: [
      {
        name: 'field177_1',
        label: 'Количество',
        type: 'number',
      },
    ],
  },

  {
    title: 'отпущено прочим предприятиям',
    stringNumber: '178',
    fields: [
      {
        name: 'field178_1',
        label: 'Количество',
        type: 'number',
      },
    ],
  },

  {
    title: 'Итого расхода (167+168+171)',
    stringNumber: '179',
    fields: [
      {
        name: 'field179_1',
        label: 'Количество',
        type: 'number',
        summa: ['field167_1', 'field168_1', 'field171_1'],
      },
    ],
  },

  {
    title: 'Остаток на конец отчетного периода (161+166-179)',
    stringNumber: '180',
    fields: [
      {
        name: 'field180_1',
        label: 'Количество',
        type: 'number',
        summa: ['field161_1', 'field166_1'],
        subtract: ['field179_1'],
      },
    ],
  },

  {
    title: 'в том числе в нефтепроводах и емкостях, введенных в отчетном году',
    stringNumber: '181',
    fields: [
      {
        name: 'field181_1',
        label: 'Количество',
        type: 'number',
      },
    ],
  },
]

export const step8: FilialReportFormStep = [
  {
    title: 'Поступало жидкости на установки по подготовке нефти',
    stringNumber: '182',
    fields: [
      {
        name: 'field182_1',
        label: 'Фактически, т',
        type: 'number',
      },
    ],
  },

  {
    title: 'Получено нефти с установок',
    stringNumber: '183',
    fields: [
      {
        name: 'field183_1',
        label: 'Фактически, т',
        type: 'number',
      },
    ],
  },
  
  {
    title: 'Подготовлено нефти другими способами (трубная деэмульсация, простой, отстой и другое)',
    stringNumber: '184',
    fields: [
      {
        name: 'field184_1',
        label: 'Фактически, т',
        type: 'number',
      },
    ],
  },

  {
    title: 'Потери нефти при подготовке',
    stringNumber: '185',
    fields: [
      {
        name: 'field185_1',
        label: 'Фактически, т',
        type: 'number',
      },
    ],
  },
]
