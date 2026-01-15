import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import {
  ShoppingCart,
  Settings,
  Wrench,
  Car,
  Headphones,
  ArrowRight,
  Users,
  Database,
  Zap
} from 'lucide-react';
import { Language } from '../types';

interface WorkflowDiagramProps {
  language: Language;
}

export const WorkflowDiagram = React.memo(({ language }: WorkflowDiagramProps) => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodes = {
    driveupmanager: {
      id: 'driveupmanager',
      title: language === 'tr' ? 'DriveUpManager' : 'DriveUpManager',
      subtitle: language === 'tr' ? 'B2B Operasyon' : 'B2B Operations',
      icon: Settings,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      position: { x: 70, y: 10 }
    },
    driveupfixer: {
      id: 'driveupfixer',
      title: language === 'tr' ? 'DriveUpFixer' : 'DriveUpFixer',
      subtitle: language === 'tr' ? 'Bakım & Onarım' : 'Maintenance',
      icon: Wrench,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      position: { x: 70, y: 70 }
    },
    driveuppro: {
      id: 'driveuppro',
      title: language === 'tr' ? 'DriveUpPro' : 'DriveUpPro',
      subtitle: language === 'tr' ? 'Filo Yönetimi' : 'Fleet Management',
      icon: Car,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      position: { x: 30, y: 70 }
    },
    driveupdesk: {
      id: 'driveupdesk',
      title: language === 'tr' ? 'DriveUpDesk' : 'DriveUpDesk',
      subtitle: language === 'tr' ? 'Çağrı Merkezi' : 'Call Center',
      icon: Headphones,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      position: { x: 50, y: 45 }
    }
  };

  const connections = [

    // DriveUpManager connections
    { from: 'driveupmanager', to: 'driveupfixer', label: language === 'tr' ? 'Bakım Talepleri' : 'Maintenance Requests', type: 'secondary' },
    { from: 'driveupmanager', to: 'driveupdesk', label: language === 'tr' ? 'Operasyon Desteği' : 'Operations Support', type: 'support' },

    // DriveUpPro connections
    { from: 'driveuppro', to: 'driveupfixer', label: language === 'tr' ? 'Filo Bakımı' : 'Fleet Maintenance', type: 'secondary' },
    { from: 'driveuppro', to: 'driveupdesk', label: language === 'tr' ? 'Teknik Destek' : 'Technical Support', type: 'support' },

    // DriveUpFixer connections
    { from: 'driveupfixer', to: 'driveupdesk', label: language === 'tr' ? 'Servis Koordinasyonu' : 'Service Coordination', type: 'support' },

    // Central data flow
    { from: 'driveupdesk', to: 'driveupmanager', label: language === 'tr' ? 'Merkezi Veri' : 'Central Data', type: 'data' },
    { from: 'driveupdesk', to: 'driveuppro', label: language === 'tr' ? 'Raporlama' : 'Reporting', type: 'data' }
  ];

  const getConnectionPath = (from: string, to: string) => {
    const fromNode = nodes[from as keyof typeof nodes];
    const toNode = nodes[to as keyof typeof nodes];

    const fromX = fromNode.position.x + 10;
    const fromY = fromNode.position.y + 5;
    const toX = toNode.position.x + 10;
    const toY = toNode.position.y + 5;

    const midX = (fromX + toX) / 2;
    const midY = (fromY + toY) / 2;

    return `M ${fromX} ${fromY} Q ${midX} ${midY - 5} ${toX} ${toY}`;
  };

  const getConnectionColor = (type: string) => {
    switch (type) {
      case 'primary': return '#007AFF';
      case 'secondary': return '#FF9500';
      case 'support': return '#34C759';
      case 'data': return '#5856D6';
      default: return '#8E8E93';
    }
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
            <h2 className="mb-4 sm:mb-6">
              {language === 'tr' ? 'Ekosistem İş Akışı' : 'Ecosystem Workflow'}
            </h2>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
              {language === 'tr'
                ? 'DriveUp ürünleri nasıl birbirleriyle entegre çalışarak araç kiralama sektöründe kapsamlı bir çözüm sunuyor.'
                : 'How DriveUp products work together in an integrated way to provide a comprehensive solution for the car rental industry.'
              }
            </p>
          </div>

          {/* Interactive Diagram */}
          <div className="relative">
            {/* Desktop Version */}
            <div className="hidden lg:block">
              <div className="relative w-full h-96 mx-auto">
                {/* SVG for connections */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-0"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <marker
                      id="arrowhead"
                      markerWidth="6"
                      markerHeight="4"
                      refX="6"
                      refY="2"
                      orient="auto"
                      fill="#007AFF"
                    >
                      <polygon points="0 0, 6 2, 0 4" />
                    </marker>
                  </defs>

                  {connections.map((connection, index) => (
                    <g key={index}>
                      <path
                        d={getConnectionPath(connection.from, connection.to)}
                        stroke={getConnectionColor(connection.type)}
                        strokeWidth="1.5"
                        fill="none"
                        strokeDasharray={connection.type === 'data' ? '3,3' : 'none'}
                        markerEnd="url(#arrowhead)"
                        opacity={hoveredNode ?
                          (hoveredNode === connection.from || hoveredNode === connection.to ? 1 : 0.3) : 0.7}
                      />
                    </g>
                  ))}
                </svg>

                {/* Nodes */}
                {Object.values(nodes).map((node) => (
                  <div
                    key={node.id}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-300 ${hoveredNode === node.id ? 'scale-110' : hoveredNode ? 'scale-95 opacity-50' : 'scale-100'
                      }`}
                    style={{
                      left: `${node.position.x}%`,
                      top: `${node.position.y}%`,
                    }}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <Card className={`w-32 h-24 cursor-pointer transition-all duration-300 hover:shadow-lg ${node.bgColor} ${node.borderColor} border-2`}>
                      <CardContent className="p-3 flex flex-col items-center justify-center h-full">
                        <node.icon className={`h-6 w-6 ${node.color} mb-2`} />
                        <div className="text-center">
                          <div className="text-xs font-semibold text-foreground">
                            <span className="text-foreground">Drive</span>
                            <span style={{ color: '#4a00ff' }}>UP</span>
                            {node.title.replace('DriveUp', '')}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {node.subtitle}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}

                {/* Legend */}
                <div className="absolute bottom-0 left-0 flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-0.5 bg-primary"></div>
                    <span className="text-muted-foreground">
                      {language === 'tr' ? 'Ana İş Akışı' : 'Main Workflow'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-0.5 bg-orange-500"></div>
                    <span className="text-muted-foreground">
                      {language === 'tr' ? 'Servis Akışı' : 'Service Flow'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-0.5 bg-green-500"></div>
                    <span className="text-muted-foreground">
                      {language === 'tr' ? 'Destek Akışı' : 'Support Flow'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-0.5 bg-purple-500 border-dashed border-t-2"></div>
                    <span className="text-muted-foreground">
                      {language === 'tr' ? 'Veri Akışı' : 'Data Flow'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Version */}
            <div className="lg:hidden">
              <div className="space-y-6">
                {/* Central Hub */}
                <div className="text-center mb-8">
                  <Card className="inline-block p-4 bg-indigo-50 border-indigo-200 border-2">
                    <CardContent className="p-0 flex items-center gap-3">
                      <Headphones className="h-8 w-8 text-indigo-600" />
                      <div>
                        <div className="font-semibold">
                          <span className="text-foreground">Drive</span>
                          <span style={{ color: '#4a00ff' }}>UP</span>Desk
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {language === 'tr' ? 'Merkezi Koordinasyon' : 'Central Coordination'}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Flow Steps */}
                <div className="space-y-4">
                  {/* Customer Journey */}
                  <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <Users className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">
                          Müşteri Talebi
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Giriş Noktası
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <Settings className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">
                          <span className="text-foreground">Drive</span>
                          <span style={{ color: '#4a00ff' }}>UP</span>Manager
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {language === 'tr' ? 'Operasyon Yönetimi' : 'Operations Management'}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Maintenance Flow */}
                  <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <Car className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">
                          <span className="text-foreground">Drive</span>
                          <span style={{ color: '#4a00ff' }}>UP</span>Pro
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {language === 'tr' ? 'Filo Takibi' : 'Fleet Tracking'}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                        <Wrench className="h-4 w-4 text-orange-600" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">
                          <span className="text-foreground">Drive</span>
                          <span style={{ color: '#4a00ff' }}>UP</span>Fixer
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {language === 'tr' ? 'Bakım & Onarım' : 'Maintenance & Repair'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="h-4 w-4 text-primary" />
                      <span className="font-medium text-sm">
                        {language === 'tr' ? 'Merkezi Veri Yönetimi' : 'Centralized Data Management'}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {language === 'tr'
                        ? 'Tüm platformlar arasında veri senkronizasyonu'
                        : 'Data synchronization across all platforms'
                      }
                    </p>
                  </div>

                  <div className="p-4 bg-accent/5 rounded-lg border border-accent/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-4 w-4 text-accent" />
                      <span className="font-medium text-sm">
                        {language === 'tr' ? 'Otomatik İş Akışları' : 'Automated Workflows'}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {language === 'tr'
                        ? 'Süreçler arası otomatik bilgi transferi'
                        : 'Automatic information transfer between processes'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Workflow Description */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-0">
            <Card className="card-minimal p-4 sm:p-6">
              <div className="flex items-start gap-3 mb-4">
                <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">
                    {language === 'tr' ? 'Müşteri Deneyimi Akışı' : 'Customer Experience Flow'}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {language === 'tr'
                      ? 'Müşteri talepleri alınır, DriveUpManager operasyonu yönetiyor, gerektiğinde DriveUpFixer bakım sağlıyor ve DriveUpDesk destek veriyor.'
                      : 'Customer requests are received, DriveUpManager handles operations, DriveUpFixer provides maintenance when needed, and DriveUpDesk offers support.'
                    }
                  </p>
                </div>
              </div>
            </Card>

            <Card className="card-minimal p-4 sm:p-6">
              <div className="flex items-start gap-3 mb-4">
                <Database className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">
                    {language === 'tr' ? 'Entegre Veri Sistemi' : 'Integrated Data System'}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {language === 'tr'
                      ? 'Tüm platformlar merkezi veritabanı üzerinden senkronize çalışır, gerçek zamanlı bilgi paylaşımı ve raporlama sağlar.'
                      : 'All platforms work synchronized through a central database, providing real-time information sharing and reporting.'
                    }
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
});