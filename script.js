document.addEventListener('DOMContentLoaded', function() {
    // 메뉴 탭 기능 구현
    const menuItems = document.querySelectorAll('.menu li');
    const sections = document.querySelectorAll('.section');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // 활성화된 메뉴 아이템 변경
            menuItems.forEach(menuItem => menuItem.classList.remove('active'));
            this.classList.add('active');
            
            // 해당 섹션 표시
            const target = this.getAttribute('data-target');
            sections.forEach(section => section.classList.remove('active'));
            document.getElementById(target).classList.add('active');
        });
    });
    
    // 배경 음악 제어
    const bgmToggle = document.getElementById('bgm-toggle');
    const bgmAudio = document.getElementById('background-music');
    const audioStatus = document.querySelector('.audio-status');
    let isPlaying = false;
    
    bgmToggle.addEventListener('click', function() {
        if (isPlaying) {
            bgmAudio.pause();
            audioStatus.textContent = '음악 재생';
            bgmToggle.innerHTML = '<i class="fas fa-music"></i><span class="audio-status">음악 재생</span>';
        } else {
            bgmAudio.play();
            audioStatus.textContent = '음악 정지';
            bgmToggle.innerHTML = '<i class="fas fa-pause"></i><span class="audio-status">음악 정지</span>';
        }
        isPlaying = !isPlaying;
    });
    
    // 불꽃 효과 애니메이션
    function createFlame() {
        const flame = document.createElement('div');
        flame.classList.add('flame');
        
        const size = Math.random() * 10 + 5; // 5px ~ 15px
        flame.style.width = `${size}px`;
        flame.style.height = `${size}px`;
        
        // 시작 위치 (화면 하단에서 무작위로)
        const startPositionX = Math.random() * 100;
        flame.style.left = `${startPositionX}%`;
        flame.style.bottom = '0';
        
        // 스타일 설정
        flame.style.position = 'absolute';
        flame.style.borderRadius = '50%';
        flame.style.backgroundColor = 'rgba(199, 62, 62, 0.2)';
        flame.style.boxShadow = '0 0 10px 2px rgba(199, 62, 62, 0.3)';
        flame.style.zIndex = '-1';
        
        // 애니메이션 설정
        const animationDuration = Math.random() * 8 + 7; // 7초 ~ 15초
        flame.style.animation = `flameRise ${animationDuration}s ease-out forwards`;
        
        document.querySelector('.flame-overlay').appendChild(flame);
        
        // 애니메이션 종료 후 요소 제거
        setTimeout(() => {
            flame.remove();
        }, animationDuration * 1000);
    }
    
    // 불꽃 애니메이션 CSS 추가
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes flameRise {
            0% {
                opacity: 0.4;
                transform: translateY(0) scale(1);
            }
            20% {
                opacity: 0.6;
            }
            50% {
                opacity: 0.4;
            }
            100% {
                opacity: 0;
                transform: translateY(-100vh) scale(0.5);
            }
        }
    `;
    document.head.appendChild(styleSheet);
    
    // 주기적으로 불꽃 생성
    setInterval(createFlame, 1000);
    
    // 라이터 불꽃 효과
    document.querySelector('.siwoo-dialogue').addEventListener('mouseenter', function() {
        const lighterFlame = document.createElement('div');
        lighterFlame.classList.add('lighter-flame');
        
        lighterFlame.style.position = 'absolute';
        lighterFlame.style.bottom = '100%';
        lighterFlame.style.left = '20px';
        lighterFlame.style.width = '10px';
        lighterFlame.style.height = '20px';
        lighterFlame.style.borderRadius = '50% 50% 20% 20%';
        lighterFlame.style.background = 'linear-gradient(to top, #ff6a00, #ff9a50)';
        lighterFlame.style.boxShadow = '0 0 20px 5px rgba(255, 106, 0, 0.5)';
        lighterFlame.style.transform = 'scale(0)';
        lighterFlame.style.transformOrigin = 'bottom';
        lighterFlame.style.animation = 'lighterFlame 0.5s ease-out forwards';
        
        this.style.position = 'relative';
        this.appendChild(lighterFlame);
        
        // 불꽃 깜빡임 애니메이션
        const flicker = document.createElement('style');
        flicker.textContent = `
            @keyframes lighterFlame {
                0% { transform: scale(0); }
                40% { transform: scale(1.2); }
                100% { transform: scale(1); }
            }
            
            @keyframes flicker {
                0% { opacity: 1; transform: scale(1); }
                25% { opacity: 0.8; transform: scale(0.95); }
                50% { opacity: 1; transform: scale(1.1); }
                75% { opacity: 0.9; transform: scale(0.97); }
                100% { opacity: 1; transform: scale(1); }
            }
        `;
        document.head.appendChild(flicker);
        
        // 깜빡임 효과 추가
        setTimeout(() => {
            lighterFlame.style.animation = 'flicker 0.5s infinite alternate';
        }, 500);
    });
    
    document.querySelector('.siwoo-dialogue').addEventListener('mouseleave', function() {
        const lighterFlame = document.querySelector('.lighter-flame');
        if (lighterFlame) {
            lighterFlame.style.animation = 'lighterFlameOut 0.3s forwards';
            
            const flameOut = document.createElement('style');
            flameOut.textContent = `
                @keyframes lighterFlameOut {
                    0% { transform: scale(1); opacity: 1; }
                    100% { transform: scale(0); opacity: 0; }
                }
            `;
            document.head.appendChild(flameOut);
            
            setTimeout(() => {
                lighterFlame.remove();
            }, 300);
        }
    });
    
    // 캐릭터 카드 호버 효과 강화
    const characterCards = document.querySelectorAll('.character-card');
    
    characterCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 20px rgba(199, 62, 62, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
        });
    });
}); 