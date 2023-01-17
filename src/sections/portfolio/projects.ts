import { Project } from "../../core/project";
import ServiceType from "../../core/service_type";
import StackType from "../../core/stack_type";

export const ProjectList: Project[] = [
    {
        costumer: "Fábrica de espelhos",
        description: "Aplicação android para tablets desenvolvida para os inspetores de uma grande fábrica de espelhos. A aplicação conta com armazenamento local e foi otimizada para realizar o mínimo de requisições para a API para evitar lentidão no carregamento dos dados, pois os operadores utilizam o app in loco e fábrica tinha baixa conectividade.",
        external_link: "texte.com",
        stack: [StackType.flutter, StackType.django],
        service_type: [ServiceType.app],
        image: undefined,
    },
    {
        costumer: "Imunus",
        description: "Aplicativo destinado para pacientes portadores de Esclerose Múltipla. No Imunus, os pacientes podem reportar novos surtos da doença, registrar como estão se sentindo emocionalmente e também conseguem obter um relatório mensal. A aplicação foi pensada e criada após uma série de entrevistas com paciente, médicos e familiares, e funciona para Android e iOS.",
        external_link: undefined,
        image: undefined,
        stack: [StackType.flutter, StackType.firebase],
        service_type: [ServiceType.app],
    },
    {
        costumer: "Empresa de telecomunicações",
        description: "O cliente é uma das maiores empresas de telecom de Recife e RMR. Para eles, nós desenvolvemos uma aplicação mobile para os técnicos visualizar seus chamados, reportar horas trabalhadas e solicitar materiais ou técnicos de apoio. Além do app, criamos um dashboard web para que supervisores e atendentes pudessem monitorar os status dos chamados.",
        external_link: undefined,
        image: undefined,
        stack: [StackType.angular, StackType.flutter, StackType.linux],
        service_type: [ServiceType.webSystem, ServiceType.app,]
    },
    {
        costumer: "Site FAST Soluções",
        description: "Migrei todo o site da empresa para Angular 11, criei a internacionalização do site com i18n, além de ter participado da criação de novas páginas do site.",
        external_link: undefined,
        image: undefined,
        stack: [StackType.angular, StackType.aws],
        service_type: [ServiceType.site,]
    }

];