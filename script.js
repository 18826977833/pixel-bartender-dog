// 扩充饮料库
const drinkImages = {
    // 果汁类
    juice: [
        '🍊 橙汁', 
        '🍎 苹果汁', 
        '🍇 葡萄汁',
        '🥝 猕猴桃汁',
        '🍓 草莓汁',
        '🍑 水蜜桃汁',
        '🍍 菠萝汁',
        '🥭 芒果汁',
        '🍐 梨汁',
        '🫐 蓝莓汁'
    ],
    // 咖啡类
    coffee: [
        '☕ 美式咖啡',
        '🥛 拿铁咖啡',
        '☕ 卡布奇诺',
        '🫖 摩卡咖啡',
        '☕ 焦糖玛奇朵',
        '🥤 冰美式',
        '🧊 冰拿铁',
        '♨️ 浓缩咖啡',
        '☕ 榛果咖啡',
        '🫖 爱尔兰咖啡'
    ],
    // 奶茶类
    milktea: [
        '🧋 珍珠奶茶',
        '🥛 椰果奶茶',
        '🧋 布丁奶茶',
        '🥛 红豆奶茶',
        '🧋 芋圆奶茶',
        '🥛 焦糖奶茶',
        '🧋 抹茶奶茶',
        '🥛 草莓奶茶',
        '🧋 巧克力奶茶',
        '🥛 原味奶茶'
    ],
    // 鸡尾酒类
    cocktail: [
        '🍸 马天尼',
        '🍹 莫吉托',
        '🥂 玛格丽特',
        '🍷 长岛冰茶',
        '🍸 血腥玛丽',
        '🍹 蓝色珊瑚礁',
        '🥂 金汤力',
        '🍷 白俄罗斯',
        '🍸 杜松子酒',
        '🍹 椰林飘香'
    ],
    // 冰沙类
    smoothie: [
        '🥝 猕猴桃冰沙',
        '🍓 草莓冰沙',
        '🫐 蓝莓冰沙',
        '🥭 芒果冰沙',
        '🍌 香蕉冰沙',
        '🥥 椰子冰沙',
        '🍑 蜜桃冰沙',
        '🍎 苹果冰沙',
        '🍇 葡萄冰沙',
        '🍍 菠萝冰沙'
    ],
    // 特调饮品
    special: [
        '🌈 彩虹特饮',
        '⭐ 星空特调',
        '🌟 金色传说',
        '✨ 银河漫游',
        '🎆 极光幻想',
        '🎇 流星心愿',
        '💫 梦幻精灵',
        '🌠 星尘传说',
        '🎨 调酒师的灵感',
        '🎪 马戏团奇遇'
    ],
    // 茶类
    tea: [
        '🍵 绿茶',
        '🫖 红茶',
        '🍵 乌龙茶',
        '🫖 普洱茶',
        '🍵 茉莉花茶',
        '🫖 铁观音',
        '🍵 大红袍',
        '🫖 龙井茶',
        '🍵 蒲公英茶',
        '🫖 玫瑰花茶'
    ],
    // 默认饮品
    default: [
        '🥤 神秘特调',
        '🧃 惊喜饮品',
        '🧋 隐藏菜单'
    ]
};

// 记录已经制作过的饮品
let madeDrinks = new Set();

// 获取随机饮料（避免重复）
function getRandomDrinkImage(category) {
    const drinks = drinkImages[category];
    
    // 如果所有饮品都制作过了，清空记录
    if (madeDrinks.size >= drinks.length) {
        madeDrinks.clear();
    }
    
    // 获取还没制作过的饮品
    const availableDrinks = drinks.filter(drink => !madeDrinks.has(drink));
    
    // 随机选择一个饮品
    const selectedDrink = availableDrinks[Math.floor(Math.random() * availableDrinks.length)];
    
    // 记录这个饮品
    madeDrinks.add(selectedDrink);
    
    return selectedDrink;
}

// 扩充小狗回应语
const dogResponses = [
    "马上为您调制！",
    "这是个不错的选择呢！",
    "让我想想怎么调制...",
    "汪！包在我身上！",
    "这个我最拿手了！",
    "啊！是我最喜欢的饮品呢！",
    "需要加冰吗？汪！",
    "要加些小料吗？",
    "这个配方我刚学会！",
    "保证让您满意！汪汪！",
    "这个季节最适合喝这个了！",
    "您真懂品味呢！",
    "让我给您调制特别版！",
    "这是本店的招牌呢！",
    "您一定会喜欢的！"
];

// 优化饮料分类逻辑
function selectDrinkCategory(input) {
    input = input.toLowerCase();
    
    // 扩充关键词匹配
    if (input.includes('果汁') || input.includes('汁') || 
        input.includes('橙') || input.includes('苹果') || 
        input.includes('葡萄') || input.includes('猕猴桃') ||
        input.includes('草莓') || input.includes('芒果')) {
        return 'juice';
    }
    if (input.includes('咖啡') || input.includes('拿铁') || 
        input.includes('美式') || input.includes('卡布奇诺') ||
        input.includes('摩卡') || input.includes('浓缩')) {
        return 'coffee';
    }
    if (input.includes('奶茶') || input.includes('珍珠') || 
        input.includes('波霸') || input.includes('布丁') ||
        input.includes('椰果') || input.includes('芋圆')) {
        return 'milktea';
    }
    if (input.includes('鸡尾酒') || input.includes('酒') || 
        input.includes('莫吉托') || input.includes('玛格丽特') ||
        input.includes('马天尼')) {
        return 'cocktail';
    }
    if (input.includes('冰沙') || input.includes('思慕雪') || 
        input.includes('果昔')) {
        return 'smoothie';
    }
    if (input.includes('特调') || input.includes('特饮') || 
        input.includes('推荐') || input.includes('惊喜')) {
        return 'special';
    }
    if (input.includes('茶') || input.includes('绿茶') || 
        input.includes('红茶') || input.includes('乌龙')) {
        return 'tea';
    }
    
    return 'default';
}

// 点击按钮处理
document.getElementById('confirm-btn').addEventListener('click', async function() {
    const drinkInput = document.getElementById('drink-input').value;
    if (!drinkInput) {
        document.getElementById('dog-text').textContent = '汪？请告诉我你想喝什么！';
        return;
    }

    // 随机选择回应
    const response = dogResponses[Math.floor(Math.random() * dogResponses.length)];
    document.getElementById('dog-text').textContent = response;

    // 获取饮料
    const category = selectDrinkCategory(drinkInput);
    const drinkElement = document.getElementById('generated-drink');
    
    // 添加淡出效果
    drinkElement.style.opacity = '0.5';
    
    // 模拟调制过程
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // 显示新的饮料
    const selectedDrink = getRandomDrinkImage(category);
    drinkElement.textContent = selectedDrink;
    drinkElement.style.opacity = '1';
    
    // 显示完成信息
    document.getElementById('dog-text').textContent = 
        `您的${drinkInput}已经准备好了！这是${selectedDrink.split(' ')[1]}，希望您喜欢！`;
});

// 输入框回车确认
document.getElementById('drink-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('confirm-btn').click();
    }
});