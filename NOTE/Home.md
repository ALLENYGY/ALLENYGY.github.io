
```contributionGraph
title: Contributions
graphType: default
dateRangeValue: 180
dateRangeType: LATEST_DAYS
startOfWeek: "1"
showCellRuleIndicators: true
titleStyle:
  textAlign: left
  fontSize: 25px
  fontWeight: normal
dataSource:
  type: PAGE
  value: ""
  dateField: {}
fillTheScreen: false
enableMainContainerShadow: false
mainContainerStyle:
  boxShadow: rgba(0, 0, 0, 0.16) 0px 1px 4px
  backgroundColor: "#00000000"
cellStyle:
  minWidth: 21px
  minHeight: 21px
cellStyleRules: []
```


```contributionWidget
id: 107b8079-4cb0-425b-95ab-375f94e2f52d
type: countdown
titleAlign: center
backgroundStyle: card
maxWidthRatio: 100
repeatType: none
showEndDateTime: true
endHour: 0
endMinute: 0
endSecond: 0
title: Semester Ending
endYear: 2024
endMonth: 5
endDayOfMonth: 1
timeTextPattern: yMdHms

```

```contributionWidget
id: c049088b-ba48-4622-8960-bc5b117ae040
type: chart
titleAlign: center
chartType: bar
backgroundStyle: card
maxWidthRatio: 100
maxHeight: 300
labelProperty: ""
labelFormat: $none
valueProperty: ""
filter:
  conditions: []
chartColorSet: ['#2D1F0C']
backgroundColor: "#6FB0D6"

```



%% 
# WorkView

## Create Note

```dataview
calendar file.ctime
```

## Modify Note

```dataview
calendar file.mtime
```

## Navigate

```dataview
table title,Author
WHERE contains(tags,"README")
```

## [[CO/README|Computer Organization]]

## [[Contest/Overview|Contest Overview]]

## [[DataAnalysis/README|Data Analysis]]

## [[DBM/README|Database Management System]]

## [[ProgramLanguage/README|Program Language]]

## [[Math/README|Mathematics ]]

## [[ProgramLanguage/Tools/README|Tools ]]
 %%