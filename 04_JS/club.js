const 이효석 = {
  성인인가: true,
  VIP: false,
  취했는가: true,
  돈: false,
};

if (((이효석.성인인가 || 이효석.VIP) && !이효석.취했는가) || 이효석.돈) {
  console.log('통과');
} else {
  console.log('돌아가');
}