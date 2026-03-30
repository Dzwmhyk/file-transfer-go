"use client";

import React from 'react';
import { Users } from 'lucide-react';

export default function WeChatGroup() {
    return (
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 sm:p-8 animate-fade-in-up">
            <div className="text-center">
                {/* 标题 */}
                <div className="mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Users className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">加入陨莫的小窝</h2>
                    <p className="text-slate-600 text-lg">
                        大佬们有意见/建议/bug反馈或者奇思妙想想来交流，可以注册加入辙隙
                    </p>
                </div>

              {/* 二维码/嵌入区域 */}
<div className="flex justify-center mb-6">
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
        <iframe
            width="410px"
            height="650px"
            allow="camera;microphone"
            src="https://chat.dzwmhyk.top/哈基莫之窝/"
            frameBorder={0}
            allowFullScreen
            className="rounded-xl w-[410px] h-[650px]"
        ></iframe>
    </div>
</div>
                </div>

                {/* 说明文字 */}
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <div className="text-sm text-green-700 space-y-2">
                        <p className="text-base font-semibold text-green-800 mb-3">🎉 欢迎加入我们的交流群！</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
                            <div className="flex items-center space-x-2">
                                <span>💬</span>
                                <span>分享使用心得和建议</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span>🐛</span>
                                <span>反馈问题和bug</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span>💡</span>
                                <span>提出新功能想法</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span>🤝</span>
                                <span>与其他用户交流技术</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 额外信息 */}
                <div className="mt-4 text-xs text-slate-500">
                    <p>群内禁止广告和无关内容，查看公共信息与交流请遵守辙隙用户条款</p>
                </div>
            </div>
        </div>
    );
}
