---
title: Java8函数式编程（lambda表达式）
date: 2020-02-04 09:41:37
category: Java进阶
tags: 
  - Java
  - Lambda
---

# Java8函数式编程（lambda表达式）

## 简介

面向对象编程是对数据进行抽象；函数式编程是对行为进行抽象。

核心思想：使用不可变值和函数，函数对一个值进行处理，映射成另一个值。

对核心类库的改进主要包括集合类的API和新引入的流Stream。流使程序员可以站在更高的抽象层次上对集合进行操作。

## 示例

- [Lambda 表达式的 10 个示例](https://mp.weixin.qq.com/s/Xhr9aNEMr0fIUWh27mH1pw)

- [learn-java8](https://github.com/biezhi/learn-java8)

- [java8-tutorial](https://github.com/aalansehaiyang/java8-tutorial)

- [一文让你明白lambda用法与源码分析](https://mp.weixin.qq.com/s/9mgD2aV6gML57RAPIEbZeQ)

## 分类

1. 惰性求值方法

```Java
list.stream.filter(f -> f.getName().equals("p1"));
```

这行代码并未做什么实际性的工作，filter知识描述了Stream，**没有产生新的集合**。

如果使多个条件组合，可以通过代码块{}

1. 及早求值方法

```Java
List<Person> resultList = list.stream().filter(f -> f.getName().equals("p1")).collect(Collectors.toList());
```

collect最终会从Stream产生新值，拥有终止操作。

理想方式使形成一个惰性求值的链，最后用一个及早求值的操作返回想要的结果。与建造者模式相似，建造者模式先是使用一系列操作设置属性和配置，最后调用build方法，创建对象。

## 常用方法

- collect(Collectors.toList())

Stream流生成一个List列表；`Collectors.toSet()`，生成Set集合。

```Java
Collectors.toMap(MemberModel::getUid, Function.identity());
```

`Function.identity()` 表示遍历的对象。

Collectors里提供了很多方法，比如字符串拼接。

- map

将一种类型转换成另外一种类型。

- filter

对Stream流中的元素进行过滤。true：保留；false：舍弃。

- flatMap

将多个Stream连接成一个Stream。

```Java
List<Integer> result = Stream.of(Arrays.asList(1, 3), Arrays.asList(5, 7)).flatMap(a -> a.stream()).collect(Collectors.toList());
```

结果：[1, 3, 5, 7]

- distinct

去重

- count

计总数

- min, max

最小值，最大值

```Java
List<Persion> lists = new ArrayList<Persion>();
lists.add(new Persion(1L, "p1"));
lists.add(new Persion(2L, "p2"));
lists.add(new Persion(3L, "p3"));
lists.add(new Persion(4L, "p4"));
Persion a = lists.stream().max(Comparator.comparing(t -> t.getId())).get();
System.out.println(a.getId());
```

如果比较器涉及多个条件，比较复杂，可以定制

```Java
Persion a = lists.stream().min(new Comparator<Persion>() {
    @Override
    public int compare(Persion o1, Persion o2) {
        if (o1.getId() > o2.getId()) return -1;
        if (o1.getId() < o2.getId()) return 1;
        return 0;
    }
}).get();
```

## 代码调试

可以使用peek方法，peek方法可只包含一个空的方法体，只要能设置断点即可，但有些IDE不允许空，如下示例，简单写一个打印逻辑。

注意，调试完后要删掉。

```Java
List<Persion> lists = new ArrayList<Persion>();
lists.add(new Persion(1L, "p1"));
lists.add(new Persion(2L, "p2"));
lists.add(new Persion(3L, "p3"));
lists.add(new Persion(4L, "p4"));
System.out.println(lists);

List<Persion> list2 = lists.stream()
        .filter(f -> f.getName().startsWith("p"))
        .peek(t -> {
            System.out.println(t.getName());
        })
        .collect(Collectors.toList());
System.out.println(list2);
```

## 一些例子

- 集合 -> 取元素的一个属性 -> 去重 -> 组装成List -> 返回

```Java
List<LickDO> liekDOs = new ArrayList<LikeDO>();
//add一系列元素
//得到收藏帖子的tid列表
List<Long> likeTidList = likeDOs.stream().map(LikeDO::getTid).distinct().collect(Collectors.toList());
```

- 集合 -> 按表达式过滤 -> 遍历、每个元素处理 -> 放入预先定义的几何中

```Java
Map<String, StkProduct> newStockName2Product = Maps.newConcurrentMap();
stockProducts.stream().filter(stkProduct -> stkProduct.enabled).forEach(stkProduct -> {
    String newName = BCConvert.bj2qj(StringUtils.replace(stkProduct.name, " ", ""));
    newStockName2Product.put(newName, stkProduct);
});

Set‹String› qjStockNames;
qjStockNames.stream().filter(name -> !acAutomaton.getKey2link().containsKey(name)).forEach(name -> {
    String value = "";
    StkProduct stkProduct = stockNameQj2Product.get(name);
    if (stkProduct != null) {
        value = stkProduct.name;
    }
    acAutomaton.getKey2link().put(name, value);
});
```

- 集合 -> map

```Java
List<ImageModel> imageModelList = null;
Map<Long, String> imagesMap = null;
imagesMap = imageModelList.stream().collect(Collectors.toMap(ImageModel::getAid, o -> IMAGE_ADDRESS_PREFIX + o.getUrl()));

Map<String, String> kvMap = postDetailCacheList.stream().collect(Collectors.toMap(detailCache -> getBbsSimplePostKey(detailsCache.getTid()), JSON::toJSONString));

Map<Long, Long> pidToTid;
List‹String› pidKeyList = pidToTid.entrySet().stream().map(o -> getKeyBbsReplyPid(o.getValue(), o.getKey())).collect(Collectors.toList());
```

- DO模型 -> Model模型

```Java
List<AdDO> adDOList;
adDOList.stream().map(adDo -> convertAdModel(adDo)).collect(Collectors.toList());
```

- phones是一个List‹String›，将相同的元素分组、归类

```Java
List‹String› phones=new ArrayList‹String›();
phones.add("a");
phones.add("b");
phones.add("a");
phones.add("a");
phones.add("c");
phones.add("b");
Map<String, List‹String›> phoneClassify = phones.stream().collect(Collectors.groupingBy(item -> item));
System.out.println(phoneClassify);
```

返回结果：

`
{a=[a, a, a], b=[b, b], c=[c]}
`