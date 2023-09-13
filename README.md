# Simple chart
원티드 프리온보딩 인터십 8월 4째주 과제 결과물 (시계열 차트) 입니다. <br/>
[배포링크](https://main--jovial-gelato-27d146.netlify.app/)


## 구현사항
### 1. 시계열 차트 구현
Area 그래프와 Bar 그래프가 존재하는 복합 그래프를 구현 하였으며 왼쪽 Y축은 Bar, 오른쪽 Y축은 Area를 나타냅니다.
<img width="1078" alt="스크린샷 2023-09-13 오후 5 54 52" src="https://github.com/BHyeonKim/wanted-pre-onboarding-12-4-bohyeon/assets/46583212/e9130caf-4881-4d58-96cc-189d10f46780">
<br/>
<br/>
<br/>

### 2. 호버 기능 구현
차트에 마우스를 호버하면 헤당하는 시간의 Area와 Bar 정보가 나타납니다.

https://github.com/BHyeonKim/wanted-pre-onboarding-12-4-bohyeon/assets/46583212/c3f096a0-029c-402e-81c9-b03fc8907dc5

<br/>
<br/>
<br/>


### 3. 필터링 구현
차트의 특정 영역을 클릭하거나 버튼으로 구역을 선택을 하면 차트에서 하이라이트 됩니다.

https://github.com/BHyeonKim/wanted-pre-onboarding-12-4-bohyeon/assets/46583212/9af22d76-e2ab-4070-849d-73728d4f6b9a


## 세부 기능 설명
### 1. 지역구에 따른 색 적용
지역구에 따른 색을 정의하여 막대의 색에 반영하였습니다.
```typescript
const getColor = (strict: string) => {
  switch (strict) {
    case '성북구':
      return '#63372C'
    case '강남구':
      return '#C97D60'
    case '노원구':
      return '#FFBCB5'
    case '중랑구':
      return '#F2E5D7'
    default:
      return '#262322'
  }
}
export default getColor
```
```typescript
// Chart/index.tsx
 <Bar barSize={10} dataKey="bar" yAxisId="bar">
          {data &&
            data.map((entry) => (
              <Cell
                fill={
                  entry.district === selectedValue
                    ? ACCENT_COLOR
                    : getColor(entry.district) // 색 적용
                }
                key={entry.date}
              />
            ))}
        </Bar>
```

### 2. 필터링 기능
필터링은 개방 폐쇄 원칙을 생각하여 ChartPage에 useState를 사용하여 선택한 지역을 저장하였습니다.
차후 다른 상태관리 방법을 선택하더라도 setState함수를 props로 차트 컴포넌트로 내려주면 됩니다.
```
const ChartPage = () => {
  const [district, setDistrict] = useState<string>()
  ...
```

### 3. 마우스 호버 기능
마우스 호버 기능은 recharts의 Tooltip 컴포넌트를 사용하였습니다.<br/>
Tooltip 컴포넌트에 커스텀 툴팁을 넣어서 원하는 데이터를 출력할 수 있도록 하였습니다.
```
// Chart/index.tsx
<Tooltip content={<CustomTooltip />} />
```

```
const CustomTooltip: FC<TooltipProps<ValueType, NameType>> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    const { payload: data } = payload[0]

    return (
      <div className={cx('customTooltip')}>
        <p>{`일시 : ${convertDate(label)}`}</p>
        <p>{`District : ${data.district}`}</p>
        <p>{`Area : ${data.area}`}</p>
        <p>{`Bar : ${data.bar}`}</p>
      </div>
    )
  }

  return null
}

export default CustomTooltip
```

## 주요 라이브러리
- react
- recharts : 차트를 구현하기 위해 사용하였습니다.
- msw : api를 모킹하기 위해 사용하였습니다.


## 폴더구조
```
    📦src
     ┣ 📂assets
     ┣ 📂components
     ┣ 📂hooks
     ┣ 📂mocks
     ┣ 📂pages
     ┣ 📂services
     ┣ 📂styles
     ┣ 📂types
     ┣ 📂utils
     ┣ 📜App.tsx
     ┣ 📜main.tsx
     ┗ 📜vite-env.d.ts
```
