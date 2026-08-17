import {
  Banknote,
  ChartBar,
  FolderOpen,
  Forklift,
  Gauge,
  GraduationCap,
  HeartPulse,
  LayoutDashboard,
  ListTodo,
  type LucideIcon,
  Server,
  ShoppingBag,
} from "lucide-react";

export interface ModuleInfo {
  id: string;
  name: string;
  icon: LucideIcon;
  markdown: string;
}

export const modules: ModuleInfo[] = [
  {
    id: "default",
    name: "Default",
    icon: LayoutDashboard,
    markdown: `
# Default

O módulo **Default** é a visão geral do seu negócio. Ele reúne os principais indicadores em uma única tela para que você acompanhe o desempenho da empresa sem precisar navegar entre módulos.

## Visão geral

- Cards com métricas principais: receita, despesas, ticket médio e lucro líquido.
- Gráficos de evolução de receita e despesas ao longo do tempo.
- Lista das transações mais recentes com status e categoria.
- Atalhos para os módulos que você mais usa.

## Indicadores

O painel consolida métricas como faturamento do mês, metas atingidas, novos clientes e conversão. Tudo é atualizado em tempo real a partir dos dados do seu sistema.

## Personalização

Cada card pode ser reorganizado e a densidade de informações ajustada para caber na sua rotina. Use os controles de layout do topo da página para alternar entre modos de exibição.

## Dica

Comece pelo Default para calibrar seus objetivos e, em seguida, aprofunde-se nos módulos de CRM, Finance e Analytics.
`,
  },
  {
    id: "crm",
    name: "CRM",
    icon: ChartBar,
    markdown: `
# CRM

O módulo **CRM** centraliza a gestão de relacionamento com clientes: leads, oportunidades e negociações em um único fluxo.

## Pipeline de vendas

- Organize oportunidades por estágio: novo, qualificado, proposta e fechado.
- Arraste negociações entre estágios e acompanhe o valor do funil.
- Priorize com base no score e na probabilidade de fechamento.

## Atividades

Registre chamadas, reuniões e e-mails associados a cada negociação. O histórico de atividades mantém o time alinhado sobre cada contato.

## Receita projetada

Os gráficos de receita projetada comparam a meta anual com o realizado, separado por tipo de projeto e origem do lead.

## Dica

Mantenha os campos de estágio sempre atualizados: a precisão do funil depende da disciplina do time.
`,
  },
  {
    id: "finance",
    name: "Finance",
    icon: Banknote,
    markdown: `
# Finance

O módulo **Finance** dá visibilidade completa sobre o dinheiro da empresa: entradas, saídas e projeções.

## Visão financeira

- Patrimônio líquido com evolução mensal.
- Receitas e despesas do mês, com comparação ao período anterior.
- Pagamentos futuros e contas a vencer.

## Transações

Registre entradas e saídas com categorias e formas de pagamento. Filtre por período, categoria e tipo de transação.

## Metas

Defina metas de receita por mês e acompanhe o progresso em barras de desempenho. O sistema sinaliza automaticamente quando a meta está em risco.

## Dica

Configure os lembretes de pagamento para evitar juros e manter o fluxo de caixa saudável.
`,
  },
  {
    id: "analytics",
    name: "Analytics",
    icon: Gauge,
    markdown: `
# Analytics

O módulo **Analytics** transforma dados em decisões: tráfego, conversão e comportamento do usuário em gráficos comparativos.

## Tráfego

- Visitas por canal de origem: orgânico, direto, social e pago.
- Sessões por dispositivo e por período.
- Comparativo com o período anterior para medir crescimento.

## Conversão

Funil de conversão entre etapas, taxa de conversão geral e por canal. Identifique onde os visitantes estão desistindo.

## Métricas avançadas

Métricas como LTV, taxa de retenção e custo por aquisição ajudam a entender a saúde do negócio além do tráfego bruto.

## Dica

Use o filtro de período no topo para comparar campanhas e identificar sazonalidade.
`,
  },
  {
    id: "productivity",
    name: "Productivity",
    icon: ListTodo,
    markdown: `
# Productivity

O módulo **Productivity** acompanha tarefas, carga horária e desempenho do time em um só lugar.

## Tarefas

- Lista de tarefas com prioridade, responsável e prazo.
- Acompanhamento de tarefas concluídas por dia.
- Classificação automática de tarefas atrasadas.

## Carga horária

Acompanhe horas trabalhadas por membro do time e identifique sobrecarga ou ociosidade.

## Foco

O gráfico de foco mostra os horários de maior produtividade da equipe, ajudando a agendar trabalho profundo.

## Dica

Defina prazos realistas: tarefas atrasadas impactam diretamente as métricas do time.
`,
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    icon: ShoppingBag,
    markdown: `
# E-commerce

O módulo **E-commerce** gerencia vendas, pedidos e performance da sua loja online.

## Vendas

- Faturamento do dia, do mês e ticket médio.
- Vendas por canal e por produto.
- Comparativo com o período anterior.

## Pedidos

- Lista de pedidos com status: pendente, processando, enviado e entregue.
- Ações rápidas de atualização de status e emissão de nota.
- Detalhes de cada pedido com itens e valores.

## Catálogo

Acompanhe o desempenho dos produtos, os mais vendidos e a margem de cada item do catálogo.

## Dica

Monitore pedidos pendentes diariamente para evitar atrasos e cancelamentos.
`,
  },
  {
    id: "academy",
    name: "Academy",
    icon: GraduationCap,
    markdown: `
# Academy

O módulo **Academy** é o painel de gestão de cursos e alunos da sua plataforma de ensino.

## Cursos

- Lista de cursos com número de alunos e progresso médio.
- Receita gerada por curso.
- Métricas de engajamento por aula.

## Alunos

Acompanhe a evolução individual de cada aluno: aulas assistidas, notas e tempo de estudo.

## Conclusão

Taxa de conclusão por curso e alertas para cursos com alta evasão.

## Dica

Identifique cursos com baixa conclusão e revise o conteúdo das primeiras aulas, onde a evasão costuma ser maior.
`,
  },
  {
    id: "logistics",
    name: "Logistics",
    icon: Forklift,
    markdown: `
# Logistics

O módulo **Logistics** controla entregas, frota e rotas da sua operação logística.

## Entregas

- Volume de entregas por dia e por motorista.
- Taxa de entregas no prazo e atrasos.
- Ocorrências por etapa do ciclo de entrega.

## Frota

- Uso da frota com métricas de combustível e manutenção.
- Motoristas em atividade e carga por veículo.
- Alerta de manutenção preventiva.

## Rotas

Custo médio por rota e comparação de eficiência entre regiões.

## Dica

Acompanhe a taxa de entrega no prazo: é o indicador que mais impacta a satisfação do cliente.
`,
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    icon: Server,
    markdown: `
# Infrastructure

O módulo **Infrastructure** monitora servidores, serviços e recursos da sua operação técnica.

## Servidores

- Status de cada servidor com uptime e região.
- Uso de CPU, memória e disco em tempo real.
- Alertas de capacidade e indisponibilidade.

## Serviços

Lista de serviços com disponibilidade percentual e tempo de resposta. Os serviços são classificados automaticamente como estáveis ou instáveis.

## Recursos

Gráfico de uso de recursos ao longo do tempo para planejar capacidade e evitar gargalos.

## Dica

Use o módulo para antecipar problemas antes que impactem usuários finais.
`,
  },
  {
    id: "file-manager",
    name: "File Manager",
    icon: FolderOpen,
    markdown: `
# File Manager

O módulo **File Manager** é o gerenciador de arquivos do painel: navegue, envie e organize documentos.

## Navegação

- Visualização em grade ou lista de pastas e arquivos.
- Caminho de navegação com breadcrumb.
- Ações rápidas de renomear, mover e excluir.

## Envio

Arraste arquivos para enviar e acompanhe o progresso do upload com barra de status.

## Compartilhamento

Compartilhe arquivos com links e controle permissões de acesso.

## Dica

Organize o conteúdo em pastas por projeto para facilitar a busca e o compartilhamento.
`,
  },
  {
    id: "patient-monitoring",
    name: "Patient Monitoring",
    icon: HeartPulse,
    markdown: `
# Patient Monitoring

O módulo **Patient Monitoring** acompanha pacientes e sinais vitais em tempo real.

## Pacientes

- Lista de pacientes com status e leito.
- Histórico de leituras de cada paciente.
- Alertas de valores fora do intervalo esperado.

## Sinais vitais

Acompanhe batimentos cardíacos, saturação de oxigênio e pressão arterial em gráficos contínuos.

## Alertas

Classificação automática de criticidade e notificações para a equipe responsável.

## Dica

Configure limites personalizados por paciente para reduzir alarmes falsos e focar no que importa.
`,
  },
];
